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

Postupuj podle zadání na [github.com/…/Cviceni-Custom-properties](https://github.com/Czechitas-podklady-WEB/Cviceni-Custom-properties).

Pro vypracování si budeš muset k sobě stáhnout soubory `index.html`, `moje-styly.css` a `zakladni-styly.css`. Pokud pracuješ s GitHubem prvně nebo neznáš funkci `Fork`, stáhni soubory jako `ZIP` zde: [odkaz ke stažení](https://github.com/Czechitas-podklady-WEB/Cviceni-Custom-properties/archive/refs/heads/main.zip).

Pokud fork znáš, nemusíš zip stahovat a repozitář si stačí forknout.
