# Overdracht — Codex-blokkade voor `data/Private/`

## Huidige inrichting

- `.codex/hooks.json` registreert een projectbrede `PreToolUse`-hook. Op
  Windows start deze PowerShell; op andere platforms is er een Python-hook.
- De hook inspecteert de toolargumenten en weigert herkenbare directe paden
  naar `data/Private/`. Onleesbare invoer wordt geweigerd.
- `.codex/config.toml` configureert een project-sandboxprofiel dat lezen en
  schrijven naar `data/Private/` weigert binnen de workspace. Andere
  workspacemappen, waaronder `data/Voorbeelddata/`, blijven beschikbaar.
- `.gitignore` sluit zowel `data/Private/` als `data/Voorbeelddata/` uit van
  Git.
- `AGENTS.md`, `README.md` en `plan-van-aanpak.md` beschrijven de mapnamen en
  gegevensgrenzen. De README verwijst naar deze hand-off.

## Verificatie en beperkingen

- De hook is handmatig getest met fictieve toolinvoer en paden; er zijn geen
  bestanden of mapinhoud uit de datamappen geopend. `data/Private/...` gaf
  `deny`; `data/Voorbeelddata/...` kreeg geen blokkade.
- De Windows-hookconfiguratie is als JSON geparseerd. `git check-ignore` toont
  beide lokale datamappen als uitgesloten. `git diff --check` is schoon.
- Vertrouw de repository in Codex en accepteer een eventuele hook-review; start
  zo nodig een nieuwe sessie. Projectinstellingen en hooks worden niet geladen
  voor een onbetrouwbare repository.
- De hook controleert herkenbare toolargumenten en is geen volledige
  beveiligingsgrens. Codex vermeldt dat sommige gespecialiseerde toolroutes
  hooks kunnen omzeilen. De project-sandbox biedt een aanvullende grens voor
  ondersteunde Codex-commando's; voor blokkering buiten Codex zijn
  OS-bestandsrechten nodig.
