---
layout: base
---

# Data v Eleventy 2

## Filtry

Pomáhají transformovat proměnné. Zapisují se pomocí symbolu svislé čáry ({% raw %}`{{ promenna | filtr }}`{% endraw %}).

Pokud bychom chtěli například vypsat počet položek v kolekci, uděláme to v šabloně takto:

```liquid
<div>Počet filmů v kolekci: {% raw %}{{ filmy | length }}{% endraw %}</div>
```

Výsledek v HTML bude vypadat takto:

```html
<div>Počet filmů v kolekci: 5</div>
```

## Slug

Pro převod textu na znaky vhodné pro URL adresu používáme filtr `| slug`.

```liquid
<div>Název: {% raw %}{{ filmy.nazev }}{% endraw %}</div>
<div>URL: {% raw %}/film/{{ filmy.nazev | slug }}{% endraw %}</div>
```

Výsledek v HTML bude vypadat takto:

```html
<div>Název: Pán prstenů</div>
<div>URL: /film/pan-prstenu</div>
```

## Spojení kolekce

Pokud máme v kolekci samé řetězce, můžeme je spojit dohromady pomocí filtru `join`.

### `zanry.json`

```json
["Sci-Fi", "Komedie", "Romantický"]
```

### `sablona.njk`

```liquid
<div>{% raw %}{{ zanry | join }}{% endraw %}</div>
```

### Výsledek:

```html
<div>Sci-FiKomedieRomantický</div>
```

Pokud chceme použít vlastní oddělovač, například čárku navíc s mezerou, přidáme za slice parametr.

### `sablona.njk`

```liquid
<div>{% raw %}{{ zanry | join(', ') }}{% endraw %}</div>
<div>{% raw %}{{ zanry | join(' / ') }}{% endraw %}</div>
```

### Výsledek:

```html
<div>Sci-Fi, Komedie, Romantický</div>
<div>Sci-Fi / Komedie / Romantický</div>
```

## Další filtry

Všechny zabudované filtry do nunjucks jsou popsané v dokumentaci [zde](https://mozilla.github.io/nunjucks/templating.html#builtin-filters).

## Podmínky

Pokud chceme na stránce vypsat kus HTML jen v případě, že platí nějaká podmínka, použijeme `{% raw %}{% if %}{% endraw %}`.

```liquid
{% raw %}{% if rokNatoceni == 2021 %}{% endraw %}
	<div>Film byl natočen letos</div>
{% raw %}{% endif %}{% endraw %}
```

Pokud chceme vypsat něco jiného v případ, že podmínka neplatí, doplníme zápis o větev `{% raw %}{% else %}{% endraw %}`. Podmínku můžeme kombinovat i s filtry.

```liquid
{% raw %}{% if filmy | length > 0 %}{% endraw %}
	<ul>
		{% raw %}{% for film in filmy %}{% endraw %}
			<li>
				{% raw %}{{ film }}{% endraw %}
			</li>
		{% raw %}{% endfor %}{% endraw %}
	</ul>
{% raw %}{% else %}{% endraw %}
	<div>V kolekci není ani jedna položka.</div>
{% raw %}{% endif %}{% endraw %}
```

## Přejmenování proměnné

Pomocí `{% raw %}{% set %}{% endraw %}` můžeme vytvářet nové proměnné, které dokonce můžou vycházet z již existujících.

```liquid
{% raw %}{% set nejoblibenejsiCislo = 12 %}{% endraw %}
<div>Nejoblíbenější číslo je: {% raw %}{{ nejoblibenejsiCislo }}{% endraw %}</div>

{% raw %}{% set nejoblibenejsiFilmy = filmy %}{% endraw %}
<h2>Nejoblíbenější filmy</h2>
<ul>
	{% raw %}{% for film in nejoblibenejsiFilmy %}{% endraw %}
		<li>
			{% raw %}{{ film }}{% endraw %}
		</li>
	{% raw %}{% endfor %}{% endraw %}
</ul>
```

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-Eleventy-filmy](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-filmy).
