---
layout: base
title: Přechody
---

CSS přechody umožňují plynulé změny vlastností prvku, například barvy, velikosti nebo pozice. Přechody se provádí pomocí CSS vlastnosti `transition`. Přechody se provádí mezi dvěma stavy prvku, například při najetí myši nebo změně třídy.

```css
.sipka {
	transition: transform 1s;
}
.sipka:hover {
	transform: rotate(180deg);
}
```

![hover transition](static/screenshots/hover-transition.gif)

## Podvlastnosti

Vlastnost `transition` sdržuje několik podvlastností podobně jako třeba vlastnost `border` nebo `padding`.

- `transition-property` určuje, které vlastnosti se mají přechodně měnit (hodnoty např. `color`, `transform`, `opacity`)
- `transition-duration` délka trvání přechodu (hodnoty např. `0s`, `0.3s`, `750ms`)
- `transition-delay` opozdí spuštění přechodu (hodnoty např. `0s`, `1s`, `500ms`)
- `transition-timing-function` (hodnoty např. `ease`, `linear`, `ease-in`, `cubic-bezier(0.1, 0.7, 1, 0.1)`, `steps(4, jump-start)`)

## Pro pokročilé

### Přechod na vše

Aplikuje přechody na všechny vlastnosti s trváním 0,3 sekundy.

```css
.prvek {
	transition: all 0.3s;
}
```

Může viditelně zpomalit vykreslování přechodu, což nemusí vypadat pěkně. Vývojář se vystavuje riziku, že omylem zanimuje i nějakou vlastnost nechtěně. Kód se hůře zpětně čte, protože není tak jasný záměr kódu.

Pokud chcete přechodem animovat více vlastností, typicky třeba barvu textu a pozadí zároveň, tak může použít výčet.

```css
.prvek {
	transition-property: color, background-color;
	transition-duration: 0.3s;
}
```

## Cvičení

- Postupuj podle zadání na [github.com/…/Cviceni-Dostihy](https://github.com/Czechitas-podklady-WEB/Cviceni-Dostihy).
- Oživte pomocí přechodů houpačku z [předchozího cvičení](https://github.com/Czechitas-podklady-WEB/Cviceni-Transformace), aby jedno přehoupnutí trvalo jednu sekundu.
