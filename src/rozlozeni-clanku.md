---
layout: base
title: Rozložení článku
---

Celé zadání: [github.com/…/Cviceni-CSS-grid-blog](https://github.com/Czechitas-podklady-WEB/Cviceni-CSS-grid-blog)

## Rozložení

```css
.kontejner {
	display: grid;
	grid-template-columns: 1fr 4fr 2fr;
}
.polozka {
	grid-column: 2;
}
.polozka-na-cely-radek {
	grid-column: 1 / -1;
}
```

## Specificita

Některé CSS selektory jsou pro prohlížeč důležitější než jiné. Nehledí pak na jejich pořadí, ale důležitost.

Jakou barvu textu a pozadí bude `div` mít?

```html
<div class="muj-text">Lorem ipsum</div>
```

```css
div {
	background-color: purple;
}
.muj-text {
	color: red;
}
div {
	background-color: yellow;
	color: green;
}
```

Pozadí bude žluté. Vítězí poslední nastavená barva.

Text bude červený, protože selektor s třídou má větší specificitu než s názvem prvku.

## Když už to jinak nejde `!important`

```css
div {
	color: red !important;
}
```

Zvyšuje důležitost aplikovaného stylu nad pravidla specificity. Běžně se stylování pomocí `!important` vyhýbáme, protože kód značně zesložiťuje. Díky tomu si zasloužilo i místo v [CSS pekle 🔥](https://csshell.dev/posts/overspecified-specificity/).

## Podklady

- [Ukázka kalkulačky ve VS Code](https://umaar.com/dev-tips/226-vs-code-selector-specificity/)
- [Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/css-kaskada#specificita)
- [CSS Tricks](https://css-tricks.com/specifics-on-css-specificity/)
