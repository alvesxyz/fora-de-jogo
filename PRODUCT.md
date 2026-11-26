# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JavaScript (index.html, style.css, script.js), no framework, no build step. Must work opened directly from the file system (file://). Fonts self-hosted in `fonts/`.

## Users

- Young adults 18–34 who bet on football, arriving on a phone via QR code (stadium screens and seats, posters in Leiria higher-education schools, street machine) after watching the captain's video. Some may be in distress.
- Friends and family who notice changes in someone and do not know how to talk about it.
- Club members and fans (UD Leiria) who see betting as normal.

## Product Purpose

The landing page is "a casa da campanha" Fora de Jogo: the destination of every campaign path. It leads visitors to one of four actions: anonymous screening, talking to the guidance assistant, reaching help contacts (1414 first), or leaving an e-mail. Success is measured in aggregate clicks on help contacts, not in diagnoses.

## Positioning

An awareness campaign about gambling disorder, authored by students (CTeSP Comunicação Digital, Universidade de Leiria e Oeste) in collaboration with União Desportiva de Leiria, a club with no betting sponsors. The club lends its channels; nothing goes out in its name without approval. Academic, fictitious project.

## Capabilities and Constraints

- Screening: 5 yes/no questions, three result levels, never a diagnosis, never stored, never linked to the e-mail.
- Assistant: local rules now, isolated function for a future API. Starts with buttons ("Preciso de ajuda", "Quero ajudar um amigo"). States it is automatic. Risk protocol shows 112, SNS 24 and 1414 and stops. Does not keep conversation text.
- Form "Fica por dentro": e-mail only (user confirmed), unchecked consent, 18+ confirmation, localStorage only, backend hook marked in a comment.
- No cookies, no analytics, no betting brands shown or promoted.
- Help numbers and SRIJ self-exclusion address must be confirmed before publishing [A CONFIRMAR].

## Brand Commitments

- Name: Fora de Jogo. Slogan (report 4.2): "A única jogada certa é pedir ajuda." Call to action: "Fala. Liga 1414." Narrative line: "o jogo que ninguém vê".
- Voice (report 4.3): close, direct, no judgement, "tu", short sentences, no betting language, no sensationalism, no humour about the disorder. "Pessoa com perturbação do jogo", never "viciado".
- Palette from report 4.4 plus user brief: black, white, yellow #FFC400 reserved for attention and action, stone grey secondary text, panels #1E1E1E. Avoid red/green and neon.
- Type (user confirmed): Poppins (titles) + DM Sans (body). Bebas Neue dropped.

## Evidence on Hand

Report data only: 69,9% of sports bets on football and 36,2% of new registrations aged 18–24 (SRIJ, 2026); ICAD patients 358 (2023) to 782 (2025) (Observador, 2026a). No video file, no logo files, no club emblem yet. Do not fabricate statistics, contacts, testimonials or entity names.

## Product Principles

1. Help is never more than one tap away; the 1414 is in the first screen.
2. Inform and route, never diagnose or advise treatment.
3. Collect the minimum, store nothing sensitive.
4. Sound like a teammate, not a doctor or a preacher.
5. Must not look like a betting site.

## Accessibility & Inclusion

WCAG 2.2 AA is mandatory and wins over aesthetics: 18px base, rem units, line-height 1.5–1.6, 60–75ch lines, left aligned, focus outline ≥3px, targets ≥44px, reduced motion, prefers-color-scheme (light version required by report 17), prefers-contrast, 200%/400% zoom without horizontal scroll.
