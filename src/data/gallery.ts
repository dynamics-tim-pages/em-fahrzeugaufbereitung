// Prototyp: lokale Platzhalter. Später gegen optimierte WebP-Paare tauschen.
export const gallery = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  alt: `Aufbereitungs-Ergebnis ${i + 1}`,
  // src: '/images/gallery/result-1.webp',  // <- später
}));

export const galleryLabels = {
  before: 'Vorher',
  after: 'Nachher',
  open: 'Galerieeintrag öffnen',
  close: 'Lightbox schließen',
} as const;

export type GalleryItem = (typeof gallery)[number];
