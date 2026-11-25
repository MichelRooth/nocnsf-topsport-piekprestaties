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
- Open, lees of inventariseer nooit bestanden of submappen in `data/Private/`.
  Dit geldt ook voor bestandsnamen, metadata, previews en testinvoer.
- Bestanden in `data/Voorbeelddata/` mogen worden geopend wanneer de taak dat
  vereist. Verwerk geen echte persoonsgegevens of daadwerkelijke invoer; gebruik
  voor ontwikkeling en tests eigen fictieve gegevens.
- Gebruik geen echte gegevens in prompts, broncode, tests, logs, foutmeldingen,
  screenshots of exports.
- Gebruik uitsluitend fictieve testgegevens.
- `data/Private/` blijft volledig uitgesloten van Git. `.gitignore` is geen
  toegangsbeveiliging; de Codex-hook en sandboxregel in `.codex/` zijn
  agentguardrails.
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
