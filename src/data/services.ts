export const services = [
  { title: 'Innen- & Außenreinigung', desc: 'Gründliche Reinigung von Interieur und Lack – sichtbar sauber, bis ins Detail.', icon: 'sparkles' },
  { title: 'Handwäsche & Politur', desc: 'Schonende Handwäsche und Politur für tiefen Glanz ohne Swirls.', icon: 'droplets' },
  { title: 'Keramik-Versiegelung', desc: 'Langzeitschutz mit Keramik – Glanz, Abperleffekt und einfache Pflege.', icon: 'shield' },
  { title: 'Entfernung Werbebeschriftung', desc: 'Rückstandsfreies Entfernen von Folien und Werbebeschriftung.', icon: 'eraser' },
  { title: 'Fleckenentfernung Sitze', desc: 'Polster und Sitze frei von Flecken, Gerüchen und Verschmutzungen.', icon: 'armchair' },
  { title: 'Flugrost- & Tierhaarentfernung', desc: 'Lack frei von Flugrost, Innenraum frei von Tierhaaren.', icon: 'wind' },
] as const;

export type ServiceItem = (typeof services)[number];
