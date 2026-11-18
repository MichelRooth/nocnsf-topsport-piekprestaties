# NOC*NSF topsport piekprestaties

Project in opstartfase voor een lokale tool om fictieve sportprestaties per
persoon te rangschikken op `Rank`, met filters op één of meer
`CompetitionSet`-waarden.
De beoogde gebruikers zijn prestatiemanagers en analisten.

## Huidige status

De intake en projectstructuur zijn voorbereid. Er is nog geen applicatiecode.
De eerste bouwstap is een fictieve dataset met resultaten voor Olympische
Spelen, WK, EK en World Cup, gevolgd door tests en een lokaal overzicht.
De aangewezen fictieve voorbeelden zijn op kolomnamen en gewenste output
bekeken. De invoer bevat onder meer `Person`, `Person/Team`, `CompetitionSet`
en `Rank`; de voorbeeldoutput toont onder meer competitiegroep, jaar, rang en
aantal deelnames. De precieze betekenis van scenario's en rangschikkingsdetails
moeten nog worden vastgesteld. Een export, zoals PowerPoint, is nog geen eis.

## Gegevensbescherming

Echte prestatiedata is gevoelig en valt buiten de intake en dit project.
Verwerk uitsluitend zelfgemaakte fictieve testgegevens; lees, importeer of
verwerk geen daadwerkelijke invoer. De gebruiker heeft alleen deze twee
fictieve bestanden uit `Voorbeeld data/` aangewezen en toestemming gegeven om
ze als ontwerpreferentie te bekijken:

- `Voorbeeld data/Voorbeeld data - kolomnamen.xlsx`
- `Voorbeeld data/Gewenste output fictieve data Piekprestaties.xlsx`

Ze zijn niet naar de repository gekopieerd en blijven door `.gitignore`
uitgesloten. Andere bestanden in die map zijn niet goedgekeurd om te openen.
Zie [AGENTS.md](AGENTS.md) en [plan-van-aanpak.md](plan-van-aanpak.md) voor de
volledige grenzen. Lokale verwerking van echte gegevens is geen onderdeel van
dit project.

## Projectindeling

- `src/` — applicatiecode.
- `tests/` — geautomatiseerde tests en fictieve fixtures.
- `docs/` — projectdocumentatie en geschoonde overdrachten.
- `logs/` — afspraken en lokale runtime-/testlogs.
- `naslagwerk/` — projectrelevante technische notities.
- `deelnemers/` — gereserveerd; plaats hier geen sporterdata of persoonsgegevens.

De applicatie is nog niet gebouwd; er zijn nog geen start- of testcommando's.
