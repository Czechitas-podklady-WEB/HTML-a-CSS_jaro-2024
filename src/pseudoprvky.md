---
layout: base
title: Pseudoprvky
---

## Before a after

Pomocí CSS lze téměř na každém prvku vytvořit potomky `before` a `after`, které se chovají jako prvky HTML, aniž bychom je do HTML psali. Tyto pseudoprvky se často používají pro ozdobné prvky, ikony, šipky, …

```html
<div class="prvek">Ahoj</div>
```

```css
.prvek::before {
	content: '🌍';
}
.ukazkovy-prvek::after {
	content: ' světe!';
	font-weight: bold;
}
```

<style>
	.ukazkovy-prvek {
		font-size: 2em;
	}
	.ukazkovy-prvek::before {
		content: "🌍";
	}
	.ukazkovy-prvek::after {
		content: " světe!";
		font-weight: bold;
	}
</style>

<div class="ukazkovy-prvek">Ahoj</div>

Klíčová je vlastnost `content`. Bez té pseudoprvek nemůže existovat. Může být ale klidně i prázdná.

### Příklad užití

- Různé tvary bez nutnosti použití obrázku. [The Shapes of CSS na css-tricks.com](https://css-tricks.com/the-shapes-of-css/)

## Pro pokročilé

- Další pseudoprvky: `::first-line`, `::first-letter`, `::marker`, … Více na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
- Text v pseudoprvku nemůže uživatel snadno kopírovat. Kvůli přístupnosti webu není dobré vlastností `content` nastavovat důležitý obsah.

## Cvičení

Postupuj podle zadání na [github.com/…/cviceni-before-after](https://github.com/Czechitas-podklady-WEB/cviceni-before-after).
