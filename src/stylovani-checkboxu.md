---
layout: base
title: Stylování checkboxu
---

HTML nabízí spoustu předstylovaných prvků. Jedním z nich je `<input type="checkbox">` <input type="checkbox"> <input type="checkbox" checked>. Jeho výchozí vizuál nemusí vždy graficky sednout do zbytku webu.

Chceme-li zaškrtávátko zvětšit, můžeme přestylovat jeho `width` a `height`.

```html
<style>
	.vlastni-velikost {
		width: 3em;
		height: 3em;
	}
</style>
<input class="vlastni-velikost" type="checkbox" />
```

<style>
	.vlastni-velikost {
		width: 3em;
		height: 3em;
	}
</style>

<input class="vlastni-velikost" type="checkbox"> <input class="vlastni-velikost" type="checkbox" checked>

Pokud ho chceme přebarvit, můžeme sáhnout po `accent-color`.

```html
<style>
	.vlastni-barva {
		accent-color: #06a004;
	}
</style>
<input class="vlastni-velikost vlastni-barva" type="checkbox" />
```

<style>
	.vlastni-barva {
		accent-color: #06a004; /* zelená */
	}
</style>

<input class="vlastni-velikost vlastni-barva" type="checkbox"> <input class="vlastni-velikost vlastni-barva" type="checkbox" checked>

A tady flexibilita checkboxu končí. 😥 Dokonce u výše použitých stylů nemáme jistotu, že budou fungovat ve všech prohlížečích a když, tak nemusí vypadat úplně stejně. Accent-color na [Can I use](https://caniuse.com/?search=accent-color).

Naštěstí nás zachraňují pokročilé selektory. Input můžeme pomocí CSS skrýt a udělat si vlastní třeba ze spanu. Původní checkbox v HTML záměrně necháváme, aby byla zachována další funkcionalita, o kterou se prohlížeč stará za nás třeba v případě odesílání dat na server. Různé ukázky stylování najdeme například na [CSS-Tricks](https://css-tricks.com/the-checkbox-hack/).

Checkbox provážeme se štítkem dvěma způsoby.

- Obalením.

  ```html
  <label>
  	<input type="checkbox" />
  	<span class="vlastni"></span> Souhlasím s podmínkami
  </label>
  ```

- Přes atrbitu `id` a `for`.

  ```html
  <input id="mujCheckbox" type="checkbox" />
  <label for="mujCheckbox">
  	<span class="vlastni"></span> Souhlasím s podmínkami
  </label>
  ```

Výdohou druhého postupu je, že můžeme mít na stránce více klikatelných labelů, které můžou být i daleko od sebe. Musíme ale vymyslet unikátní `id`.

`.mujCheckbox` stylujeme libovolným způsobem. Typicky z něho děláme čtvereček. Pokud je sousední input zaškrtnutý, přidáme fajfku. V prvním případě `input:checked + .vlastni {}` a v druhém `input:checked + label .vlastni {}`. Místo `+` pro vybrání souseda se může hodit i `~`, která je obecnější.

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-Eleventy-bocni-panel](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-bocni-panel).
