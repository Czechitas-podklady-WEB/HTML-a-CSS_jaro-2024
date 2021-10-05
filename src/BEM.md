---
layout: base
---

# BEM

Jedna z nejčastější taktik pojmenovávání tříd. Zlepšuje přehlednost, udržitelnost kódu. [Dokumentace](http://getbem.com/). Zkratka pro `Block Element Modifier`.

## Příklady

### Block

- `.hlavicka`
- `.paticka`
- `.tlacitko`
- `.seznam-clanku`

### Element

- `.hlavicka__logo`
- `.hlavicka__navigace`
- `.paticka__copyright`
- `.tlacitko__ikona`
- `.seznam-clanku__filtr-kategorie`
- `.seznam-clanku__dlazdice`

### Modifier

- `.tlacitko--hlavni`
- `.tlacitko--druhotne`
- `.tlacitko__ikona--napravo`
- `.seznam-clanku__filtr-kategorie--zabaleny`

## Úkol na teď

### Vyber si jednu ze stránek níže:

- [frontend.garden](https://frontend.garden/)
- [frontendisti.cz](https://frontendisti.cz/)
- [theguardian.com](https://www.theguardian.com/)
- [ft.com](https://www.ft.com/)
- [csswizardry.com](https://csswizardry.com/)
- [shopify.com](https://www.shopify.com/)

### Najdi ve vývojářských nástrojích:

- Komponentu, která je na stránce jen jednou.
- Komponentu, která je na stránce alespoň dvakrát. (Stačí stejný název bloku nehledě na zanořené elementy uvnitř.)
- Komponentu se zanořenými elementy se stejným názvem bloku. (Například `.button` a v něm `.button__text`.)
- Použití modifikátoru. Zkus rozmyslet, jaký účel modifikátor má, případně najdi výskyt stejné komponenty bez něj.

Pozor! Některé třídy nemusí být psané BEM metodikou.

### Druhá polovina cvičení

Projděte společně některé weby a ukažte si, co jste objevili.

### Bonus

Najdi další weby, které používají BEM.

## Alternativy

- OOCSS, ACSS, SMACSS, …
