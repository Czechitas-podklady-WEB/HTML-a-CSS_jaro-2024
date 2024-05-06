---
layout: base
title: Pokročilejší formuláře
---

## `<select>`

```html
<select name="prichut">
	<option>Vanilková</option>
	<option>Čokoládová</option>
	<option>Pistáciová</option>
</select>
```

<select style="font-size: 1.5em;">
	<option>Vanilková</option>
	<option>Čokoládová</option>
	<option>Pistáciová</option>
</select>

## Atribut `autocomplete`

Atribut `autocomplete` napovídá prohlížeči, jaká data se od uživatele očekávají. Prohlížeč díky tomu může uživateli formulář zjednodušit předvyplněním. Ukázka na [autocomplete na MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

## Přístupnost

Focus obecně říká, na který prvek je prohlížeč právě zaměřený. Se kterým právě teď může uživatel pracovat pomocí klávesnice. Je dobré uživateli ukázat, kde se focus právě nachází. CSS selector `:focus` je aktivní, když je prvek označen klávesnicí nebo myší. Selector `:focus-visible` je aktivní, když je prvek označen pouze klávesnicí.
