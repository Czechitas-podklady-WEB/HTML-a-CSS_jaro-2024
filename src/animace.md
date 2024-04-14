---
layout: base
title: Animace
---

CSS animace umožňují prvkům měnit své vlastnosti v čase pomocí vlastnosti `animation` a definici klíčových snímků přes `@keyframes`.

## Základní animace

```css
@keyframes posun-doprava {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(100px);
	}
}

.prvek {
	animation: posun-doprava 2s infinite;
}
```

<style>
@keyframes posun-doprava {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(2em);
	}
}
</style>
<div style="font-size: 2em; animation: posun-doprava 2s infinite;">➡️</div>

Kódem výše jsme zadefinovali animaci `posun-doprava`, která prvek posune o 100 pixelů doprava za 2 sekundy a bude se opakovat donekonečna.

Vlastnost `animation` je sdružená vlastnost. Dá se rozepsat na následující:

- `animation-name` určuje jméno, které jsme si zadefinovali v klíčových snímcích.
- `animation-duration` nastavuje délku animace (hodnoty např. `0s`, `0.3s`, `750ms`).
- `animation-delay` opozdí spuštění animace (hodnoty např. `0s`, `1s`, `500ms`).
- `animation-timing-function` nastavuje průběžně měnící se rychlost (hodnoty např. `ease`, `linear`, `ease-in`, `cubic-bezier(0.1, 0.7, 1, 0.1)`).
- `animation-iteration-count` říká, kolikrát se má animace opakovat (hodnoty např. `1`, `2`, `infinite`).
- `animation-direction` rozhoduje o směru animace (hodnoty např. `normal`, `reverse`, `alternate`, `alternate-reverse`).

Klíčové snímky definujeme pomocí klíčového slova `@keyframes`, za kterým následuje jméno animace. V bloku definujeme jednotlivé snímky pomocí procentuálního vyjádření času (`0%` pro začátek animace, `100%` pro konec). Snímků můžeme mí libovolné množství.

## Více klíčových snímků

```css
@keyframes zmena-barvy {
	0% {
		color: black;
		background-color: red;
	}
	20% {
		color: white;
		background-color: black;
	}
	50% {
		color: white;
		background-color: blue;
	}
	75% {
		color: black;
		background-color: white;
	}
	100% {
		color: white;
		background-color: green;
	}
}

.prvek {
	animation-name: zmena-barvy;
	animation-duration: 5s;
	animation-iteration-count: infinite;
}
```

<style>
@keyframes zmena-barvy {
	0% {
		color: black;
		background-color: red;
	}
	20% {
		color: white;
		background-color: black;
	}
	50% {
		color: white;
		background-color: blue;
	}
	75% {
		color: black;
		background-color: white;
	}
	100% {
		color: white;
		background-color: green;
	}
}
</style>
<div style="font-size: 1.5em; animation: zmena-barvy 5s infinite; display: inline-block; padding: 0.5em; font-weight: bold;">Text</div>

## Plynulé přeskočení na první snímek

Pokud se snažíme docílit nekonečné animace pomocí `animation-iteration-count: infinite`, hodí se, aby byl první snímek stejný jako poslední. Jinak je přeskočení z posledního snímku zpět na první vidět.

```css
@keyframes toc-dokola {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.prvek {
	animation: toc-dokola 2s infinite;
}
```

<style>
@keyframes toc-dokola {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
<div style="font-size: 2em; animation: toc-dokola 2s infinite; display: inline-block;">😀</div>

Alternativně můžeme použít `animation-direction: alternate`, který bude animaci opakovat v opačném směru. Tam a zpátky.

```css
@keyframes ping-pong {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(100px);
	}
}

.prvek {
	animation: ping-pong 2s infinite;
}
```

<style>
@keyframes ping-pong {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(2em);
	}
}
</style>
<div style="font-size: 2em; animation: ping-pong 2s infinite alternate; display: inline-block;">🍄</div>

## Pro pokročilé

- V blízké době se můžeme těšit na animace řízené scrollováním místo času. [MDN scroll-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline)

## Cvičení

- Postupuj podle zadání na [github.com/…/cviceni-hodiny-css](https://github.com/Czechitas-podklady-WEB/cviceni-hodiny-css).
