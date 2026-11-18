/* Alleen zelfgemaakte fictieve voorbeelden. Geen externe data of import. */
const performances = [
  { person: "Alex Voorbeeld", competitionSet: "Olympische Spelen", year: 2024, discipline: "100 m", rank: 2 },
  { person: "Alex Voorbeeld", competitionSet: "WK", year: 2023, discipline: "100 m", rank: 1 },
  { person: "Alex Voorbeeld", competitionSet: "EK", year: 2022, discipline: "200 m", rank: 3 },
  { person: "Alex Voorbeeld", competitionSet: "World Cup", year: 2021, discipline: "200 m", rank: 4 },
  { person: "Alex Voorbeeld", competitionSet: "WK", year: 2021, discipline: "400 m", rank: 2 },
  { person: "Alex Voorbeeld", competitionSet: "EK", year: 2020, discipline: "400 m", rank: 3 },
  { person: "Alex Voorbeeld", competitionSet: "World Cup", year: 2019, discipline: "100 m", rank: 5 },
  { person: "Alex Voorbeeld", competitionSet: "Olympische Spelen", year: 2016, discipline: "200 m", rank: 6 },
  { person: "Alex Voorbeeld", competitionSet: "EK", year: 2018, discipline: "400 m", rank: 29 },
  { person: "Alex Voorbeeld", competitionSet: "WK", year: 2017, discipline: "100 m", rank: 45 },
  { person: "Robin Demo", competitionSet: "Olympische Spelen", year: 2024, discipline: "200 m", rank: 5 },
  { person: "Robin Demo", competitionSet: "WK", year: 2023, discipline: "200 m", rank: 4 },
  { person: "Robin Demo", competitionSet: "EK", year: 2022, discipline: "200 m", rank: 1 },
  { person: "Robin Demo", competitionSet: "World Cup", year: 2020, discipline: "200 m", rank: 2 },
  { person: "Robin Demo", competitionSet: "EK", year: 2020, discipline: "400 m", rank: 3 },
  { person: "Robin Demo", competitionSet: "World Cup", year: 2019, discipline: "400 m", rank: 11 },
  { person: "Robin Demo", competitionSet: "WK", year: 2018, discipline: "100 m", rank: 8 },
  { person: "Robin Demo", competitionSet: "EK", year: 2017, discipline: "100 m", rank: 6 },
  { person: "Robin Demo", competitionSet: "Olympische Spelen", year: 2016, discipline: "400 m", rank: 29 },
  { person: "Robin Demo", competitionSet: "WK", year: 2015, discipline: "200 m", rank: 45 },
  { person: "Sam Fictief", competitionSet: "Olympische Spelen", year: 2024, discipline: "400 m", rank: 8 },
  { person: "Sam Fictief", competitionSet: "WK", year: 2022, discipline: "400 m", rank: 6 },
  { person: "Sam Fictief", competitionSet: "World Cup", year: 2021, discipline: "400 m", rank: 1 },
  { person: "Sam Fictief", competitionSet: "EK", year: 2020, discipline: "100 m", rank: 7 },
  { person: "Sam Fictief", competitionSet: "WK", year: 2019, discipline: "100 m", rank: 11 },
  { person: "Sam Fictief", competitionSet: "EK", year: 2018, discipline: "200 m", rank: 13 },
  { person: "Sam Fictief", competitionSet: "World Cup", year: 2017, discipline: "200 m", rank: 29 },
  { person: "Sam Fictief", competitionSet: "Olympische Spelen", year: 2016, discipline: "400 m", rank: 45 },
  { person: "Sam Fictief", competitionSet: "WK", year: 2015, discipline: "200 m", rank: 5 },
  { person: "Sam Fictief", competitionSet: "EK", year: 2014, discipline: "100 m", rank: 3 },
  { person: "Jamie Test", competitionSet: "EK", year: 2024, discipline: "100 m", rank: 1 },
  { person: "Jamie Test", competitionSet: "World Cup", year: 2023, discipline: "100 m", rank: 5 },
  { person: "Jamie Test", competitionSet: "WK", year: 2022, discipline: "200 m", rank: 11 },
  { person: "Jamie Test", competitionSet: "Olympische Spelen", year: 2021, discipline: "200 m", rank: 29 },
  { person: "Jamie Test", competitionSet: "EK", year: 2020, discipline: "400 m", rank: 45 },
  { person: "Jamie Test", competitionSet: "World Cup", year: 2019, discipline: "400 m", rank: 8 },
  { person: "Jamie Test", competitionSet: "WK", year: 2018, discipline: "100 m", rank: 6 },
  { person: "Jamie Test", competitionSet: "EK", year: 2017, discipline: "200 m", rank: 13 },
  { person: "Jamie Test", competitionSet: "Olympische Spelen", year: 2016, discipline: "400 m", rank: 2 },
  { person: "Jamie Test", competitionSet: "WK", year: 2015, discipline: "100 m", rank: 3 },
  { person: "Taylor Demo", competitionSet: "World Cup", year: 2024, discipline: "200 m", rank: 3 },
  { person: "Taylor Demo", competitionSet: "EK", year: 2023, discipline: "200 m", rank: 1 },
  { person: "Taylor Demo", competitionSet: "Olympische Spelen", year: 2022, discipline: "400 m", rank: 5 },
  { person: "Taylor Demo", competitionSet: "WK", year: 2021, discipline: "400 m", rank: 11 },
  { person: "Taylor Demo", competitionSet: "World Cup", year: 2020, discipline: "100 m", rank: 29 },
  { person: "Taylor Demo", competitionSet: "EK", year: 2019, discipline: "100 m", rank: 45 },
  { person: "Taylor Demo", competitionSet: "WK", year: 2018, discipline: "200 m", rank: 8 },
  { person: "Taylor Demo", competitionSet: "Olympische Spelen", year: 2017, discipline: "400 m", rank: 6 },
  { person: "Taylor Demo", competitionSet: "World Cup", year: 2016, discipline: "100 m", rank: 13 },
  { person: "Taylor Demo", competitionSet: "WK", year: 2015, discipline: "400 m", rank: 2 }
];

function getFilteredPerformances(rows, person, competitionSets, disciplines = []) {
  return rows
    .filter((row) => row.person === person)
    .filter((row) => competitionSets.length === 0 || competitionSets.includes(row.competitionSet))
    .filter((row) => disciplines.length === 0 || disciplines.includes(row.discipline))
    .slice()
    .sort((a, b) => a.rank - b.rank || b.year - a.year || a.competitionSet.localeCompare(b.competitionSet) || a.discipline.localeCompare(b.discipline))
    .map((row, index) => ({ ...row, resultNumber: index + 1 }));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { performances, getFilteredPerformances };
}

if (typeof document !== "undefined") {
  const people = [...new Set(performances.map((row) => row.person))].sort();
  const competitions = [...new Set(performances.map((row) => row.competitionSet))].sort((a, b) => {
    const order = ["Olympische Spelen", "WK", "EK", "World Cup"];
    return order.indexOf(a) - order.indexOf(b);
  });
  const personSelect = document.querySelector("#person-select");
  const options = document.querySelector("#competition-options");
  const disciplineOptions = document.querySelector("#discipline-options");
  const results = document.querySelector("#results-container");
  const summary = document.querySelector("#result-summary");

  people.forEach((person) => {
    const option = document.createElement("option");
    option.value = person;
    option.textContent = person;
    personSelect.append(option);
  });

  competitions.forEach((competition, index) => {
    const label = document.createElement("label");
    label.className = "checkbox-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = competition;
    input.id = `competition-${index}`;
    input.addEventListener("change", render);
    const text = document.createElement("span");
    text.textContent = competition;
    label.append(input, text);
    options.append(label);
  });

  [...new Set(performances.map((row) => row.discipline))].sort().forEach((discipline, index) => {
    const label = document.createElement("label");
    label.className = "checkbox-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = discipline;
    input.id = `discipline-${index}`;
    input.addEventListener("change", render);
    const text = document.createElement("span");
    text.textContent = discipline;
    label.append(input, text);
    disciplineOptions.append(label);
  });

  function render() {
    const selected = [...options.querySelectorAll("input:checked")].map((input) => input.value);
    const selectedDisciplines = [...disciplineOptions.querySelectorAll("input:checked")].map((input) => input.value);
    const rows = getFilteredPerformances(performances, personSelect.value, selected, selectedDisciplines);
    results.replaceChildren();
    summary.textContent = `${rows.length} ${rows.length === 1 ? "prestatie" : "prestaties"}`;
    if (!rows.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Geen prestaties gevonden voor deze selectie. Pas de filters aan.";
      results.append(empty);
      return;
    }

    const table = document.createElement("table");
    table.innerHTML = "<thead><tr><th scope=\"col\">Resultaat</th><th scope=\"col\">Rank</th><th scope=\"col\">Competitiegroep</th><th scope=\"col\">Jaar</th><th scope=\"col\">Discipline</th></tr></thead>";
    const body = document.createElement("tbody");
    rows.forEach((row) => {
      const tr = document.createElement("tr");
      const resultNumber = document.createElement("td");
      resultNumber.className = "result-number-cell";
      resultNumber.textContent = String(row.resultNumber);
      const rank = document.createElement("td");
      rank.className = "rank-cell";
      rank.textContent = String(row.rank);
      const competition = document.createElement("td");
      competition.textContent = row.competitionSet;
      const year = document.createElement("td");
      year.textContent = String(row.year);
      const discipline = document.createElement("td");
      discipline.textContent = row.discipline;
      tr.append(resultNumber, rank, competition, year, discipline);
      body.append(tr);
    });
    table.append(body);
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrap";
    wrapper.append(table);
    results.append(wrapper);
  }

  personSelect.addEventListener("change", render);
  document.querySelector("#clear-filters").addEventListener("click", () => {
    options.querySelectorAll("input").forEach((input) => { input.checked = false; });
    disciplineOptions.querySelectorAll("input").forEach((input) => { input.checked = false; });
    render();
  });
  render();
}
