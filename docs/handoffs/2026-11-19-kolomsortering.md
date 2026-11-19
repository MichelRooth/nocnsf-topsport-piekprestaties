# Overdracht — huidige MVP en kolomsortering

## Huidige app

- Start de app door [`index.html`](../../index.html) rechtstreeks in je browser
  te openen. Deze startinstructie staat ook nadrukkelijk bovenaan `README.md`.
- Kies een fictieve sporter en filter op sport, jaar, `CompetitieSet` en/of
  discipline. Meerdere keuzes binnen één filter zijn een OR-selectie;
  verschillende filtercategorieën worden gecombineerd.
- **Wis filters** leegt de vier filters en behoudt de gekozen sporter.
- De tabelkolommen zijn `Piekprestatie`, `Rank`, `CompetitieSet`, `Jaar`,
  `Sport` en `Discipline`.
- Alle kolomkoppen zijn sorteerbaar. De eerste klik sorteert oplopend en de
  volgende klik keert de richting om. Een pijl en `aria-sort` tonen de actieve
  sortering.

## Rangnummering en sortering

- De standaardweergave sorteert oplopend op `Rank`. Bij gelijke rangen komt het
  nieuwste jaar eerst, daarna `CompetitieSet` en discipline.
- `Piekprestatie` wordt na toepassing van de filters op basis van de gefilterde
  `Rank`-volgorde berekend. Gelijke rangen delen een nummer en daaropvolgende
  nummers worden overgeslagen: ranks `1, 2, 2, 3` leveren `1, 2, 2, 4` op.
- Sorteren op een andere kolom verandert alleen de zichtbare rijvolgorde. De
  berekende Piekprestatie-nummers blijven behouden.

## Fictieve dataset

- Vijftien sporters, vijf per sport, met tien records per sporter.
- Wielrennen: `tijdrit`, `wegrace`.
- Zwemmen: `100m vrije slag`, `100m rugslag`, `200m vrije slag`,
  `200m wisselslag`.
- Atletiek: voorlopig `100m`, `200m`, `400m`, `800m`.
- Er kunnen meerdere disciplines in hetzelfde jaar voorkomen.
- Records van Olympische Spelen komen uitsluitend voor in 2024, 2021 en 2016.
- De dataset is volledig zelfgemaakt; er is geen import of netwerkverkeer.

## Bestanden en controles

- `src/app.js` — fictieve data, filterlogica, piekprestatienummering en
  kolomsortering.
- `index.html` en `src/styles.css` — filterbediening en tabelpresentatie.
- `tests/app.test.js` — fictieve controles voor dataset, filters, gelijke
  rangen en kolomsortering.
- `README.md` — openen, huidige werking, regels en testinformatie.

`git diff --check` is uitgevoerd na de documentatie- en codewijzigingen.
`node --test tests/app.test.js` kon niet starten omdat Node.js (`node`) niet
beschikbaar is in de omgeving. Voer de testset uit zodra Node.js beschikbaar is.

## Gegevensgrenzen

Gebruik uitsluitend zelfgemaakte fictieve gegevens. Lees of gebruik geen andere
bestanden uit `Voorbeeld data/`; echte sporterdata en daadwerkelijke invoer
blijven buiten scope. Commit of push alleen op uitdrukkelijk verzoek.
