# Plan van aanpak: topsport-prestatieanalyse

18 november 2026 · uitgebreide intake · bestaande repository · concept

## 1. Probleem en aanleiding

Prestatiemanagers en analisten willen per sporter snel kunnen zien hoe diens
prestaties zich tot elkaar verhouden en hoe bijzonder een resultaat is. Er is
nog geen applicatie of bestaande werkwijze in deze repository. De gewenste
analyse gebruikt onder meer de kolommen `Person`, `CompetitionSet` en `Rank`,
met filters op één of meer `CompetitionSet`-waarden.

## 2. Gebruikers en toepassing

De primaire gebruikers zijn prestatiemanagers en analisten. Zij gebruiken het
overzicht om vast te stellen of een sporter een beste prestatie levert en om
resultaten meer context te geven.

## 3. Beoogde aanpak

Bouw eerst een lokale analysetool op uitsluitend fictieve gegevens. De gebruiker
kiest een sporter en één of meer competitiegroepen; de tool toont diens
prestaties gerangschikt op `Rank`. De eerste testdata bevat resultaten voor de
Olympische Spelen, WK, EK en World Cup. De technische vorm en eventuele
PowerPoint-export zijn nog niet gekozen.

## 4. Bronnen en afhankelijkheden

- Bestanden onder `data/Voorbeelddata/` mogen als voorbeeldmateriaal worden
  geopend wanneer een taak dat vereist. `data/Private/` blijft altijd buiten
  bereik van agentwerk.
- De kolomnamen en voorbeeldoutput zijn bekeken. De invoer bevat onder meer
  `Person`, `Person/Team`, `CompetitionSet` en `Rank`; de voorbeeldoutput toont
  onder meer `CompetitionSet`, `Year`, `Rank` en `Kolom aantal deelnames`.
  De precieze betekenis van scenario's en sortering blijft open.
- De bestanden zijn niet gekopieerd en de map blijft uitgesloten van Git.
  Andere bestanden in de map zijn niet goedgekeurd om te openen.

## 5. Gegevensbescherming

Echte prestatiedata is gevoelig. De intake en dit project gebruiken uitsluitend
zelfgemaakte fictieve gegevens. Daadwerkelijke invoer wordt niet gelezen,
geïmporteerd of verwerkt, ook niet door de uiteindelijke tool. De gebruiker wil
een lokale tool voor fictieve gegevens. De
goedgekeurde fictieve Excelbestanden dienen alleen als ontwerpreferentie en
worden niet naar Git gekopieerd of als testinvoer gebruikt.

### Voorstel voor `AGENTS.md` — Data access

- Data-eigenaar/bevoegde rol: niet van toepassing zolang uitsluitend fictieve
  gegevens worden gebruikt. Echte gegevens verwerken is buiten scope.
- Opzet tijdens ontwikkeling: uitsluitend fictieve data.
- Uitvoering: lokaal beoogd; technische isolatie en verwerking nog te
  controleren. Wie de toepassing uitvoert: gebruiker.
- Agent mag lezen: broncode, documentatie, zelfgemaakte fictieve testdata en
  bestanden in `data/Voorbeelddata/` wanneer de taak dat vereist.
- Agent mag niet lezen, printen, kopiëren, verwerken of uploaden: daadwerkelijke
  invoer, alle bestanden in `data/Private/`, `.env`,
  `.env.*` (behalve een `.env.example` met fictieve waarden) en alle overige
  echte of vertrouwelijke sporterdata.
- Ontwikkel en test met fictieve gegevens; geen echte gegevens in Git, prompts,
  logs, screenshots, foutmeldingen, exports of testresultaten.
- Output: uitsluitend zelfgemaakte fictieve resultaten; geen output uit echte
  gegevens.
- Technische toegangsregels: per gebruikte coding agent vaststellen en testen;
  instructietekst alleen geldt niet als technische toegangsblokkade.
- Daadwerkelijke invoer blijft buiten de intake en dit project. Een genegeerde
  map is op zichzelf geen beveiliging.

## 6. Bestaande code

De doelrepository had aanvankelijk alleen Git-metadata en een door de gebruiker
aangewezen map `Voorbeeld data/`. De basisstructuur en projectstartdocumenten
zijn nu aangemaakt; applicatiecode en testbasis ontbreken nog. De indeling van
`teamnl-agentic-engineering` is als structuurreferentie gebruikt. Inhoud van
die repository is niet gekopieerd: die bevat persoonsgebonden deelnemersmateriaal
en cursus-/appbestanden die niet bij deze applicatie horen. Neem geen
Git-metadata, secrets, echte data of runtime- en testlogs over.

## 7. Minimale eerste versie

Maak een lokale eerste versie die zelfgemaakte fictieve testdata kan tonen,
prestaties per `Person` kan weergeven en kan filteren op één of meer
`CompetitionSet`-waarden. Sorteer op het bestaande veld `Rank`. Controleer in
de fictieve testgevallen welke sorteerrichting correct is; neem niet zonder
verificatie aan dat een lager getal altijd beter is.

Voorgestelde acceptatiecontroles:

- Fictieve data bevat Olympische Spelen, WK, EK en World Cup en meerdere
  prestaties per persoon.
- Een filter op één set en een combinatie van sets toont alleen de passende
  resultaten.
- Resultaten zijn per persoon volgens `Rank` geordend; gelijke rangen, lege
  resultaten en onbekende waarden geven een begrijpelijke uitkomst.
- De lokale test doorloopt de volledige route van selectie tot overzicht zonder
  echte sporterdata of externe datadiensten.

Niet vastgelegd voor deze versie: geavanceerde analyses, online diensten en een
PowerPoint-export. Echte gegevens verwerken is buiten scope van dit project.

## 8. Latere versies

Onderzoek na de fictieve MVP of de gebruikers een presentatiebestand met
fictieve resultaten nodig hebben. Verwerking van daadwerkelijke invoer valt
buiten scope en wordt niet gebouwd.

## 9. Repositorystructuur

Behoud de huidige repositorynaam. Gebruik de volledige projectindeling en
bestanden uit de genoemde referentierepository als sjabloon, met
projectrelevante inhoud. De huidige gewenste hoofdonderdelen zijn:

```text
/
|-- AGENTS.md
|-- README.md
|-- .gitignore
|-- .gitattributes
|-- .env.example
|-- plan-van-aanpak.md
|-- agentic-coding-handoff.md
|-- index.html
|-- .agents/
|-- .claude/
|-- deelnemers/
|-- naslagwerk/
|-- src/
|-- tests/
|   `-- fixtures/             # Alleen fictieve testdata
|-- docs/
|   |-- handoffs/
|   `-- bronnen/
|-- logs/
|   |-- README.md
|   |-- runtime/              # Lokaal; buiten Git
|   `-- test/                 # Lokaal; buiten Git
```

De gebruiker vroeg de mappen en bestanden van de referentierepository als
uitgangspunt te gebruiken. De passende basisstructuur en nieuwe, projectspecifieke
startdocumenten zijn aangemaakt. Persoonsgebonden deelnemersbestanden,
cursusmateriaal, bestaande applicatiecode en mogelijk credential-gerelateerde
bestanden zijn bewust niet gekopieerd. Houd één bronmap aan. Bewaar fictieve
voorbeelden onder `tests/fixtures/` of `data/example/` als die map nodig blijkt. De inhoud van
niet-rootmappen is tijdens deze intake niet bekeken.

De intakebestanden zijn bedoeld als eerste commit. De map `data/Voorbeelddata/`
blijft volledig uitgesloten; voeg de fictieve ontwerpreferenties niet toe aan
die commit. Basis voor `.gitignore`, aan te vullen bij de gekozen techniek:

```gitignore
.env
.env.*
!.env.example
data/Private/
data/Voorbeelddata/
Voorbeeld data/
logs/runtime/
logs/test/
output/
tmp/
.DS_Store
Thumbs.db
*.log
```

Controleer later ook of uitgesloten bestanden al door Git worden gevolgd;
`.gitignore` verwijdert geen bestaande bestanden of Git-geschiedenis.

## 10. Logging en beheer

De gebruiker wil zelf bepalen wie toegang krijgt en wil logging- en
beheerkeuzes later uitwerken. Voorstel: beperk logging aanvankelijk tot
technische fout en verwerkingsstatus, met tijdstip en component. Schrijf geen
brondata, persoonsgegevens, secrets of volledige foutcontext naar logs.
Bewaar ruwe runtime- en testlogs buiten Git in `logs/runtime/` en `logs/test/`;
leg doel, toegang en bewaartermijn vast in `logs/README.md`. Beheerder en
bewaartermijn zijn open keuzes.

## 11. Startvoorwaarden en uitvoering

1. De basisstructuur, projectinstructies, README en `.gitignore` zijn
   aangemaakt als eerste repositorystap. De twee goedgekeurde fictieve
   spreadsheets zijn alleen als ontwerpreferentie bekeken en blijven buiten
   de commit.
2. Gebruik voor verdere ontwikkeling zelfgemaakte fictieve testgegevens.
3. Maak fictieve data met resultaten voor Olympische Spelen, WK, EK en World
   Cup. Leg ook filters, combinatiefilters, gelijke rangen en lege selecties
   vast in tests.
4. Bouw de lokale route van selectie naar gerangschikt overzicht en controleer
   de acceptatiecriteria.
5. Beslis na de fictieve MVP of een exportformaat, bijvoorbeeld PowerPoint,
   toegevoegde waarde heeft. Verwerk geen daadwerkelijke invoer.

Er zijn nog geen applicatiecodewijzigingen of verwerkingen van prestatierijen
uitgevoerd. De twee goedgekeurde fictieve voorbeelden zijn alleen op
kolomnamen en outputindeling bekeken.

## 12. Aannames, open besluiten en eerste vervolgopdracht

- **Rangschikking:** bevestig met zelfgemaakte fictieve voorbeelden de
  sorteerrichting, betekenis van `Rank`, omgang met gelijke rangen en de exacte
  betekenis van een combinatie van `CompetitionSet`-waarden.
- **Output:** bepaal of een tabel/overzicht volstaat of dat export, bijvoorbeeld
  PowerPoint met fictieve resultaten, nodig is.
- **Echte gegevens:** daadwerkelijke invoer blijft buiten scope. De twee
  aangewezen fictieve bestanden blijven alleen als lokale ontwerpreferentie
  beschikbaar en worden niet aan Git toegevoegd.
- **Projectsjabloon:** beoordeel de inhoud van alle over te nemen bestanden op
  relevantie voor dit project; vervang cursusgebonden teksten en sluit
  data/logbestanden en Git-metadata uit.
- **Logging:** bepaal later toegang, beheerder en bewaartermijn.

**Eerste vervolgopdracht:** maak de repository agent-ready op basis van het
gevraagde sjabloon. Werk eerst `AGENTS.md`, `README.md` en `.gitignore` bij,
gebruik uitsluitend fictieve data, bouw vervolgens alleen de lokale MVP en
controleer de acceptatiecriteria. Verwerk geen daadwerkelijke invoer. Noteer
wijzigingen, controles en beperkingen beknopt in `docs/handoffs/`.
