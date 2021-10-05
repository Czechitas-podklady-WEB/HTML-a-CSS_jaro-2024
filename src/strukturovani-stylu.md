---
layout: base
---

# Strukturování stylů

Větší projekty mohou mít stovky i tisíce řádků CSS. Pro větší přehlednost je lepší kód rozdělit do více souborů. Typicky po komponentách.

### Styly

#### spolecne.css

```css
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

### Propojení přes CSS

Nebo přes `@import` v CSS.

#### vse.css

```css
@import url('spolecne.css');
@import url('hlavicka.css');
@import url('tlacitko.css');
```

#### index.html

```html
<head>
	<link rel="stylesheet" href="vse.css" />
</head>
```

Prohlížeč stáhne `index.html`. V něm se dozví, že potřebuje `vse.css`. Teprve stažení `vse.css` bude vědět, že potřebuje další soubory. Na takovém postupném vodopádu se trochu zdrží.

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-BEM-a-strukturovani](https://github.com/Czechitas-podklady-WEB/Cviceni-BEM-a-strukturovani). Další lekci budeme mít až za dva týdny. Cvičení můžeš dobrovolně dopracovat doma.
