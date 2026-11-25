# Overdracht — rangschikken op sport en discipline

## Wijzigingen

- De app biedt nu drie analyseniveaus: individuele sporter, hele sport en
  discipline.
- Individueel niveau behoudt de bestaande verplichte sporterkeuze en werking.
- Op sportniveau worden resultaten van de geselecteerde sport(en) van alle
  sporters gezamenlijk gerangschikt. Minstens één sport moet zijn geselecteerd.
- Op disciplineniveau worden resultaten van de geselecteerde discipline(s) van
  alle sporters gezamenlijk gerangschikt. Minstens één discipline moet zijn
  geselecteerd.
- Op sport- en disciplineniveau kan optioneel op een of meer sporters worden
  gefilterd. Jaar- en `CompetitieSet`-filters blijven beschikbaar.
- De resultatentabel toont op deze niveaus ook de sporter per resultaat.
- `Piekprestatie`-nummers worden na alle actieve filters opnieuw toegekend op
  basis van `Rank`; gelijke rangen delen hetzelfde nummer.

## Bestanden en controles

- `src/app.js` — analysefilters en gezamenlijke rangschikking.
- `index.html` — keuze van analyseniveau en optionele sporterfilter.
- `tests/app.test.js` — fictieve controles voor sport- en disciplineniveau.
- `README.md` — gebruiksinstructies en regels bijgewerkt.

Alleen zelfgemaakte fictieve gegevens zijn gebruikt. Er zijn geen imports of
netwerkverbindingen toegevoegd. Testuitkomst: nog te controleren.
