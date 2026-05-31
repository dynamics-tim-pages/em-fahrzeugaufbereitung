export type VideoOrientation = 'portrait' | 'landscape';

export type VideoItem = {
  id: string;
  title: string;
  orientation: VideoOrientation;
};

export const youtube = {
  channelId: 'UCMbN1Y2CKra6PRwHVgYQTVQ',
  channelUrl: 'https://www.youtube.com/@EM-Fahrzeugaufbereitung',
  rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMbN1Y2CKra6PRwHVgYQTVQ',
  showFeed: true,
  feedCount: 3,
  // Additional Shorts shown below the pinned highlights
  pinned: [
    { id: 'qWU6DMT0h9U', title: 'Highlight 1', orientation: 'portrait' },
    { id: 'asgzdpSS1HQ', title: 'Highlight 2', orientation: 'portrait' },
    { id: 'CcrVNFi-fyk', title: 'Highlight 3', orientation: 'portrait' },
  ] satisfies VideoItem[],
} as const;
