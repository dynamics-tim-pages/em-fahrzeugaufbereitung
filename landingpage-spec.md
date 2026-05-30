# EM Fahrzeugaufbereitung — Landingpage Design- & Build-Prompt (Astro)

> **So nutzt du dieses Dokument:** Komplett an GitHub Copilot (Chat/Agent) übergeben — entweder als einmaligen Prompt oder als `DESIGN.md` im Repo, auf das du Copilot referenzieren lässt. Es enthält Rolle, Tech-Regeln, Design-Tokens, Komponenten, Section-Specs und fertige Inhaltsdaten. Platzhalter/TODOs sind markiert.

---

## 0. Rolle & Mission (an Copilot)

Du bist ein **Senior Frontend-Designer & -Entwickler** mit Spezialisierung auf premium, conversion-starke Landingpages. Baue eine **dunkle One-Page-Landingpage im Studio-Look** für einen Fahrzeugaufbereiter (Car-Detailing-Studio) in Herbertingen. Bestehendes Astro-Setup ist vorhanden.

**Qualitätsanspruch:**
- Production-grade, voll funktionsfähig, mobil-first, Lighthouse ≥ 95 (Performance/A11y/Best Practices/SEO).
- Eine **klare, mutige Ästhetik** mit einem unverwechselbaren Signature-Element (siehe §1) — **keine generische „AI-Slop"-Optik**, keine Default-Schriften (Inter/Roboto/Arial), keine Lila-Verläufe, keine austauschbaren Bootstrap-Layouts.
- Inhalte **datengetrieben** (`src/data/*`) halten, damit echte Texte/Bilder leicht eingesetzt werden.
- **DSGVO-konform:** Fonts selbst hosten (kein Google-CDN-Call), keine externen Tracker/Hotlinks, Maps/Videos später als 2-Klick-Embed (in diesem Prototyp ausgespart).

---

## 1. Marke & Designprinzipien

**Markenkern:** Premium-Detailing-Studio. Hochglänzendes schwarzes Fahrzeug unter Waben-LED-Licht. Vibe: dunkel, technisch, hochwertig, sportlich — mit einem kräftigen grünen Akzent.

**Farbwelt (aus Logo/Flyer abgeleitet):** Tiefes Schwarz/Anthrazit · kräftiges Lime-Grün als einzige Akzentfarbe · reines Weiß für „LED-Licht"-Details.

**Signature-Element (das, woran man sich erinnert):** Das **Hexagon-Wabenlicht** des Studios.
- Im Hero als dezentes, von oben „leuchtendes" Hexagon-Gitter (weiße Outlines, niedrige Deckkraft, radial nach unten ausblendend).
- Service-Icons sitzen in **hexagonal beschnittenen Kacheln** mit grünem Rand.
- Section-Trenner: feine grüne Linie mit kleinem Hexagon-Knoten.

**Logo-Lockup (nachbauen, kein Bild-Asset nötig):** „EM"-Monogramm (E weiß, M grün) + Wortmarke `EM FAHRZEUGAUFBEREITUNG`, Zusatz `ELVIS MORINA`. Wappen-/Schild-Form mit 5 Sternen ist optional dekorativ; für den Prototyp reicht ein sauberes typografisches Lockup.

**Designprinzipien:**
1. Dominante dunkle Fläche, Grün **sparsam** als Akzent (CTA, Icons, Linien, Headlines-Highlight) — nicht flächig.
2. Tiefe statt Flachheit: Verläufe, sanfte Glows, Hairline-Borders, Glas-/Reflexionseffekte.
3. Großzügige Typo-Hierarchie, viel Negativraum, klare Lesbarkeit.
4. Conversion zuerst: WhatsApp/Anruf sind überall einen Klick entfernt.

---

## 2. Tech-Stack & Projektregeln

| Bereich | Vorgabe |
|---|---|
| Framework | **Astro** (Static Output), bestehendes Setup nutzen |
| Styling | **Tailwind CSS** + **CSS Custom Properties** (Tokens in `:root`, Tailwind-Theme referenziert die Vars) |
| Fonts | **Selbst gehostet via `@fontsource`** — kein Google-Fonts-CDN (DSGVO) |
| JavaScript | **Minimal, nur Astro-Islands/Vanilla** wo nötig (Nav-Toggle, Scroll-State-Header, Lightbox, Scroll-Reveal, **YouTube-2-Klick-Embed**). `null JS by default` beibehalten |
| Bilder | Lokale Assets/Platzhalter, `loading="lazy"`, korrekte `width/height` gegen CLS |
| A11y | WCAG **AA**, sichtbarer Fokus-Ring, semantische Landmarks, `prefers-reduced-motion` respektieren |
| SEO | Meta + OpenGraph + Sitemap + **JSON-LD LocalBusiness** (siehe §6) |
| Responsiveness | Mobile-first; Breakpoints sm 640 / md 768 / lg 1024 / xl 1280 |

**Vorgeschlagene Projektstruktur:**

```
src/
  layouts/
    Base.astro            # <head>, Fonts-Imports, Meta/OG, JSON-LD, Header/Footer-Slots
  components/
    Header.astro          # sticky, transparent -> dunkel-blur on scroll
    Hero.astro
    Services.astro
    Gallery.astro
    Videos.astro          # gepinnte Shorts + Auto-Feed (YouTube)
    Contact.astro
    Footer.astro
    StickyCta.astro       # fixe Mobile-Leiste (WhatsApp + Anrufen)
    ui/
      Button.astro        # variant: primary | ghost | link
      ServiceCard.astro
      SectionHeading.astro
      HexIcon.astro        # hexagonal beschnittene Icon-Kachel
      Lightbox.astro       # kleine Island fürs Galerie-Overlay
      YouTubeEmbed.astro   # DSGVO 2-Klick-Embed (Vorschaubild -> iframe on click)
  lib/
    youtube.ts            # RSS-Fetch + Parse zur Build-Zeit, Thumbnails lokal cachen
  data/
    site.ts               # NAP, Öffnungszeiten, Social, Nav
    services.ts
    gallery.ts
    videos.ts             # Kanal-ID, RSS-URL, gepinnte Shorts
  styles/
    global.css            # Tokens (:root), Base, Hexagon-Pattern, Utilities
  pages/
    index.astro
    impressum.astro        # Platzhalter-Route
    datenschutz.astro      # Platzhalter-Route
```

**Setup-Befehle (Fonts selbst hosten):**
```bash
npm i @fontsource-variable/manrope @fontsource/saira-condensed
```
Import in `Base.astro`:
```ts
import '@fontsource-variable/manrope';
import '@fontsource/saira-condensed/700.css';
import '@fontsource/saira-condensed/800.css';
```

---

## 3. Design Tokens

Alle Tokens als CSS-Variablen in `src/styles/global.css` → `:root`, und im `tailwind.config` referenzieren (`colors: { bg: 'var(--color-bg)' }`, `fontFamily: { display: 'var(--font-display)' }` usw.).

### 3.1 Farben

```css
:root {
  /* Base / Surfaces */
  --color-bg:           #0A0C0B;   /* Seite, fast-schwarz mit grünstich */
  --color-surface:      #111513;   /* Karten */
  --color-surface-2:    #181D1A;   /* erhöht / Hover */
  --color-border:       #242A26;   /* Hairline-Borders */

  /* Brand */
  --color-green:        #5BC236;   /* EM-Grün – Primärakzent (aus Flyer abgeleitet) */
  --color-green-bright: #74E04A;   /* Hover / Glow */
  --color-green-deep:   #14361C;   /* dunkle grüne Fläche/Tint */

  /* Text */
  --color-text:         #F4F7F3;   /* fast-weiß, Fließtext */
  --color-text-muted:   #A6B0AA;   /* sekundär */
  --color-text-faint:   #6B746E;   /* Labels/tertiär */
  --color-white:        #FFFFFF;   /* LED-Licht-Akzente */

  /* Effekte */
  --glow-green:   0 0 32px rgba(91,194,54,.40);
  --shadow-card:  0 24px 60px -28px rgba(0,0,0,.75);
  --ring-focus:   0 0 0 3px rgba(91,194,54,.45);
}
```

> **Kontrast-Regel:** Grün nur für **Akzente, große Headlines, Icons, Buttons** verwenden — **nicht** für kleinen Fließtext. Fließtext = `--color-text`. Button-Text auf grünem Grund = `--color-bg` (dunkel), nicht weiß.
> **Hinweis:** Der Grün-Hex ist aus dem Flyer geschätzt. Sobald das echte Logo-Asset vorliegt, exakten Wert nachziehen (eine Variable, eine Stelle).

### 3.2 Typografie

| Token | Font | Einsatz |
|---|---|---|
| `--font-display` | **Saira Condensed** (700/800), `UPPERCASE`, `letter-spacing: -0.01em` | H1/H2/H3, Logo-Wortmarke |
| `--font-body` | **Manrope** (Variable, 400–700) | Fließtext, UI, Buttons |

> Distinktive, automotive-taugliche Paarung (sportlich-kondensierte Display + saubere geometrische Body). **Optional** für die eine Hero-Punchline noch mehr Wucht: `Anton` (400) — nur falls gewünscht, sonst Saira Condensed 800.

**Type-Scale (fluid, `clamp`):**

```css
--fs-display:  clamp(2.75rem, 7vw, 6rem);     /* Hero H1, line-height .95 */
--fs-h2:       clamp(2rem, 4.5vw, 3.25rem);   /* Section-Headlines */
--fs-h3:       clamp(1.25rem, 2vw, 1.5rem);   /* Karten-Titel */
--fs-body-lg:  1.125rem;
--fs-body:     1rem;
--fs-sm:       0.9375rem;
--fs-eyebrow:  0.8125rem;  /* UPPERCASE, letter-spacing .18em, grün */
```

### 3.3 Spacing, Radius, Layout

```css
/* 4px-Basis: 4 8 12 16 24 32 48 64 96 128 */
--space-section: clamp(4.5rem, 9vw, 8rem);  /* vertikales Section-Padding */
--container-max: 1200px;
--gutter:        1.25rem;
--grid-gap:      1.5rem;

--radius-card: 1rem;
--radius-btn:  0.625rem;
--radius-pill: 999px;
```
Hexagon-Icon-Kachel via `clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)`.

### 3.4 Motion

- **Page-Load (nur Hero):** gestaffeltes Fade-up (Eyebrow → H1 → Subline → CTAs), Stagger 60–80 ms, 500 ms `ease-out`, `translateY(16px) → 0`.
- **Scroll-Reveal:** Sektionen via `IntersectionObserver` einmalig einblenden.
- **Hover:** Karten `translateY(-4px)` + Border→grün + `--glow-green`; Buttons `brightness` + Glow; 180 ms `ease`.
- **`@media (prefers-reduced-motion: reduce)`:** alle Transforms/Animationen deaktivieren.

---

## 4. Globale Komponenten

**Button** (`ui/Button.astro`) — Varianten:
- `primary`: grüner Grund (`--color-green`), dunkler Text, `--radius-btn`, Hover→`--color-green-bright` + `--glow-green`. Für WhatsApp/Hauptaktion.
- `ghost`: transparenter Grund, 1px grüner Border, grüner Text, Hover→grüner 8%-Tint. Für „Anrufen".
- `link`: nur Text + Pfeil, grün on hover.
- Alle: `:focus-visible { box-shadow: var(--ring-focus); }`, min. 44px Touch-Target.

**SectionHeading** (`ui/SectionHeading.astro`): Eyebrow (grün, uppercase, tracked) + H2 (Saira Condensed) + optionaler grüner Hexagon-Trenner darüber.

**HexIcon** (`ui/HexIcon.astro`): hexagonal beschnittene Kachel, dunkle Fläche, grüner Rand/Glow, Slot für ein Inline-SVG-Icon (lucide-Stil, stroke = grün).

**ServiceCard** (`ui/ServiceCard.astro`): HexIcon + Titel (H3) + 1-Zeilen-Beschreibung; Surface-Hintergrund, Hairline-Border, Hover-Lift + Glow.

**StickyCta** (`StickyCta.astro`): **nur Mobile** (`md:hidden`), fix am unteren Rand, zwei gleich breite Buttons „WhatsApp" + „Anrufen", dunkler Blur-Hintergrund, sicherer `env(safe-area-inset-bottom)`.

**YouTubeEmbed** (`ui/YouTubeEmbed.astro`, kleine Island): **DSGVO-2-Klick-Embed.** Zeigt zunächst nur ein **lokal gehostetes** Vorschaubild (zur Build-Zeit gespeichert, siehe `lib/youtube.ts`) + grünen Play-Button + Hinweistext „Mit Klick wird ein Video von YouTube geladen – es gelten die Datenschutzbestimmungen von Google.". Erst beim aktiven Klick wird das `iframe` von **`youtube-nocookie.com`** injiziert (`?autoplay=1`). Props: `id` (Video-ID), `title`, `orientation: 'portrait' | 'landscape'`. **Vor dem Klick kein einziger Request an Google** (Vorschaubild liegt lokal).

---

## 5. Sektionen (Specs)

> Reihenfolge auf `index.astro`: **Header → Hero → Leistungen → Galerie → Videos → Kontakt → Footer (+ StickyCta)**.

### 5.1 Header / Navigation
- **Sticky**, über dem Hero **transparent**, ab ~80px Scroll → dunkler Blur-Hintergrund + Hairline-Border unten (kleine Vanilla-Script-Island togglet eine `.scrolled`-Klasse).
- Links: **Logo-Lockup** (EM-Monogramm + Wortmarke). Mitte/rechts: Anker-Nav `Leistungen · Galerie · Kontakt`. Ganz rechts: `primary`-Button **„Termin anfragen"** → WhatsApp.
- **Mobile:** Hamburger → einfaches Vollbild-Overlay (dunkel) mit großen Links + CTA.
- A11y: `<header><nav aria-label="Hauptnavigation">`, Burger als `<button aria-expanded>`.

### 5.2 Hero
- **Layout:** `min-height: 92vh`, dunkel. Hintergrund-Ebenen (von hinten nach vorn):
  1. Studio-Foto eines hochglänzenden Fahrzeugs (**Platzhalter**, lokal) mit dunklem Verlaufs-Overlay (oben transparent → unten `--color-bg`).
  2. **Hexagon-Wabenlicht-Gitter** (Signature) — weiße Outlines, Deckkraft ~6–10%, radial von oben-mitte „leuchtend", nach unten ausblendend (SVG-Pattern oder CSS-Background + Radial-Mask). Optional 2–3 Hexagons sanft heller „beleuchtet".
- **Inhalt (zentriert oder leicht links):**
  - Eyebrow: `FAHRZEUGAUFBEREITUNG · HERBERTINGEN`
  - H1 (`--fs-display`): **„DEIN AUTO IN BESTFORM."** _(Alternativen: „GLANZ, DER BLEIBT." / „AUFBEREITUNG WIE IM STUDIO.")_ — ein Wort/Akzent grün hervorheben.
  - Subline (`--fs-body-lg`, muted): „Professionelle Innen- und Außenaufbereitung, Politur und Keramik-Versiegelung – für Fahrzeuge aller Art."
  - CTAs: `primary` **„Per WhatsApp anfragen"** + `ghost` **„Anrufen"**.
  - Trust-Zeile: 5 grüne Sterne (Logo-Motiv) + „Termine nach Vereinbarung".
- **Load-Animation** wie §3.4. Dezenter Scroll-Indikator unten.

### 5.3 Leistungen
- `SectionHeading`: Eyebrow `LEISTUNGEN`, H2 **„Was wir für dein Fahrzeug tun"**.
- **Grid** von `ServiceCard` (1 Spalte mobil / 2 ab `sm` / 3 ab `lg`), Daten aus `services.ts` (§6).
- Abschluss-Zeile unter dem Grid, dezent zentriert: **„…für Fahrzeuge aller Art."**
- Jede Karte: HexIcon (passendes Inline-SVG), Titel, 1-Zeilen-Text, Hover-Lift+Glow.

### 5.4 Galerie (Vorher / Nachher)
- `SectionHeading`: Eyebrow `ERGEBNISSE`, H2 **„Vorher / Nachher"**.
- **Grid** aus 6–8 Kacheln (2 mobil / 3–4 ab `lg`), Daten aus `gallery.ts`.
- **Prototyp-Platzhalter:** lokale Platzhalter (dunkle Surface-Kacheln mit Label „Vorher"/„Nachher" + Index oder lokale Demo-SVGs) — **keine externen Bild-Hotlinks** (DSGVO). Leicht über das Daten-Array gegen echte WebP-Bilder austauschbar.
- **Lightbox** (kleine Island `Lightbox.astro`): Klick öffnet Overlay (dunkel, Bild groß, Schließen via X/Esc/Backdrop, Fokus-Trap). Tastatur-bedienbar.
- Optional als spätere Erweiterung erwähnen (im Code als TODO-Kommentar): ein Vorher/Nachher-**Slider** für ein Highlight-Paar.

### 5.5 Videos (YouTube) — **nur Shorts**
- `SectionHeading`: Eyebrow `VIDEOS`, H2 **„Sieh uns bei der Arbeit zu"**.
- **Komplett Hochformat (9:16).** Die ganze Sektion zeigt ausschließlich **Shorts** als Portrait-Karten.
- **Zweistufiger Aufbau (gemäß Konzept §3):**
  1. **Gepinnte Highlights:** 3 manuell gesetzte Shorts (aus `videos.ts`), fest oben.
  2. **Automatischer Feed:** die letzten **N Shorts** werden **zur Build-Zeit** über den RSS-Feed gezogen und gefiltert (`lib/youtube.ts`), ebenfalls als Portrait-Karten. Kein API-Key, kein Token. Bereits gepinnte IDs im Feed überspringen (keine Doppelung).
- **Layout:** 3 Portrait-Karten nebeneinander ab `lg`, 2 ab `sm`, horizontal scrollbar/gestapelt auf Mobile. Alle Embeds `orientation="portrait"`.
- **Shorts-Filter (wichtig):** Der RSS-Feed mischt Shorts und Langformat und liefert **kein** Format-Feld. `lib/youtube.ts` verifiziert daher pro Video, ob es ein Short ist, per Redirect-Probe: `https://www.youtube.com/shorts/{id}` mit `redirect: 'manual'` abrufen → **Status 200 = Short behalten**, **30x-Redirect nach `/watch` = Langformat verwerfen**. Nur Shorts in den Feed übernehmen.
- **DSGVO:** ausschließlich über `YouTubeEmbed` (2-Klick) + `youtube-nocookie.com`. Vorschaubilder werden im Build lokal gecacht → **kein Google-Call vor dem Klick**.
- **Robust:** bei Fetch-Fehler (kein Netz im Build) auf die gepinnten Highlights zurückfallen, Seite darf nicht brechen. `showFeed: false` deaktiviert den Auto-Feed komplett (dann nur die 3 gepinnten).
- CTA am Ende der Sektion: `link`-Button „Alle Videos auf YouTube ansehen" → Kanal.

### 5.6 Kontakt / CTA
- Abschluss-Band, dunkel mit grünem Akzent (z. B. grüner Hexagon-Glow oben). `SectionHeading`: Eyebrow `KONTAKT`, H2 **„Jetzt Termin sichern"**.
- **Zwei Spalten** (gestapelt auf Mobile):
  - **Links — Infos:** Adresse, Telefon (klickbar), WhatsApp (klickbar), Mail _(TODO-Domain, siehe §8)_, Öffnungszeiten als kleine Tabelle.
  - **Rechts — Aktion:** große `primary` „Per WhatsApp anfragen" + `ghost` „Anrufen". Darunter Platz für **statische Karte/Maps** _(im Prototyp: Platzhalter-Kachel mit Hinweis „Maps-Embed folgt als 2-Klick-Lösung")_.
- **Kein Kontaktformular** (bewusst, gemäß Konzept).

### 5.7 Footer
- Logo-Lockup + Kurzclaim. Social-Icons (Facebook, Instagram, TikTok, WhatsApp) aus `site.ts`.
- Rechtslinks: `Impressum` · `Datenschutz` (Platzhalter-Routen).
- Copyright: „© 2026 EM Fahrzeugaufbereitung · Elvis Morina". Dezente Hexagon-Textur möglich.

---

## 6. Inhaltsdaten (fertig zum Einsetzen)

### `src/data/services.ts`
```ts
export const services = [
  { title: 'Innen- & Außenreinigung', desc: 'Gründliche Reinigung von Interieur und Lack – sichtbar sauber, bis ins Detail.', icon: 'sparkles' },
  { title: 'Handwäsche & Politur',     desc: 'Schonende Handwäsche und Politur für tiefen Glanz ohne Swirls.',            icon: 'droplets' },
  { title: 'Keramik-Versiegelung',     desc: 'Langzeitschutz mit Keramik – Glanz, Abperleffekt und einfache Pflege.',     icon: 'shield' },
  { title: 'Entfernung Werbebeschriftung', desc: 'Rückstandsfreies Entfernen von Folien und Werbebeschriftung.',          icon: 'eraser' },
  { title: 'Fleckenentfernung Sitze',  desc: 'Polster und Sitze frei von Flecken, Gerüchen und Verschmutzungen.',         icon: 'armchair' },
  { title: 'Flugrost- & Tierhaarentfernung', desc: 'Lack frei von Flugrost, Innenraum frei von Tierhaaren.',              icon: 'wind' },
];
```

### `src/data/site.ts`
```ts
export const site = {
  name: 'EM Fahrzeugaufbereitung',
  owner: 'Elvis Morina',
  address: { street: 'Heustraße 2', zip: '88518', city: 'Herbertingen' },
  phoneDisplay: '0 15 23 – 848 54 66',
  phoneHref: 'tel:+4915238485466',
  whatsapp: 'https://wa.me/4915238485466',
  email: 'TODO@em-fahrzeugaufbereitung.de', // TODO: Domain klären (siehe §8)
  hours: [
    { day: 'Montag – Freitag', time: '13:30 – 18:30 Uhr' },
    { day: 'Samstag',          time: '09:30 – 14:00 Uhr' },
    { day: 'Termine',          time: 'nach Vereinbarung' },
  ],
  social: {
    facebook:  'https://www.facebook.com/EMfahrzeugaufbereitung',
    instagram: 'https://www.instagram.com/em__fahrzeugaufbereitung/',
    tiktok:    'https://www.tiktok.com/@em.fahrzeugaufbereitung',
  },
  nav: [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Galerie',    href: '#galerie' },
    { label: 'Videos',     href: '#videos' },
    { label: 'Kontakt',    href: '#kontakt' },
  ],
};
```

### `src/data/gallery.ts`
```ts
// Prototyp: lokale Platzhalter. Später gegen optimierte WebP-Paare tauschen.
export const gallery = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  alt: `Aufbereitungs-Ergebnis ${i + 1}`,
  // src: '/images/gallery/result-1.webp',  // <- später
}));
```

### `src/data/videos.ts`
```ts
export const youtube = {
  channelId: 'UCMbN1Y2CKra6PRwHVgYQTVQ',
  channelUrl: 'https://www.youtube.com/@EM-Fahrzeugaufbereitung',
  rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMbN1Y2CKra6PRwHVgYQTVQ',
  showFeed: true,        // false -> nur gepinnte Highlights, kein Auto-Feed
  feedCount: 3,          // Anzahl ZUSÄTZLICHER Shorts aus dem Feed (nach den gepinnten)
  // Gepinnte Highlights (Shorts, Hochformat 9:16) – immer oben:
  pinned: [
    { id: 'qWU6DMT0h9U', title: 'Highlight 1', orientation: 'portrait' },
    { id: 'asgzdpSS1HQ', title: 'Highlight 2', orientation: 'portrait' },
    { id: 'CcrVNFi-fyk', title: 'Highlight 3', orientation: 'portrait' },
  ],
};
```

### `src/lib/youtube.ts` (Build-Step, Shorts-only)
```ts
import { youtube } from '../data/videos';

// Prüft per Redirect-Probe, ob eine Video-ID ein Short ist.
async function isShort(id: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${id}`, { redirect: 'manual' });
    return res.status === 200;           // 200 = Short, 30x -> /watch = Langformat
  } catch { return false; }
}

// Liefert NUR Shorts aus dem RSS-Feed, ohne die bereits gepinnten IDs.
export async function getFeedShorts() {
  if (!youtube.showFeed) return [];
  const pinnedIds = new Set(youtube.pinned.map(v => v.id));
  try {
    const xml = await fetch(youtube.rss).then(r => r.text());
    const ids = [...xml.matchAll(/<yt:videoId>(.*?)<\/yt:videoId>/g)]
      .map(m => m[1])
      .filter(id => !pinnedIds.has(id));

    const result: { id: string; orientation: 'portrait' }[] = [];
    for (const id of ids) {                // neueste zuerst
      if (result.length >= youtube.feedCount) break;
      if (await isShort(id)) result.push({ id, orientation: 'portrait' });
    }
    return result;
  } catch {
    return [];                             // Fallback: nur gepinnte anzeigen
  }
}
```
> Thumbnails der Shorts zur Build-Zeit lokal speichern (z. B. `https://i.ytimg.com/vi/{id}/hqdefault.jpg` → `public/images/yt/{id}.jpg`), damit `YouTubeEmbed` vor dem Klick keinen Google-Call macht.

### JSON-LD (in `Base.astro`, `<script type="application/ld+json">`)
```json
{
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "EM Fahrzeugaufbereitung",
  "image": "https://www.em-fahrzeugaufbereitung.de/og.jpg",
  "telephone": "+4915238485466",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Heustraße 2",
    "postalCode": "88518",
    "addressLocality": "Herbertingen",
    "addressCountry": "DE"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "13:30", "closes": "18:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:30", "closes": "14:00" }
  ],
  "sameAs": [
    "https://www.facebook.com/EMfahrzeugaufbereitung",
    "https://www.instagram.com/em__fahrzeugaufbereitung/",
    "https://www.tiktok.com/@em.fahrzeugaufbereitung",
    "https://www.youtube.com/@EM-Fahrzeugaufbereitung"
  ]
}
```

---

## 7. Akzeptanzkriterien (Definition of Done)

- [ ] Durchgehend dunkler Studio-Look; Grün nur als Akzent; Hexagon-Motiv im Hero **deutlich** erkennbar.
- [ ] Fonts **selbst gehostet** (Saira Condensed + Manrope), kein externer Font-Call im Network-Tab.
- [ ] Sektionen Hero/Leistungen/Galerie/Videos/Kontakt + Header/Footer + Mobile-StickyCta vorhanden und voll responsiv (320 px → 1440 px geprüft).
- [ ] WhatsApp- & Anruf-CTAs überall funktionsfähig und nie mehr als 1 Klick entfernt.
- [ ] Galerie-Lightbox per Maus **und** Tastatur (Esc/Fokus-Trap) bedienbar.
- [ ] Videos: 3 gepinnte Shorts + Auto-Feed **nur mit Shorts** (Langformat per Redirect-Probe gefiltert, keine Doppelung gepinnter IDs); alle Karten Hochformat; **2-Klick-Embed**, vor Klick **kein** Request an Google/YouTube im Network-Tab; Build bricht nicht, wenn RSS nicht erreichbar.
- [ ] A11y AA: sichtbarer Fokus-Ring, korrekte Landmarks, genau **eine** `h1`, Alt-Texte, `prefers-reduced-motion` respektiert.
- [ ] Meta + OpenGraph + Sitemap + JSON-LD vorhanden.
- [ ] Lighthouse mobil ≥ 95 in allen vier Kategorien; kein CLS durch Bilder.
- [ ] Inhalte sauber aus `src/data/*` gespeist (kein hartkodierter Text in Komponenten).

---

## 8. Platzhalter & TODOs (für diesen Prototyp bewusst offen)

| Thema | Status |
|---|---|
| **E-Mail-Adresse** | **Klären:** Flyer/Website nennen `info@em-fahrzeugpflege.de`, Domain ist aber `em-fahrzeugaufbereitung.de`. Bis dahin Platzhalter in `site.ts`. |
| Echte Galerie-Bilder | Platzhalter; späterer `sharp`-WebP-Pipeline-Step (laut Konzept). |
| Hero-/Studio-Foto | Platzhalter; echtes Studio-Foto vom Kunden. |
| Videos / YouTube-RSS-Feed | **Integriert (nur Shorts)** (Sektion 5.5): 3 gepinnte Shorts gesetzt, Auto-Feed über RSS (Kanal-ID `UCMbN1Y2CKra6PRwHVgYQTVQ`), Langformat per Redirect-Probe gefiltert. Feed via `showFeed: false` abschaltbar. |
| Google-Maps-Embed | Platzhalter-Kachel; später 2-Klick-Embed (DSGVO). |
| Impressum / Datenschutz | Platzhalter-Routen; Rechtstexte liefert der Kunde. |
| Echter Grün-Hex | Aus Flyer geschätzt; bei echtem Logo-Asset exakt nachziehen. |

---

**Erstellt von:** Tim Friedrich · dynamics-tim.dev