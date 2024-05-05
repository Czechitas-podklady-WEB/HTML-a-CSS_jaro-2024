---
layout: base
title: JavaScript
---

## Jak zapojit vlastní JavaScript

```html
<script src="muj-skript.js"></script>
```

Do `src` se píše adresa podobně jako při napojování CSS přes atribut `href`. Značka pro JavaScript se někdy dává do hlavičky, někdy na konec těla před značku `</body>`. Na konci těla může způsobit o trochu pomalejší načítání stránky, ale je větší jistota, že vše bude fungovat správně.

### `muj-skript.js`

```javascript
document.querySelector('.tlacitko').addEventListener('click', () => {
	document.querySelector('.tajny-obsah').classList.add('zobraz')
})
```

Kód výše oživí prvek se třídou `tlacitko`. Pokud na něj uživatel klikne, prvek s třídou `tajny-obsah` dostane navíc ještě třídu `zobraz`. Pro skrytí obsahu bychom mohli třídu naopak odebrat následujícím kódem.

```javascript
document.querySelector('.zavri').addEventListener('click', () => {
	document.querySelector('.tajny-obsah').classList.remove('zobraz')
})
```

Po kliknutí na prvek s třídou `zavri` se odebere tajnému obsahu třída `zobraz`.

## Knihovny

### Webkomponenty

Vlastní HTML značky, které nejsou součástí čistého HTML. Například [`<just-time>`](https://www.npmjs.com/package/just-time-webcomponent) nebo 3D [`model-viewer`](https://web.dev/articles/model-viewer).

### [Bootstrap](https://getbootstrap.com/)

Předstylované jednoduché i interaktivní prky.

### [Lightbox](https://lokeshdhakar.com/projects/lightbox2/)

Ideální pro galerie. Zvětšuje obrázky na celou obrazovku po kliknutí.

## Cvičení

- Postupuj podle zadání na [github.com/…/cviceni-lightbox](https://github.com/Czechitas-podklady-WEB/cviceni-lightbox).
