import { mkdir, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { youtube, type VideoItem, type VideoOrientation } from '../data/videos';

const thumbnailsDir = fileURLToPath(new URL('../../public/images/yt/', import.meta.url));
const thumbnailMaxAgeMs = 1000 * 60 * 60 * 24 * 14;

function decodeXml(value: string) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function extractTag(source: string, tagName: string) {
  const match = source.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match?.[1]?.trim() ?? '';
}

async function isFresh(filePath: string) {
  try {
    const file = await stat(filePath);
    return file.size > 0 && Date.now() - file.mtimeMs < thumbnailMaxAgeMs;
  } catch {
    return false;
  }
}

export function getThumbnailPath(id: string) {
  return `/images/yt/${id}.jpg`;
}

/**
 * Shorts-Thumbnails in Originalformat (Portrait) laden.
 * Reihenfolge: oardefault.jpg (OAR = Original Aspect Ratio, 405×720 portrait)
 * → sddefault.jpg → hqdefault.jpg (landscape fallback).
 */
async function fetchThumbnailBytes(id: string, orientation: VideoOrientation): Promise<Uint8Array | null> {
  const urls =
    orientation === 'portrait'
      ? [
          `https://i.ytimg.com/vi/${id}/oardefault.jpg`,
          `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        ]
      : [
          `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        ];

  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok && res.headers.get('content-type')?.includes('image')) {
        const bytes = new Uint8Array(await res.arrayBuffer());
        // oardefault returns a tiny 120-byte placeholder if not available
        if (bytes.length > 1000) return bytes;
      }
    } catch {
      // try next
    }
  }
  return null;
}

export async function cacheThumbnail(id: string, orientation: VideoOrientation = 'portrait') {
  await mkdir(thumbnailsDir, { recursive: true });

  const filePath = join(thumbnailsDir, `${id}.jpg`);
  if (await isFresh(filePath)) {
    return getThumbnailPath(id);
  }

  const bytes = await fetchThumbnailBytes(id, orientation);
  if (bytes) {
    await writeFile(filePath, bytes);
  }

  return getThumbnailPath(id);
}

export async function cacheThumbnails(videos: VideoItem[]) {
  const seen = new Set<string>();
  await Promise.all(
    videos
      .filter((v) => {
        if (seen.has(v.id)) return false;
        seen.add(v.id);
        return true;
      })
      .map((v) => cacheThumbnail(v.id, v.orientation)),
  );
}

// Prüft per Redirect-Probe, ob eine Video-ID ein Short ist.
async function isShort(id: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${id}`, { redirect: 'manual' });
    return res.status === 200;
  } catch {
    return false;
  }
}

// Liefert die neuesten Shorts aus dem RSS-Feed (ohne Pinned-Filter).
export async function getFeedShorts(): Promise<VideoItem[]> {
  if (!youtube.showFeed) return [];

  try {
    const xml = await fetch(youtube.rss).then((response) => response.text());
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map((match) => match[1])
      .map((entry) => ({
        id: extractTag(entry, 'yt:videoId'),
        title: decodeXml(extractTag(entry, 'title')),
      }))
      .filter((item) => item.id);

    const result: VideoItem[] = [];
    for (const item of entries) {
      if (result.length >= youtube.feedCount) break;
      if (await isShort(item.id)) {
        result.push({
          id: item.id,
          title: item.title || 'Aktuelles Short',
          orientation: 'portrait',
        });
      }
    }

    return result;
  } catch {
    return [];
  }
}

export async function getHomepageVideos(): Promise<VideoItem[]> {
  const feedShorts = await getFeedShorts();

  let videos: VideoItem[];
  if (feedShorts.length >= youtube.feedCount) {
    // Enough fresh feed results — use only those
    videos = feedShorts.slice(0, youtube.feedCount);
  } else if (feedShorts.length > 0) {
    // Partial feed — fill remaining slots from pinned fallbacks
    const used = new Set(feedShorts.map((v) => v.id));
    const fallback = (youtube.pinned as unknown as VideoItem[]).filter((v) => !used.has(v.id));
    videos = [...feedShorts, ...fallback].slice(0, youtube.feedCount);
  } else {
    // Feed empty or failed — use pinned as fallback
    videos = youtube.pinned as unknown as VideoItem[];
  }

  await cacheThumbnails(videos);
  return videos;
}
