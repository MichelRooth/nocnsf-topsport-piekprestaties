# NOC*NSF topsport piekprestaties

Een lokale webapp om prestaties per sporter te bekijken, op `Rank` te
rangschikken en te filteren op competitiegroep en discipline. De huidige app is
een testbare eerste versie met uitsluitend zelfgemaakte fictieve gegevens.

## Huidige status

De basisfunctionaliteit is gebouwd. De gebruiker kan een sporter kiezen,
competitiegroepen en disciplines combineren, de filters wissen en de
resultatenlijst bekijken. De tabel toont zowel de oorspronkelijke `Rank` als
een aparte kolom `Resultaat`. `Resultaat` is het volgnummer van een rij binnen
de actuele selectie; het vervangt `Rank` niet en wordt ook niet gebruikt om te
sorteren.

De dataset heeft vijf fictieve sporters met elk tien prestaties voor
Olympische Spelen, WK, EK en World Cup. De rangen bevatten kleine en grotere
waarden, onder andere 1, 2, 3, 5, 11, 13, 29 en 45.

De volgende stap is de app met de gebruiker verder door te testen en te
controleren of definities, filters, sortering en presentatie aan de wensen
voldoen. Zie [de laatste overdracht](docs/handoffs/2026-11-18-mvp.md) voor een
testplan en open punten. De huidige sorteerkeuzes zijn werkafspraken voor deze
MVP en moeten bij die controle worden bevestigd.

## Lokaal openen

1. Open `index.html` rechtstreeks in een moderne browser.
2. Kies een sporter.
3. Vink desgewenst een of meer competitiegroepen en/of disciplines aan.
4. Bekijk hoe `Resultaat` opnieuw vanaf 1 telt voor wat na de filters overblijft.
5. Gebruik **Wis filters** om de competitie- en disciplinekeuze te legen.

Er is geen installatie, build, backend, import, externe dienst of netwerkverbinding
nodig. De app leest geen bestanden; de fictieve dataset staat in `src/app.js`.

## Huidige interpretatie van de regels

- Een lager `Rank`-getal betekent een betere wedstrijdplaats.
- De rijen worden oplopend op `Rank` gesorteerd. Bij gelijke `Rank` komt het
  nieuwste jaar eerst; daarna wordt de competitiegroep alfabetisch gesorteerd.
- `Resultaat` is een oplopend volgnummer na het toepassen van alle filters.
  Zonder competitie- of disciplinefilter telt het over alle resultaten van de
  gekozen sporter. Met een filter begint de nummering binnen die selectie weer
  bij 1.
- Meerdere aangevinkte competitiegroepen vormen samen een OR-selectie: een
  resultaat mag bij elk van de geselecteerde groepen horen. Voor meerdere
  disciplines geldt dezelfde OR-regel. Een resultaat moet tegelijk voldoen aan
  de gekozen competitie- en disciplinefilters.
- Geen aangevinkte waarden betekent dat alle waarden van dat filtertype
  meetellen. De sporterkeuze is altijd vereist.
- Gelijke rangen worden niet samengevoegd; elk resultaat krijgt zijn eigen
  volgnummer.

Bevestig of wijzig deze interpretaties tijdens de volgende testsessie. Met name
de betekenis van `Resultaat`, de sortering bij gelijke rangen en hoe filters
moeten combineren zijn gebruikersregels, geen vastgestelde domeinregels.

## Geautomatiseerde controles

De fictieve unit tests staan in `tests/app.test.js` en zijn geschreven voor de
ingebouwde Node.js test runner. Als Node.js beschikbaar is, voer uit:

```text
node --test tests/app.test.js
```

De testset controleert dekking van de vier competitiegroepen, vijf sporters met
tien resultaten elk, persoons- en competitiefilters, gecombineerde filters,
disciplinefiltering, sortering, gelijke rangen, resultaatnummering en lege
selecties. De tests zijn in de vorige werksessie aangemaakt maar konden toen
niet worden uitgevoerd: `node` was niet beschikbaar in de omgeving. Voer ze de
volgende keer uit wanneer Node.js beschikbaar is en los eventuele fouten op.

## Gegevensbescherming

Verwerk uitsluitend zelfgemaakte fictieve testgegevens. Daadwerkelijke
sporterdata en invoerbestanden zijn buiten scope: lees, importeer, kopieer,
verwerk of upload die niet. De gebruiker heeft uitsluitend toestemming gegeven
om de volgende twee fictieve bestanden als ontwerpreferentie te bekijken:

- `Voorbeeld data/Voorbeeld data - kolomnamen.xlsx`
- `Voorbeeld data/Gewenste output fictieve data Piekprestaties.xlsx`

Open geen andere bestanden uit `Voorbeeld data/`, gebruik geen van de
spreadsheets als invoer of testdata en kopieer ze niet naar de repository. De
hele map blijft uitgesloten van Git. Zie [AGENTS.md](AGENTS.md) en
[plan-van-aanpak.md](plan-van-aanpak.md) voor de volledige afspraken.

## Projectindeling

- `index.html` — lokale webapp-pagina.
- `src/app.js` — fictieve records, filter- en sorteerverwerking en rendering.
- `src/styles.css` — vormgeving.
- `tests/` — controles met uitsluitend fictieve gegevens.
- `docs/handoffs/` — geschoonde overdrachten tussen werksessies.
- `logs/` — afspraken en lokale runtime-/testlogs; ruwe logs niet committen.
- `deelnemers/` — gereserveerd; plaats hier geen sporterdata of persoonsgegevens.
