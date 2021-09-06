---
layout: base
---

# Custom properties

Někdy označované i jako CSS proměnné/variables. Slouží k pojmenování hodnot. Typicky se hodí například pro hodnoty často se opakující, barvy, velikosti nadpisů.

## Selektor `:root`

Chová se jako selektor `html`, ale s větší specificitou.

```css
:root {
	display: none;
}
```

Kód výše skryje veškerý obsah.

## Nastavení custom property

Název musí začínat na `--`, dvě znaménka minus.

```css
:root {
	--hlavni-barva: #2d2e83;
}
```

## Použití hodnoty

Název obalíme do funkce `var()`.

```css
header {
	background-color: var(--hlavni-barva);
	color: #ffffff;
}

a {
	color: var(--hlavni-barva);
}
```

## Úkol na teď

@TODO
