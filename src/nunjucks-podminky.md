---
layout: base
---

# Nunjucks podmínky

Pokud chceme na stránce vypsat kus HTML jen v případě, že platí nějaká podmínka, použijeme `{% raw %}{% if %}{% endraw %}`.

```liquid
{% raw %}{% if film.rokNatoceni == 2021 %}{% endraw %}
	<div>Film byl natočen letos</div>
{% raw %}{% endif %}{% endraw %}
```

Dvojité rovná se `==` je zde záměrně. Stejně jako v jiných programovacích jazycích i zde plní roli porovnání. Samotné `=` slouží k přiřazení nové hodnoty.

Pokud chceme vypsat něco jiného v případě, že podmínka neplatí, doplníme zápis o větev `{% raw %}{% else %}{% endraw %}`. Podmínku můžeme kombinovat i s filtry.

```liquid
{% raw %}{% if filmy | length > 0 %}{% endraw %}
	<h2>Výpis filmů</h2>
	<ul>
		{% raw %}{% for film in filmy %}{% endraw %}
			<li>
				{% raw %}{{ film.nazev }}{% endraw %}
			</li>
		{% raw %}{% endfor %}{% endraw %}
	</ul>
{% raw %}{% else %}{% endraw %}
	<div>V kolekci není ani jedna položka.</div>
{% raw %}{% endif %}{% endraw %}
```

Více ukázek použití je v [dokumentaci](https://mozilla.github.io/nunjucks/templating.html#if).
