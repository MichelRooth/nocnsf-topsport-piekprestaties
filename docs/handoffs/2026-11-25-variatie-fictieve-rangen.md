# Overdracht — analyseniveaus en variatie in fictieve rangen

## Huidige app

- Open [`index.html`](../../index.html) rechtstreeks in een moderne browser.
- Kies bij **Rangschikken op**: individuele sporter, hele sport of discipline.
- Bij een individuele analyse kies je één sporter. Op sport- en
  disciplineniveau worden passende resultaten van meerdere sporters gezamenlijk
  gerangschikt; daar is sporter een optioneel filter.
- Sportniveau vereist minstens één gekozen sport. Disciplineniveau vereist
  minstens één gekozen discipline. Jaar en `CompetitieSet` kunnen op elk niveau
  aanvullend worden gefilterd.
- De tabel toont op sport- en disciplineniveau ook de sporter per resultaat.
- `Piekprestatie` wordt na toepassing van de filters toegekend op basis van
  `Rank`. Gelijke rangen delen een nummer en volgende nummers worden
  overgeslagen. Andere kolomsortering wijzigt die nummers niet.

## Fictieve data

- Vijftien fictieve sporters, vijf per sport, met elk tien resultaten.
- De `Rank`-waarden variëren nu per sporter in plaats van dezelfde reeks voor
  iedereen te herhalen. In de dataset komen zes resultaten met rang 1 of 2 voor.
- De gezamenlijke rangschikkingen bevatten daardoor minder kunstmatige gelijke
  standen. De tie-logica blijft aanwezig en wordt met een afzonderlijk
  fictief testvoorbeeld gecontroleerd.
- Geen invoerbestanden of externe gegevens gebruikt; er is geen import of
  netwerkverkeer toegevoegd.

## Bestanden en controles

- `src/app.js` — fictieve data, filters, analyseniveaus en rangschikking.
- `index.html` en `src/styles.css` — bediening en weergave.
- `tests/app.test.js` — fictieve controles voor filters, rangverdeling,
  analyseniveaus en gelijke rangen.
- `README.md` — bijgewerkte gebruiksinstructies.

`git diff --check` is uitgevoerd. `node --test tests/app.test.js` kon niet
draaien omdat Node.js (`node`) niet beschikbaar is. Zie ook de eerdere
[overdracht over rangschikken per sport en discipline](2026-11-25-rangschikken-op-sport-en-discipline.md).
