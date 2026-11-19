# Overdracht — piekprestatie bij gelijke rangen

## Wijziging

- De tabelkolom `Resultaat` heet nu `Piekprestatie`.
- `Piekprestatie` gebruikt rangnummering na toepassing van de filters en sortering.
- Gelijke `Rank`-waarden krijgen hetzelfde piekprestatienummer; volgende nummers
  worden overgeslagen. Voor ranks `1, 2, 2, 3, 3, 4` wordt dat `1, 2, 2, 4, 4, 6`.
- Bij de fictieve Alex-voorbeelddata geeft filter `EK` ranks `3, 3, 29` en
  piekprestaties `1, 1, 3`.
- De rijen blijven afzonderlijk zichtbaar en de oorspronkelijke `Rank` blijft
  ongewijzigd.

## Bestanden

- `src/app.js` — berekening en tabelkop bijgewerkt.
- `tests/app.test.js` — controles toegevoegd voor beide voorbeelden.
- `README.md` — huidige betekenis van `Piekprestatie` bijgewerkt.

## Controles

- `git diff --check` geslaagd.
- `node --test tests/app.test.js` kon niet starten: Node.js (`node`) is niet
  beschikbaar in de omgeving. Voer deze controle uit zodra Node.js beschikbaar
  is.

Alle wijzigingen en voorbeelden blijven fictief. Er zijn geen invoerbestanden
geopend of gebruikt.
