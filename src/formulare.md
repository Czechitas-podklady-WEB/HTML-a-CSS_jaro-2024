---
layout: base
title: Formuláře
---

## Prvek `<input>`

```html
<input />
```

<input style="font-size: 1.5em;" />

- Atribut `type` specifikuje, jaký typ dat se má uživatel vyplnit. Například `text`, `email`, `password`, `number`, `date`, `color`, `range`, `file`, `checkbox`, `radio`, `hidden`, `search`, `tel`, `url`, `time`, `month`, `week`. Výchozí je `text`.

```html
<input type="number" />
<input type="date" />
<input type="checkbox" />
```

<input style="font-size: 1.5em;" type="number" /><br />
<input style="font-size: 1.5em;" type="date" /><br />
<input style="font-size: 1.5em;" type="checkbox" />

## Prvek `<label>`

```html
<label>Zadejte váš e-mail: <input type="email" /></label>
```

<label style="font-size: 1.5em;">Zadejte váš e-mail: <input type="email" style="font-size: inherit;" /></label>

## Prvek `<button>`

Tlačítko pro odeslání/uložení vyplněných dat.

```html
<button>Odeslat</button>
```

<button style="font-size: 1.5em;">Odeslat</button>

## Prvek `<form>`

Obalující prvek pro všechny prvky formuláře, aby bylo jasné, které prvky patří dohromady, když je na stránce třeba formulářů více. Atribut `name` na prvku `<input>` pak říká, pod jakým názvem se data vyplněná uživatelem objeví po odeslání v adresním řádku.

```html
<form>
	<label>E-mail: <input type="email" name="email" /></label>
	<label>Heslo: <input type="password" name="heslo" /></label>
	<button>Přihlásit se</button>
</form>
```

<form style="font-size: 1.5em;">
	<label style="display: block;">E-mail: <input type="email" name="email" style="font-size: inherit;" /></label>
	<label style="display: block;">Heslo: <input type="password" name="heslo" style="font-size: inherit;" /></label>
	<button style="font-size: inherit;">Přihlásit se</button>
</form>

### Atribut `action`

Adresa, kam se odesílají data. Například [https://just-countdown.eu/run](https://just-countdown.eu/run?seconds=300) + `?seconds=300` nebo [https://intro.czechitas-podklady.cz/slide.html](https://intro.czechitas-podklady.cz/slide.html?title=HTML+a+CSS&meta1=Lekce+10&meta2=&meta3=&icon=) + `?title=HTML+a+CSS&meta1=Lekce+10`.

```html
<form action="https://just-countdown.eu/run">
	<label>Počet sekund: <input type="number" name="seconds" /></label>
	<button>Spustit odpočet</button>
</form>
```

<form style="font-size: 1.5em;" action="https://just-countdown.eu/run">
	<label style="display: block;">Počet sekund: <input type="number" name="seconds" style="font-size: inherit;" /></label>
	<button style="font-size: inherit;">Spustit odpočet</button>
</form>

## Pro pokročilé

- Ve výchozím chování se data vyplněná uživatelem po odeslání propisují do adresního řádku. To nemusí být vždy žádoucí a nestačí na všechno. Některé backendy vyžadují odesílání pomocí `method="POST"`. Více na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method).

## Cvičení

Postupuj podle zadání na [github.com/…/Cviceni-Vyhledavac](https://github.com/Czechitas-podklady-WEB/Cviceni-Vyhledavac).
