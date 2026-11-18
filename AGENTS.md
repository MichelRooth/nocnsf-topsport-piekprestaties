# Werkafspraken voor coding agents

## Doel

Deze repository is voor een lokale tool die fictieve sportprestaties per persoon
kan rangschikken op `Rank`, met filters op een of meer `CompetitionSet`-waarden.
Lees eerst [README.md](README.md) en [plan-van-aanpak.md](plan-van-aanpak.md).
De eerste uitwerking gebruikt uitsluitend fictieve gegevens.

## Gegevensbescherming

- Echte sporterdata en daadwerkelijke invoerbestanden niet lezen, importeren,
  kopiëren, verwerken of uploaden. Deze zijn buiten scope van de intake en dit
  project.
- De gebruiker heeft uitsluitend toestemming gegeven om deze twee fictieve
  bestanden als ontwerpreferentie te bekijken:
  - `Voorbeeld data/Voorbeeld data - kolomnamen.xlsx`
  - `Voorbeeld data/Gewenste output fictieve data Piekprestaties.xlsx`
- Open geen andere bestanden in `Voorbeeld data/`. Kopieer de goedgekeurde
  Excelbestanden niet naar de repository en gebruik ze niet als testinvoer.
  Maak eigen fictieve testgegevens.
- Gebruik geen echte gegevens in prompts, broncode, tests, logs,
  foutmeldingen, screenshots of exports.
- Gebruik uitsluitend fictieve testgegevens.
- De map `Voorbeeld data/` blijft volledig uitgesloten van Git. `.gitignore`
  is geen toegangsbeveiliging.
- Vraag om verduidelijking voordat een taak buiten deze afgesproken
  fictieve-only scope zou treden; ga niet uit van toestemming om echte gegevens
  te verwerken.

## Werkwijze

- Werk alleen binnen deze repository en houd wijzigingen gericht.
- Bouw geen functionaliteit buiten de intake-afspraken zonder dit eerst af te
  stemmen.
- Voeg geen externe diensten, telemetry of netwerkverkeer toe zonder expliciete
  reden en toestemming.
- Plaats geschoonde overdrachten in `docs/handoffs/`; zet geen brondata of
  persoonsgegevens in die documenten.
- Houd ruwe logs in `logs/runtime/` en `logs/test/`; commit ze niet.
- Voer passende tests uit na codewijzigingen en vermeld de uitkomst en
  beperkingen.
- Commit of push alleen op uitdrukkelijk verzoek van de gebruiker.
