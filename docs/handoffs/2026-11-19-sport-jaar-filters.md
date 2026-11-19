# Overdracht — sport- en jaarfilters

## Wijzigingen

- Filters toegevoegd voor sport en jaar. Sport, jaar, competitiegroep en
  discipline accepteren elk meerdere selecties als OR; verschillende
  filtercategorieën worden met AND gecombineerd.
- De knop **Wis filters** leegt alle vier filtercategorieën en behoudt de
  gekozen sporter.
- De fictieve dataset bevat nu vijftien sporters, vijf per sport, met tien
  resultaten per persoon.
- Wielrennen gebruikt `tijdrit` en `wegrace`. Zwemmen gebruikt `100m vrije
  slag`, `100m rugslag`, `200m vrije slag` en `200m wisselslag`.
- Voor atletiek zijn voorlopig `100m`, `200m`, `400m` en `800m` gebruikt,
  omdat de gebruiker geen atletiekdisciplines heeft opgegeven.
- Meerdere disciplines kunnen per sporter in hetzelfde jaar voorkomen.
- Olympische Spelen komen in de fictieve data uitsluitend voor in 2024, 2021 en
  2016.
- De bestaande Piekprestatie-regel bij gelijke rangen blijft van kracht.

## Controles

- Tests uitgebreid voor vijftien fictieve sporters, de drie sporten, de
  opgegeven zwemdisciplines, gecombineerde filters, meerdere disciplines in
  één jaar en de toegestane jaren van de Olympische Spelen.
- `git diff --check` uitgevoerd na de wijziging.
- Voer `node --test tests/app.test.js` uit zodra Node.js beschikbaar is;
  eerder was `node` niet beschikbaar.

Alle gegevens zijn zelfgemaakte fictieve voorbeelden. Er zijn geen bestanden
uit `Voorbeeld data/` geopend of gebruikt.
