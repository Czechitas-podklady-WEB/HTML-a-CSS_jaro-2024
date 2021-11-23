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

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-Eleventy-bocni-panel](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-bocni-panel).
