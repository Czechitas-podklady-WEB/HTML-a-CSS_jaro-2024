---
layout: base
---

# CSS grid 3

## `min()`, `max()` and `clamp()`

- Funkce pro omezení rozsahu.
- Můžou sloužit jako doplněk při tvorbě responzivního webu.
- Vhodné kombinovat například s `1vw`.
- MDN [min()](<https://developer.mozilla.org/en-US/docs/Web/CSS/min()>), [max()](<https://developer.mozilla.org/en-US/docs/Web/CSS/max()>), [clamp()](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>)
- [Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/css-min-max-clamp)

## Responzivní mřížka

- `repeat(4, 1fr)` [MDN](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>), [Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/css-repeat)
  - `4` => počet opakování
  - `1fr` => opakující se hodnota
- `minmax(300px, 1fr)` [MDN](<https://developer.mozilla.org/en-US/docs/Web/CSS/minmax()>), [Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/css-minmax)
  - `300px` => nejmenší možná šířka sloupce
  - `1fr` => sloupce budou stejně široké

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-CSS-grid-minmax](https://github.com/Czechitas-podklady-WEB/Cviceni-CSS-grid-minmax). Výchozí kód ze zadání si k sobě zkopíruj pomocí funkce `Fork`.

## Dobrovolné čtení na doma

- Pojmenované oblasti mřížky pomocí vlastnosti `grid-template-areas`. [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-template-areas)
