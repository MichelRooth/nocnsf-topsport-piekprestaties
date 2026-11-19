/* Alleen zelfgemaakte fictieve voorbeelden. Geen externe data of import. */
const sportGroups = [
  {
    sport: "Wielrennen",
    people: ["Alex Voorbeeld", "Robin Demo", "Sam Fictief", "Jamie Test", "Taylor Demo"],
    disciplines: ["tijdrit", "wegrace"]
  },
  {
    sport: "Zwemmen",
    people: ["Avery Fictief", "Bo Demo", "Casey Voorbeeld", "Drew Test", "Emery Demo"],
    disciplines: ["100m vrije slag", "100m rugslag", "200m vrije slag", "200m wisselslag"]
  },
  {
    sport: "Atletiek",
    people: ["Frankie Voorbeeld", "Gray Fictief", "Harper Demo", "Indy Test", "Jules Voorbeeld"],
    disciplines: ["100m", "200m", "400m", "800m"]
  }
];
const rankPattern = [2, 1, 3, 4, 2, 3, 5, 6, 29, 45];
const yearPattern = [2024, 2024, 2023, 2022, 2021, 2021, 2020, 2019, 2016, 2016];
const competitionPattern = ["Olympische Spelen", "WK", "EK", "World Cup", "Olympische Spelen", "EK", "WK", "World Cup", "EK", "Olympische Spelen"];
const performances = sportGroups.flatMap(({ sport, people, disciplines }) =>
  people.flatMap((person, personIndex) =>
    rankPattern.map((rank, index) => ({
      person,
      sport,
      competitionSet: competitionPattern[index],
      year: yearPattern[index],
      discipline: disciplines[(index + personIndex) % disciplines.length],
      rank
    }))
  )
);
function getFilteredPerformances(rows, person, competitionSets = [], disciplines = [], sports = [], years = []) {
  return rows
    .filter((row) => row.person === person)
    .filter((row) => sports.length === 0 || sports.includes(row.sport))
    .filter((row) => competitionSets.length === 0 || competitionSets.includes(row.competitionSet))
    .filter((row) => disciplines.length === 0 || disciplines.includes(row.discipline))
    .filter((row) => years.length === 0 || years.includes(row.year))
    .slice()
    .sort((a, b) => a.rank - b.rank || b.year - a.year || a.competitionSet.localeCompare(b.competitionSet) || a.discipline.localeCompare(b.discipline))
    .map((row, _index, sortedRows) => ({
      ...row,
      resultNumber: sortedRows.findIndex((candidate) => candidate.rank === row.rank) + 1
    }));
}

function getSortedPerformances(rows, sortKey = "rank", direction = "asc") {
  const multiplier = direction === "desc" ? -1 : 1;
  return rows
    .map((row, rankOrder) => ({ row, rankOrder }))
    .sort((a, b) => {
      const valueA = sortKey === "piekprestatie" ? a.row.resultNumber : a.row[sortKey];
      const valueB = sortKey === "piekprestatie" ? b.row.resultNumber : b.row[sortKey];
      const primary = typeof valueA === "number"
        ? valueA - valueB
        : String(valueA).localeCompare(String(valueB), "nl");
      return primary * multiplier || a.rankOrder - b.rankOrder;
    })
    .map(({ row }) => row);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { performances, getFilteredPerformances, getSortedPerformances };
}

if (typeof document !== "undefined") {
  const people = [...new Set(performances.map((row) => row.person))].sort();
  const sports = [...new Set(performances.map((row) => row.sport))].sort();
  const years = [...new Set(performances.map((row) => row.year))].sort((a, b) => b - a);
  const competitions = [...new Set(performances.map((row) => row.competitionSet))].sort((a, b) => {
    const order = ["Olympische Spelen", "WK", "EK", "World Cup"];
    return order.indexOf(a) - order.indexOf(b);
  });
  const personSelect = document.querySelector("#person-select");
  const options = document.querySelector("#competition-options");
  const sportOptions = document.querySelector("#sport-options");
  const yearOptions = document.querySelector("#year-options");
  const disciplineOptions = document.querySelector("#discipline-options");
  const results = document.querySelector("#results-container");
  const summary = document.querySelector("#result-summary");
  let sortKey = "rank";
  let sortDirection = "asc";

  people.forEach((person) => {
    const option = document.createElement("option");
    option.value = person;
    option.textContent = person;
    personSelect.append(option);
  });

  function addCheckboxOptions(values, container, idPrefix) {
    values.forEach((value, index) => {
      const label = document.createElement("label");
      label.className = "checkbox-option";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = String(value);
      input.id = `${idPrefix}-${index}`;
      input.addEventListener("change", render);
      const text = document.createElement("span");
      text.textContent = String(value);
      label.append(input, text);
      container.append(label);
    });
  }

  addCheckboxOptions(sports, sportOptions, "sport");
  addCheckboxOptions(years, yearOptions, "year");

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

  addCheckboxOptions([...new Set(performances.map((row) => row.discipline))].sort(), disciplineOptions, "discipline");

  function render() {
    const selected = [...options.querySelectorAll("input:checked")].map((input) => input.value);
    const selectedDisciplines = [...disciplineOptions.querySelectorAll("input:checked")].map((input) => input.value);
    const selectedSports = [...sportOptions.querySelectorAll("input:checked")].map((input) => input.value);
    const selectedYears = [...yearOptions.querySelectorAll("input:checked")].map((input) => Number(input.value));
    const filteredRows = getFilteredPerformances(performances, personSelect.value, selected, selectedDisciplines, selectedSports, selectedYears);
    const rows = getSortedPerformances(filteredRows, sortKey, sortDirection);
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
    const columns = [
      { key: "piekprestatie", label: "Piekprestatie" },
      { key: "rank", label: "Rank" },
      { key: "competitionSet", label: "CompetitieSet" },
      { key: "year", label: "Jaar" },
      { key: "sport", label: "Sport" },
      { key: "discipline", label: "Discipline" }
    ];
    const head = document.createElement("thead");
    const headerRow = document.createElement("tr");
    columns.forEach(({ key, label }) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.setAttribute("aria-sort", sortKey === key ? (sortDirection === "asc" ? "ascending" : "descending") : "none");
      const button = document.createElement("button");
      button.className = "sort-button";
      button.type = "button";
      button.textContent = `${label}${sortKey === key ? (sortDirection === "asc" ? " ↑" : " ↓") : ""}`;
      button.setAttribute("aria-label", `Sorteer op ${label}${sortKey === key ? (sortDirection === "asc" ? ", oplopend" : ", aflopend") : ""}`);
      button.addEventListener("click", () => {
        if (sortKey === key) sortDirection = sortDirection === "asc" ? "desc" : "asc";
        else {
          sortKey = key;
          sortDirection = "asc";
        }
        render();
      });
      th.append(button);
      headerRow.append(th);
    });
    head.append(headerRow);
    table.append(head);
    const body = document.createElement("tbody");
    rows.forEach((row) => {
      const tr = document.createElement("tr");
      const resultNumber = document.createElement("td");
      resultNumber.className = "result-number-cell";
      resultNumber.textContent = String(row.resultNumber);
      const rank = document.createElement("td");
      rank.className = "rank-cell";
      rank.textContent = String(row.rank);
      const sport = document.createElement("td");
      sport.textContent = row.sport;
      const competition = document.createElement("td");
      competition.textContent = row.competitionSet;
      const year = document.createElement("td");
      year.textContent = String(row.year);
      const discipline = document.createElement("td");
      discipline.textContent = row.discipline;
      tr.append(resultNumber, rank, competition, year, sport, discipline);
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
    [options, sportOptions, yearOptions, disciplineOptions].forEach((container) => {
      container.querySelectorAll("input").forEach((input) => { input.checked = false; });
    });
    render();
  });
  render();
}
