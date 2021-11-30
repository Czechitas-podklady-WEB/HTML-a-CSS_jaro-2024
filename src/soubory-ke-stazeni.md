---
layout: base
title: Soubory ke stažení
---

Soubory typu PDF, ZIP, DOCX, XLSX můžeme mít v repozitáři podobně jako obrázky. Pro stažení na ně odkážeme pomocí tagu `<a href="cesta/k/souboru.pdf">soubor</a>`. Některé prohlížeče umí PDF rovnou otevřít. Pro vynucení stahovacího dialogu můžeme přidat atribut `download` `<a href="cesta/k/souboru.pdf" download>soubor</a>`.

### Eleventy

Aby Eleventy kopírovalo soubory do složky `dist` podobně, jako to dělá s obrázky, je potřeba donastavit konfigurační soubor `.eleventy.js`.

Konfiguraci můžeme rozšířit například takto:

```js
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/obrazky')
	eleventyConfig.addPassthroughCopy('src/ke-stazeni')
	…
}
```

Vše ze složky ke stažení se překopíruje ze `src/ke-stazeni` do `dist/ke-stazeni`.
