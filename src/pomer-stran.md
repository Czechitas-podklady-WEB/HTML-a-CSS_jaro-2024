---
layout: base
---

# Poměr stran

## `aspect-ratio`

- Dokumentace na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio).

- `aspect-ratio: 16 / 9` nastaví prvku poměr stran 16 ku 9, častý poměr širokoúhlých videí.

- Pozor na podporu. Safari umí novou vlastnost až od verze 15. Více na [Can I use](https://caniuse.com/mdn-css_properties_aspect-ratio).

```html
<div class="video-1"></div>
```

```css
.video-1 {
	box-shadow: inset 0 0 20px red;
	width: 100%;
	aspect-ratio: 16 / 9;
}
```

## `::before` a `padding-top`

- Složitější, ale funguje i na starších prohlížečích.

```html
<div class="video-2"></div>
```

```css
.video-2 {
	box-shadow: inset 0 0 20px blue;
	width: 100%;
}
.video-2::before {
	content: '';
	display: block;
	padding-top: calc(100% / (16 / 9));
}
```

- Vnitřek je celý zabraný paddingem. Další obsah je tedy vhodné absolutně napozicovat.

```html
<div class="video-3">
	<div class="video-3__obsah">Tady bude video přehrávač.</div>
</div>
```

```css
.video-3 {
	position: relative;
	box-shadow: inset 0 0 20px magenta;
	width: 100%;
}
.video-3::before {
	content: '';
	display: block;
	padding-top: calc(100% / (16 / 9));
}
.video-3__obsah {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
```
