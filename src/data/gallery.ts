export const galleryLabels = {
  before: 'Vorher',
  after: 'Nachher',
  entry: 'Signature-Finish',
  open: 'Galerieeintrag öffnen',
  close: 'Lightbox schließen',
} as const;

// Solange noch keine konkreten Fahrzeugmodelle im Content hinterlegt sind,
// führen servicebasierte Premium-Titel die Ergebnisse statt generischer Platzhalter.
export const gallery = [
  {
    id: 1,
    title: 'Außenaufbereitung mit Tiefenglanz',
    caption:
      'Mehr Klarheit in den Reflexionen, ruhigere Flächen und ein Außenbild, das sofort hochwertiger wirkt.',
    meta: 'Tiefenglanz',
    entryLabel: 'Außen-Detail',
    // src: '/images/gallery/result-1.webp',  // <- später
  },
  {
    id: 2,
    title: 'Innenraumaufbereitung in Studioqualität',
    caption:
      'Sorgfältig gereinigte Materialien, frische Oberflächen und ein Interieur, das wieder erstklassig empfängt.',
    meta: 'Studioqualität',
    entryLabel: 'Innenraum-Detail',
    // src: '/images/gallery/result-2.webp',  // <- später
  },
  {
    id: 3,
    title: 'Keramik-Versiegelung mit Premium-Finish',
    caption:
      'Veredelter Lack, satter Glanz und ein Finish, das Schutz und Präsenz elegant zusammenbringt.',
    meta: 'Langzeitschutz',
    entryLabel: 'Schutz-Finish',
    // src: '/images/gallery/result-3.webp',  // <- später
  },
] as const;

export type GalleryItem = (typeof gallery)[number];
