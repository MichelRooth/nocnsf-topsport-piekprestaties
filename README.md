# NOC*NSF topsport piekprestaties

**App openen: open [`index.html`](index.html) rechtstreeks in je browser.**

Een lokale webapp om prestaties per sporter, sport of discipline te rangschikken
en te filteren op sporter, sport, jaar, `CompetitieSet` en discipline. De app gebruikt uitsluitend zelfgemaakte
fictieve gegevens.

## Huidige status

De gebruiker kiest een rangschikkingsniveau: individuele sporter, hele sport of
discipline. Bij een individuele analyse blijft de sporterkeuze verplicht. Bij
een sport- of disciplineanalyse worden alle passende sporters gezamenlijk
gerangschikt en kan de sporter als optioneel filter worden gebruikt. Filters
kunnen worden gecombineerd en gewist. De tabel toont de
oorspronkelijke `Rank` en een aparte kolom `Piekprestatie`. Gelijke rangen delen
hetzelfde piekprestatienummer en daaropvolgende nummers worden overgeslagen.

De dataset bevat vijftien fictieve sporters: vijf per sport, met elk tien
prestaties voor Olympische Spelen, WK, EK en World Cup. De fictieve
rangen variëren per sporter; eerste en tweede plaatsen komen slechts beperkt
voor, zodat gezamenlijke rangschikkingen minder kunstmatige gelijke standen
laten zien. Meerdere disciplines
kunnen binnen hetzelfde jaar voorkomen. Olympische Spelen staan uitsluitend
in 2024, 2021 en 2016. Wielrennen gebruikt
`tijdrit` en `wegrace`; zwemmen gebruikt `100m vrije slag`, `100m rugslag`,
`200m vrije slag` en `200m wisselslag`. Voor atletiek zijn voorlopig de
fictieve disciplinecategorieën `100m`, `200m`, `400m` en `800m` gekozen.

De tabel bevat `Piekprestatie`, `Rank`, `CompetitieSet`, `Jaar`, `Sport` en
`Discipline`. Klik op een kolomkop om daarop oplopend te sorteren; klik opnieuw
om aflopend te sorteren. De standaardvolgorde is `Rank` oplopend. Deze
weergavesortering verandert de Piekprestatie-nummers niet: die worden na de
filters op basis van `Rank` toegekend. Zie [de laatste overdracht](docs/handoffs/2026-11-19-kolomsortering.md)
voor de actuele implementatiestatus en controles.

## Lokaal openen

1. Open `index.html` rechtstreeks in een moderne browser.
2. Kies **Individuele sporter**, **Hele sport** of **Discipline** bij
   *Rangschikken op*.
3. Kies bij individueel niveau een sporter. Kies bij sportniveau minstens één
   sport; bij disciplineniveau minstens één discipline. De sporter is daar een
   optioneel filter.
4. Vink desgewenst jaren, `CompetitieSet`-waarden en overige filters aan.
5. Bekijk hoe `Piekprestatie` na de filters opnieuw vanaf 1 wordt berekend, met
   gedeelde nummers bij gelijke rangen.
6. Gebruik **Wis filters** om alle filters te legen.

Er is geen installatie, build, backend, import, externe dienst of netwerkverbinding
nodig. De app leest geen bestanden; de fictieve dataset staat in `src/app.js`.

## Huidige interpretatie van de regels

- Een lager `Rank`-getal betekent een betere wedstrijdplaats.
- De beginvolgorde is oplopend op `Rank`. Bij gelijke `Rank` komt het nieuwste
  jaar eerst; daarna wordt `CompetitieSet` alfabetisch gesorteerd. Een andere
  kolomsortering wijzigt alleen de zichtbare volgorde, niet de toegekende
  Piekprestatie-nummers.
- `Piekprestatie` wordt na alle filters bepaald op basis van de oplopend
  gesorteerde `Rank`-waarden. Gelijke `Rank`-waarden delen hetzelfde nummer en
  daaropvolgende nummers worden overgeslagen (1, 2, 2, 4). De nummering begint
  voor elke actuele selectie opnieuw bij 1.
- Meerdere aangevinkte waarden voor sport, jaar, `CompetitieSet` en discipline
  vormen elk een OR-selectie. Een resultaat moet tegelijk voldoen aan elke
  gekozen filtercategorie.
- De beschikbare disciplines passen zich aan de geselecteerde sporten aan.
  Bij meerdere sporten worden disciplines getoond die bij minstens één
  geselecteerde sport horen; zonder sportselectie zijn alle disciplines
  beschikbaar.
- Geen aangevinkte waarden betekent dat alle waarden van dat filtertype
  meetellen. Een sportkeuze is vereist voor sportniveau en een disciplinekeuze
  voor disciplineniveau. Op die niveaus kan de sporter als optionele filter
  worden gebruikt.
- Gelijke rangen blijven aparte rijen, maar delen hetzelfde nummer voor
  `Piekprestatie`.

De rangnummering en de mogelijkheid om op andere kolommen te sorteren zijn
geïmplementeerd. De overige sorteer- en filterkeuzes kunnen tijdens verder
gebruik nog worden bijgesteld.

## Geautomatiseerde controles

De fictieve unit tests staan in `tests/app.test.js` en zijn geschreven voor de
ingebouwde Node.js test runner. Als Node.js beschikbaar is, voer uit:

```text
node --test tests/app.test.js
```

De testset controleert dekking van de vier `CompetitieSet`-waarden, vijftien
sporters met tien resultaten elk, alle drie sporten en de afgesproken
disciplines. Ook controleert deze sport- en disciplinerangschikking over
meerdere sporters, filtercombinaties, de beschikbare jaren,
kolomsortering, gelijke rangen, Piekprestatie-nummering en lege selecties.
De tests zijn nog niet uitgevoerd, omdat `node` niet beschikbaar is in de
omgeving. Voer ze uit zodra Node.js beschikbaar is.

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
