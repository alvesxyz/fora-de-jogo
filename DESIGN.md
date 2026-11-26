---
name: Fora de Jogo
description: Landing page of an awareness campaign about gambling disorder; black ground, white type, yellow reserved for the help action.
colors:
  fundo: "#000000"
  painel: "#1e1e1e"
  texto: "#ffffff"
  texto-2: "#9a9a94"
  amarelo: "#ffc400"
  amarelo-hover: "#ffd54d"
  sobre-amarelo: "#000000"
  linha: "rgba(255, 255, 255, 0.22)"
  fundo-claro: "#ffffff"
  painel-claro: "#f1f1ec"
  texto-claro: "#000000"
  texto-2-claro: "#555550"
  linha-claro: "rgba(0, 0, 0, 0.2)"
typography:
  display:
    fontFamily: "Poppins, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  numeral:
    fontFamily: "Poppins, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2rem + 5vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Poppins, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.15rem + 0.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.6
  button:
    fontFamily: "Poppins, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.25
rounded:
  marca: "0.25rem"
  pequeno: "0.5rem"
  raio-botao: "0.75rem"
  raio: "1rem"
  ligar: "1.25rem"
spacing:
  margem: "clamp(1rem, 0.5rem + 2.5vw, 2rem)"
  espaco-seccao: "clamp(4rem, 3rem + 6vw, 7rem)"
  painel-interior: "clamp(1.25rem, 1rem + 1.5vw, 2rem)"
  contacto-interior: "1.5rem"
  intervalo: "0.75rem"
  contentor: "46rem"
  topo: "72rem"
components:
  botao-cheio:
    backgroundColor: "{colors.amarelo}"
    textColor: "{colors.sobre-amarelo}"
    typography: "{typography.button}"
    rounded: "{rounded.raio-botao}"
    padding: "0.65rem 1.25rem"
    height: "3rem"
  botao-cheio-hover:
    backgroundColor: "{colors.amarelo-hover}"
  botao-contorno:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    typography: "{typography.button}"
    rounded: "{rounded.raio-botao}"
    padding: "0.65rem 1.25rem"
    height: "3rem"
  botao-contorno-hover:
    backgroundColor: "{colors.painel}"
  botao-pequeno:
    backgroundColor: "{colors.painel}"
    textColor: "{colors.texto}"
    rounded: "{rounded.raio-botao}"
    padding: "0.5rem 1rem"
    height: "2.75rem"
  ligar:
    backgroundColor: "{colors.amarelo}"
    textColor: "{colors.sobre-amarelo}"
    rounded: "{rounded.ligar}"
    padding: "1.25rem 1.5rem 1.35rem"
    width: "100%"
  ligar-hover:
    backgroundColor: "{colors.amarelo-hover}"
  painel:
    backgroundColor: "{colors.painel}"
    textColor: "{colors.texto}"
    rounded: "{rounded.raio}"
    padding: "{spacing.painel-interior}"
  contacto:
    backgroundColor: "{colors.painel}"
    textColor: "{colors.texto}"
    rounded: "{rounded.raio}"
    padding: "{spacing.contacto-interior}"
  campo-texto:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.texto}"
    typography: "{typography.body}"
    rounded: "{rounded.raio-botao}"
    padding: "0.6rem 0.9rem"
    height: "3rem"
  opcao:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    typography: "{typography.label}"
    rounded: "{rounded.raio-botao}"
    padding: "0.5rem 1rem"
    height: "3.5rem"
  mensagem:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.texto}"
    rounded: "{rounded.raio-botao}"
    padding: "0.75rem 1rem"
    width: "34rem"
---

# Design System: Fora de Jogo

## Overview

**Creative North Star: "The Floodlit Number"**

A quiet stadium at night. The ground is pure black, the type is white and very bold, and exactly one thing is lit: the way to help. Yellow (#FFC400) is the floodlight; it falls on the call to 1414, on the primary action, and on the focus ring, and almost nowhere else. Everything around it stays dark, flat and calm so a visitor in distress, on a phone, finds the next step without searching.

The page is a single editorial column of large Poppins ExtraBold headlines over generous DM Sans body text at 18px. Density is low on purpose: sections are separated by deep vertical rhythm and a thin, 22%-white hairline, the halfway line of a pitch, with its centre circle drawn once under the opening. Panels in #1E1E1E with 1rem corners hold the interactive parts (screening, assistant, contacts); they are lifted by tone, never by shadow.

Accessibility is a design input, not a layer: WCAG 2.2 AA contrast is verified per pair, targets are at least 44px, focus is a 3px ring, and the system ships a light scheme, a `prefers-contrast: more` scheme and a forced-colors fallback. The page must never resemble a betting site: no neon, no red/green signalling, no odds-board glare.

**Key Characteristics:**
- Black ground, white type, one yellow for action and attention.
- Poppins 800 headlines with tight negative tracking; DM Sans body at 1.125rem / 1.6.
- Single 46rem column; deep, fluid section spacing.
- Flat: tonal panels and hairlines, no shadows.
- Pitch-line hairlines as the only ornament.
- Every state works in dark, light, more-contrast and forced-colors.

## Colors

A near-monochrome night palette with a single floodlight yellow; the light scheme inverts the ground and keeps the same yellow fills.

### Primary
- **Floodlight Yellow** (amarelo): filled action surfaces only: the "Fala. Liga 1414." call block, `botao--cheio` primary buttons, the skip link, text selection, and the focus ring in the dark scheme. Text on it is always black (sobre-amarelo), 13.15:1. Hover lightens to **Pale Floodlight** (amarelo-hover).

### Neutral
- **Pitch Black** (fundo): page ground in the dark scheme; also the fill of text inputs and assistant messages, which sit as dark wells inside panels.
- **Stand Grey** (painel): panels for contacts, screening, assistant, the advantage box, the video placeholder; also the hover fill of outlined buttons. White on it is 16.67:1.
- **Floodlight White** (texto): all primary text, outlined-button borders, notice borders, error borders.
- **Stone Grey** (texto-2): secondary text, citations, hints, the author line in chat messages, footer copy, and field/option borders (borda-campo). 7.42:1 on black, 5.89:1 on panel.
- **Halfway Line** (linha): decorative hairlines between sections, data rows, signs and FAQ items. Never the only cue for anything.

### Light scheme
Under `prefers-color-scheme: light`: ground **White** (fundo-claro), panels **Chalk** (painel-claro), text **Black** (texto-claro), secondary **Dark Stone** (texto-2-claro, 7.50:1 on white, 6.62:1 on chalk), hairlines at 20% black (linha-claro). Yellow fills stay #FFC400 with black text. The focus ring, selection outline (realce-borda) and yellow-as-text role (destaque-texto) all switch to black.

### More contrast
Under `prefers-contrast: more`, secondary text, hairlines and field borders all collapse to the full text colour. Under `forced-colors: active`, every button, call block, option, panel and message gets a 2px CanvasText border so no surface depends on fill alone.

### Named Rules
**The One Floodlight Rule.** Yellow is reserved (campaign report §4.4: heart, alerts, buttons, help number; §15.1: the data number large and yellow as focal point). It appears only as filled actions, the focus ring, the selection/highlight border (realce-borda), the brand heart mark, and, on dark ground only, as text for the attention role (destaque-texto): the help number 1414 and the three report numerals. Never other decoration.

**The No Yellow Text On Light Rule.** Yellow is never text on a light background (1.6:1 on white). Any role that uses yellow text in the dark scheme must switch to black in the light scheme, as destaque-texto, foco and realce-borda already do.

**The Hairline Is Not A Boundary Rule.** linha is decorative (below 3:1). Anything a person must perceive (field edges, option edges, selected states, errors) uses borda-campo, texto or realce-borda at 2–3px.

## Typography

**Display Font:** Poppins 700/800, self-hosted (with Segoe UI, system-ui fallback)
**Body Font:** DM Sans variable 400–700, self-hosted (with system-ui, -apple-system, Segoe UI, Roboto fallback)

**Character:** Poppins at 800 with tight negative tracking reads like stadium signage: geometric, loud, confident. DM Sans keeps the body quiet, plain and highly legible at 18px.

### Hierarchy
- **Display** (800, clamp 3rem–6rem, 0.98, -0.035em): the h1 campaign name only.
- **Numeral** (800, clamp 3rem–4.75rem, 1, -0.03em, tabular): report statistics, in destaque-texto, set against a 60ch description.
- **Headline** (800, clamp 2rem–3rem, 1.1, -0.02em): section h2. The call block's "Fala. Liga 1414." uses the same weight at clamp 2rem–3rem, 1.05; the footer call at clamp 1.75rem–2.5rem.
- **Title** (700, clamp 1.3rem–1.6rem, 1.25, -0.01em): h3 card and subsection titles; the highlighted 1414 contact steps up to 800 at clamp 1.6rem–2rem. Screening questions (legend) use Poppins 700 at clamp 1.2rem–1.4rem, 1.35.
- **Slogan** (Poppins 700, clamp 1.35rem–1.875rem, 1.3): the brand slogan under the h1.
- **Body** (DM Sans 400, 1.125rem, 1.6): all running text; paragraphs and list items capped at 65ch.
- **Label** (DM Sans 700, 1rem): nav links, field labels, options, notes and hints (notes and hints at 400 in texto-2).
- **Button** (Poppins 700, 1.0625rem, 1.25): every `botao`.

### Named Rules
**The Root Size Rule.** html stays at 100% and every size is rem or a rem-based clamp, so the reader's own font-size setting scales the whole system. Body never drops below 1rem.

**The Weight Carries Rank Rule.** Hierarchy is built from size and Poppins weight (700/800), never from colour or uppercase. No letter-spaced uppercase labels.

## Layout

Single-column editorial stack. Content lives in a 46rem container (`contentor`) with fluid side margins (margem: 1rem at phone width up to 2rem). Only the header row widens to 72rem, with wordmark and nav wrapping onto two lines on narrow screens.

Sections take espaco-seccao (about 4rem on phones to 7rem on desktop) top and bottom, separated by a 1px linha border. Panels pad at painel-interior (1.25rem to 2rem); contacts at 1.5rem. Groups of buttons and options wrap with a 0.75rem gap and grow to fill (`flex: 1 1 14rem` for the opening pair, `1 1 8rem` for options), so on a 390px phone they stack full width.

One breakpoint carries the system: at 48rem the contact list becomes two columns (the highlighted 1414 contact and the last contact span both), and each statistic becomes a two-column row (numeral, then description on the baseline). Everything else is fluid via clamp(). The layout holds at 200% and 400% zoom with no horizontal scroll; long numbers use `white-space: nowrap` and the body uses `overflow-wrap: break-word`.

Motion is minimal and gated by `prefers-reduced-motion: no-preference`: smooth anchor scrolling, chat messages rising 0.4rem with a fade over 220ms, and the FAQ plus icon rotating 45deg over 200ms, both on cubic-bezier(0.16, 1, 0.3, 1).

## Elevation & Depth

Fully flat. There are no box-shadows anywhere. Depth comes from tone (black ground, #1E1E1E panels, black wells for inputs and messages inside panels) and from borders: 2px white for notices and errors, 2px stone for fields and options, 2–3px realce-borda for selection and highlight.

### Named Rules
**The Lit-Not-Lifted Rule.** Importance is shown by light (yellow fill, yellow or black highlight border), never by elevation. A surface that matters more gets brighter, not higher.

## Shapes

Soft, friendly rounding on a strict scale: 1rem (raio) for panels, contacts, notices and the result box; 0.75rem (raio-botao) for buttons, inputs, options and chat messages; 1.25rem for the single call block; 0.5rem for error boxes; 0.25rem for the focus outline corner. The only circle is the pitch centre circle under the opening (1px linha, 7–11rem). Icons are inline SVG at 1.25–1.5rem, filled with currentColor; the FAQ toggle is a stroked plus (2.5 stroke, round caps).

## Components

### Buttons
Big, plain and unmistakable; every one is at least 44px tall.
- **Shape:** gently rounded (0.75rem), 2px border always present (transparent when filled) so forced-colors keeps an outline.
- **Primary (botao-cheio):** yellow fill, black Poppins 700 text, 3rem min height. Used for calls and the main step of a flow (Ligar 1414, Ver resultado, Enviar, Inscrever-me). Hover: Pale Floodlight.
- **Outlined (botao-contorno):** transparent with a 2px white (black in light) border; hover fills with the panel tone. The default for secondary routes.
- **Quick reply (botao-pequeno):** panel fill, 2px stone border, 2.75rem; hover border goes to full text colour. Assistant suggested replies only.
- **Focus:** 3px solid ring in foco (yellow dark, black light), 3px offset.
- **Disabled:** 55% opacity, not-allowed cursor.

### Call Block (signature)
The floodlit object of the whole page. A full-width yellow block (1.25rem radius, 1.25rem × 1.5rem padding) linking to tel:1414: "Fala. Liga 1414." in Poppins 800 at headline scale, then a 1rem bold note. Appears once, in the opening, directly under the slogan.

### Cards / Containers
- **Corner Style:** 1rem.
- **Background:** painel; no shadow.
- **Border:** none by default; the highlighted contact and the screening result carry a 2px realce-borda.
- **Internal Padding:** 1.5rem (contacts), painel-interior for screening, assistant and advantage panels.
- **Notice (aviso):** no fill, 2px text-colour border, 1rem radius; for disclaimers that must be read.

### Inputs / Fields
- **Style:** black well (fundo) inside panels, 2px stone border, 0.75rem radius, 3rem min height, body type.
- **Hover:** border to full text colour.
- **Focus:** 3px foco ring at 2px offset plus a text-colour border.
- **Error:** border to text colour at 3px, plus a bordered, bold error message (2px, 0.5rem radius) linked to the field. Error never relies on colour.
- **Hints:** 1rem stone text between label and field.
- **Checkboxes:** native, 1.5rem, inside a 44px tap area that belongs to the label.

### Options (screening answers)
Large label tiles (3.5rem min height, 2px stone border, 0.75rem radius) wrapping a native 1.5rem radio. Selected: 3px realce-borda. Keyboard focus draws the ring on the whole tile. One question shows at a time; progress is stated in the legend ("Pergunta 2 de 5.").

### Navigation
Wordmark (Poppins 800, 1.125rem, with the yellow heart mark) and a wrapping row of 1rem bold links, each 44px tall, underline on hover. No sticky header, no hamburger. A yellow skip link appears on focus.

### Assistant Messages
Bubbles up to 34rem in a scrolling log inside a panel: bot messages are black wells; the person's messages align right, transparent with a 2px stone border; risk messages get a 2px realce-borda. A 0.95rem bold stone author line opens each. Links in messages are 44px tall.

### Statistics
A definition list of hairline-separated rows: the numeral in destaque-texto at numeral scale, the description at body size beneath (side by side from 48rem), and the source as a 1rem stone citation.

### Lists
- **Signs (unordered):** a hairline-ruled list, no numbers or bullets; each item at body size, 65ch, 0.875rem block padding.
- **Steps (ordered):** a real sequence; each step carries a Poppins 800 counter at 1.75rem in the text colour (never yellow), hung in a 3.25rem left gutter.

## Do's and Don'ts

### Do:
- **Do** keep yellow (#FFC400) for filled actions, the focus ring, highlight borders, the heart mark, and, on dark ground, the 1414 number and report numerals; text on yellow is always black.
- **Do** switch every yellow-as-text or yellow-outline role to black in the light scheme.
- **Do** verify contrast for every new pair and keep secondary text at #9A9A94 on dark and #555550 on light (all pairs above 5.8:1).
- **Do** give every interactive element at least 44px of target and a 3px focus ring with 3px offset.
- **Do** separate sections with espaco-seccao and a 1px linha hairline; keep the single 46rem column.
- **Do** size everything in rem or rem-based clamp(), body at 1.125rem / 1.6, lines at 65ch.
- **Do** gate motion behind prefers-reduced-motion and keep it under 250ms on cubic-bezier(0.16, 1, 0.3, 1).
- **Do** add a 2px CanvasText border under forced-colors to any new filled surface.

### Don't:
- **Don't** use yellow as text on a light background (1.6:1).
- **Don't** use yellow for decoration, section accents or large fills other than actions; outside fills, yellow is limited to the heart mark, the 1414 number and the report numerals.
- **Don't** add box-shadows or elevation; depth is tone and border only.
- **Don't** use red/green signalling or neon colours, or anything that reads as a betting interface.
- **Don't** use the linha hairline as the only edge of something a person must perceive.
- **Don't** set body text below 1rem or fix the root font size in px.
- **Don't** introduce letter-spaced uppercase labels; rank comes from Poppins size and weight.
