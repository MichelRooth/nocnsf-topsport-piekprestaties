# Overdracht voor coding agents

Lees eerst `AGENTS.md`, `README.md` en `plan-van-aanpak.md`.

De repository bevat intake- en projectstartmateriaal; de applicatie is nog niet
gebouwd. Werk uitsluitend met zelfgemaakte fictieve data. Daadwerkelijke
sporterinvoer lezen, importeren of verwerken is buiten scope van dit project;
bouw geen import of verwerking voor echte gegevens.

De gebruiker heeft toestemming gegeven om uitsluitend de volgende twee
fictieve bestanden als ontwerpreferentie te bekijken:

- `Voorbeeld data/Voorbeeld data - kolomnamen.xlsx`
- `Voorbeeld data/Gewenste output fictieve data Piekprestaties.xlsx`

De kolomnamen zijn bekeken. De invoer bevat onder meer `Person`, `Person/Team`,
`CompetitionSet` en `Rank`; de voorbeeldoutput toont onder meer
`CompetitionSet`, `Year`, `Rank` en `Kolom aantal deelnames`. De betekenis van
scenario's, combinatie van competitiegroepen en gewenste sortering moet nog
worden afgestemd. Kopieer deze bronbestanden niet naar de repository: de hele
map `Voorbeeld data/` blijft buiten Git. Open geen andere bestanden uit die
map en gebruik deze Excelbestanden niet als testinvoer.

Maak voor tests eigen fictieve records met resultaten voor Olympische Spelen,
WK, EK en World Cup.

Bespreek onduidelijkheden over rangschikking en output voordat je die als
vaststaande eisen implementeert. Controleer filters op één set en combinaties
van sets, de betekenis van `Rank`, gelijke rangen en lege resultaten. Houd
ruwe logs en echte gegevens buiten Git. Voer passende tests uit en noteer
wijzigingen en beperkingen in `docs/handoffs/`.
