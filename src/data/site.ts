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
  },
  contact: {
    eyebrow: 'KONTAKT',
    title: 'Jetzt Termin sichern',
    infoTitle: 'So erreichst du uns',
    actionTitle: 'Schnell zum Termin',
    mapTitle: 'Karte & Anfahrt',
    mapNotice: 'Maps-Embed folgt als 2-Klick-Lösung',
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
    privacyNotice:
      'Mit Klick wird ein Video von YouTube geladen – es gelten die Datenschutzbestimmungen von Google.',
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
