export const site = {
  name: 'EM Fahrzeugaufbereitung',
  owner: 'Elvis Morina',
  address: { street: 'Heustraße 2', zip: '88518', city: 'Herbertingen' },
  phoneDisplay: '0 15 23 – 848 54 66',
  phoneHref: 'tel:+4915238485466',
  whatsapp: 'https://wa.me/4915238485466',
  email: 'TODO@em-fahrzeugaufbereitung.de',
  hours: [
    { day: 'Montag – Freitag', time: '13:30 – 18:30 Uhr' },
    { day: 'Samstag', time: '09:30 – 14:00 Uhr' },
    { day: 'Termine', time: 'nach Vereinbarung' },
  ],
  map: {
    lat: 48.0633341,
    lng: 9.4306166,
    zoom: 17,
    shareLink: 'https://maps.app.goo.gl/81u1kzvX6RqsqCfj7',
    embedUrl: 'https://maps.google.com/maps?q=48.0633341,9.4306166&z=17&output=embed',
  },
  social: {
    facebook: 'https://www.facebook.com/EMfahrzeugaufbereitung',
    instagram: 'https://www.instagram.com/em__fahrzeugaufbereitung/',
    tiktok: 'https://www.tiktok.com/@em.fahrzeugaufbereitung',
  },
  nav: [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Videos', href: '#videos' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
} as const;

export const siteMeta = {
  baseUrl: 'https://www.em-fahrzeugaufbereitung.de',
  locale: 'de_DE',
  defaultTitle: 'EM Fahrzeugaufbereitung · Professionelle Autoaufbereitung in Herbertingen',
  description:
    'Professionelle Innen- und Außenaufbereitung, Politur und Keramik-Versiegelung – für Fahrzeuge aller Art.',
  ogImage: '/og.jpg',
  themeColor: '#0A0C0B',
} as const;

export const brand = {
  monogramLeading: 'E',
  monogramAccent: 'M',
  wordmark: site.name,
  ownerline: site.owner,
} as const;

export const heroContent = {
  eyebrow: 'FAHRZEUGAUFBEREITUNG · HERBERTINGEN',
  title: {
    leading: 'DEIN AUTO IN',
    accent: 'BESTFORM.',
  },
  backgroundImage: '/images/hero/studio-placeholder.svg',
  subline:
    'Professionelle Innen- und Außenaufbereitung, Politur und Keramik-Versiegelung – für Fahrzeuge aller Art.',
  primaryCta: 'Per WhatsApp anfragen',
  secondaryCta: 'Anrufen',
  trustLine: 'Termine nach Vereinbarung',
  scrollHint: 'Mehr entdecken',
} as const;

export const sectionContent = {
  services: {
    eyebrow: 'LEISTUNGEN',
    title: 'Was wir für dein Fahrzeug tun',
    outro: '…für Fahrzeuge aller Art.',
  },
  gallery: {
    eyebrow: 'ERGEBNISSE',
    title: 'Vorher / Nachher',
    intro: 'Saubere Flächen, präzise Details und sichtbar mehr Tiefe – Platzhalter für echte Kundenfahrzeuge.',
  },
  videos: {
    eyebrow: 'VIDEOS',
    title: 'Sieh uns bei der Arbeit zu',
    cta: 'Alle Videos auf YouTube ansehen',
    intro: 'Unsere Highlights und aktuelle Shorts aus dem Studio – komplett im Hochformat, komplett datenschutzfreundlich eingebunden.',
    highlightsLabel: 'Gepinnte Highlights',
    feedLabel: 'Aktuelle Shorts aus dem Feed',
    feedFallback: 'Weitere Shorts werden beim naechsten erfolgreichen Build automatisch ergaenzt.',
  },
  contact: {
    eyebrow: 'KONTAKT',
    title: 'Jetzt Termin sichern',
    infoTitle: 'So erreichst du uns',
    actionTitle: 'Schnell zum Termin',
    mapTitle: 'Karte & Anfahrt',
    mapNotice: 'Wir befinden uns im Gewerbegebiet Herbertingen – Parkplätze direkt vor Ort.',
  },
} as const;

export const uiText = {
  skipLink: 'Zum Inhalt springen',
  header: {
    cta: 'Termin anfragen',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    navLabel: 'Hauptnavigation',
    mobileNavLabel: 'Mobile Navigation',
  },
  contact: {
    addressLabel: 'Adresse',
    phoneLabel: 'Telefon',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'E-Mail',
    hoursLabel: 'Öffnungszeiten',
  },
  hero: {
    ratingAria: '5 von 5 Sternen',
  },
  youtube: {
    loadLabel: 'Wird geladen',
    loadingHint: 'Startet gleich automatisch',
    badge: 'Short',
    privacyBadge: '2-Klick-Embed',
    playLabel: 'YouTube laden',
    consentTitle: 'Datenschutz-Hinweis',
    confirmLabel: 'Video jetzt laden',
    cancelLabel: 'Abbrechen',
    privacyNotice:
      'Mit Klick wird ein Video von YouTube geladen – es gelten die Datenschutzbestimmungen von Google.',
  },
  maps: {
    loadLabel: 'Wird geladen',
    loadingHint: 'Karte wird eingebettet …',
    badge: 'Standort',
    privacyBadge: '2-Klick-Embed',
    openLabel: 'Karte laden',
    consentTitle: 'Datenschutz-Hinweis',
    confirmLabel: 'Karte jetzt laden',
    cancelLabel: 'Abbrechen',
    externalLabel: 'In Google Maps öffnen',
    privacyNotice:
      'Mit Klick wird Google Maps eingebettet – es gelten die Datenschutzbestimmungen von Google. Keine Daten werden ohne deine Zustimmung übertragen.',
  },
  footer: {
    claim: 'Studio-Look, saubere Details und schnelle Kontaktwege für Fahrzeuge aller Art.',
    copyright: '© 2026 EM Fahrzeugaufbereitung · Elvis Morina',
    legalNavLabel: 'Rechtliches',
  },
  legalPages: {
    eyebrow: 'Rechtliches',
    backHome: 'Zur Startseite',
    impressum: {
      title: 'Impressum',
      body: 'Die Rechtstexte werden vom Kunden bereitgestellt und hier im nächsten Schritt ergänzt.',
    },
    datenschutz: {
      title: 'Datenschutz',
      body: 'Die Datenschutzhinweise werden nach finaler Abstimmung ergänzt und anschließend hier veröffentlicht.',
    },
  },
} as const;

export const socialLinks = [
  { label: 'Facebook', href: site.social.facebook },
  { label: 'Instagram', href: site.social.instagram },
  { label: 'TikTok', href: site.social.tiktok },
  { label: 'WhatsApp', href: site.whatsapp },
] as const;

export const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const;
