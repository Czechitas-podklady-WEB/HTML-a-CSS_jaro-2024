---
layout: base
title: Transformace
---

CSS transformace umožňují prvků na stránce měnit jejich velikost, rotaci, posunutí a zkreslení. Transformace se provádí pomocí CSS vlastnosti `transform`. Transformace se provádí vzhledem k původní velikosti prvku a neovlivňují pozice ostatní prvků na stránce.

## Změna velikosti prvku

### Základní

Následující kód zařídí, aby se prvek se třídou `prvek` jevil dvakrát větší, než je jeho původní velikost.

```css
.prvek {
	transform: scale(2);
}
```

### Pouze v jedné ose

Další kód naopak způsobí, že prvek bude třikrát větší ve směru osy x. Tedy velmi široký.

```css
.prvek {
	transform: scaleX(3);
}
```

A pro ovlivnění pouze velikosti na ose y použijeme `scaleY`. Následující kód zmenší prvek na polovinu výšky.

```css
.prvek {
	transform: scaleY(0.5);
}
```

### Příklad užití

- Zvětšení obrázku při najetí myši.

## Rotace prvku

Rotace prvku se provádí pomocí funkce `rotate`. Následující kód otočí prvek o 45 stupňů.

```css
.prvek {
	transform: rotate(45deg);
}
```

### Příklad užití

- Ikonka křížku pouze v HTML a CSS (bez obrázku).

## Posunutí prvku

Posunutí prvku se provádí pomocí funkce `translate`. Následující kód posune prvek o `50px` na ose x (tedy doprava) a o `100px` na ose y (tedy dolů).

```css
.prvek {
	transform: translate(50px, 100px);
}
```

### Procentuální hodnoty

Na rozdíl od `position: relative`, kde například `left: 50%` znamená posunutí prvku od levé strany (tedy doprava) o `50%` šířky rodiče, u `transform` znamená `translateX(50%)` posunutí prvku o `50%` jeho vlastní šířky.

### Příklad užití

- Podobně jako `position: relative`.

## Počátek

S vlastností `transform` se pojí i vlastnost `transform-origin`, která určuje bod, kolem kterého se transformace provádí. Výchozí hodnota je `50% 50%`, tedy střed prvku. Origin/počátek si můžeme třeba v případě rotace představit jako pomyslný špendlík, který do prvku píchneme a kolem kterého se prvek pak otáčí. První hodnota odpovídá pozici špendlíku na ose x, druhá na ose y.

### Výchozí hodnota

```css
.prvek {
	transform-origin: 50% 50%;
}
```

![transform-origin: 50% 50%](static/screenshots/transform-origin-center.gif)

### Uprostřed nahoře

```css
.prvek {
	transform-origin: 50% 0;
}
```

![transform-origin: 50% 0](static/screenshots/transform-origin-top.gif)

### Příklad užití

- Ikonka šipky pouze v HTML a CSS (bez obrázku).

## Pro pokročilé

### Zkosení

[MDN skew](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew)

### Matice

Matematický zápis všech vlastností výše dohromady.

[MDN matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

### 3D

[Ukázka kostky](https://codepen.io/alvaromontoro/pen/dyzggdp)

### Skládání

Na prvek je možné aplikovat více transformací narát pomocí řetězení.

```css
.prvek {
	transform: scale(2) rotate(45deg) translate(50px, 100px);
}
```

### Moderní, zkrácený zápis

Prohlížeče relativně nově umí transformace bez vlastnosti `transform`.

```css
.prvek {
	scale: 2;
	rotate: 45deg;
	translate: 50px 100px;
}
```

## Cvičení

Postupuj podle zadání na [github.com/…/Cviceni-Transformace](https://github.com/Czechitas-podklady-WEB/Cviceni-Transformace).

Vycházej z předpřipraveného kódu v repozitáři. Máš v něm nachystaný už `index.html`, styly a obrázky.
