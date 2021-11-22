---
layout: base
title: Strukturování stylů
---

Větší projekty mohou mít stovky i tisíce řádků CSS. Pro větší přehlednost je lepší kód rozdělit do více souborů. Typicky po komponentách.

### Styly

#### spolecne.css

```css
:root {
	--brand-color: #e6007e;
}
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
body {
	font-family: Helvetica, sans-serif;
	background-color: #000000;
	color: #ffffff;
}
```

#### hlavicka.css

```css
.hlavicka {
	min-height: 100px;
	border-bottom: 1px solid;
}
.hlavicka__logo {
	margin: 0 auto;
	width: 200px;
	color: var(--brand-color);
}
.hlavicka__navigace {
	text-align: center;
}
```

#### tlacitko.css

```css
.tlacitko {
	border: 1px solid;
}
.tlacitko--uspech {
	background-color: #04a006;
}
```

### Propojení přes HTML

To celé pak spojíme dohromady pomocí HTML `<link>` tagu.

#### index.html

```html
<head>
	<link rel="stylesheet" href="spolecne.css" />
	<link rel="stylesheet" href="hlavicka.css" />
	<link rel="stylesheet" href="tlacitko.css" />
</head>
```

Prohlížeč může začít stahovat všechny styly po načtení `index.html` hned, ale linky na jednotlivé komponenty musíme zopakovat několikrát s každou další podstránkou.

### Nebo propojení přes CSS

Nebo přes `@import` v CSS.

#### vse.css

```css
@import 'spolecne.css';
@import 'hlavicka.css';
@import 'tlacitko.css';
```

#### index.html

```html
<head>
	<link rel="stylesheet" href="vse.css" />
</head>
```

Prohlížeč stáhne `index.html`. V něm se dozví, že potřebuje `vse.css`. Teprve po stažení `vse.css` bude vědět, že potřebuje další soubory. Na takovém postupném vodopádu se trochu zdrží.

## Dobrovolný úkol na doma

Postupuj podle zadání na [github.com/…/Cviceni-BEM-a-strukturovani](https://github.com/Czechitas-podklady-WEB/Cviceni-BEM-a-strukturovani).
