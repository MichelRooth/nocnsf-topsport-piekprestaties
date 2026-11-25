const test = require("node:test");
const assert = require("node:assert/strict");
const { performances, getFilteredPerformances, getAnalysisPerformances, getAvailableDisciplines, getSortedPerformances } = require("../src/app.js");

test("fictieve dataset dekt alle vier competitiegroepen", () => {
  assert.deepEqual(
    [...new Set(performances.map((row) => row.competitionSet))].sort(),
    ["EK", "Olympische Spelen", "WK", "World Cup"].sort()
  );
});

test("vijftien fictieve sporters hebben elk tien prestaties en zijn verdeeld over drie sporten", () => {
  assert.equal(new Set(performances.map((row) => row.person)).size, 15);
  for (const person of new Set(performances.map((row) => row.person))) {
    assert.equal(performances.filter((row) => row.person === person).length, 10);
  }
  assert.deepEqual([...new Set(performances.map((row) => row.sport))].sort(), ["Atletiek", "Wielrennen", "Zwemmen"]);
  for (const sport of ["Atletiek", "Wielrennen", "Zwemmen"]) {
    assert.equal(new Set(performances.filter((row) => row.sport === sport).map((row) => row.person)).size, 5);
  }
  assert.ok(performances.some((row) => row.rank >= 45 && row.rank <= 80));
});

test("fictieve dataset varieert rangnummers en beperkt eerste en tweede plaatsen", () => {
  assert.equal(performances.filter((row) => row.rank <= 2).length, 6);
  assert.ok(new Set(performances.map((row) => row.rank)).size > 30);
});

test("persoonfilter toont uitsluitend prestaties van die persoon", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  assert.equal(rows.length, 10);
  assert.ok(rows.every((row) => row.person === "Alex Voorbeeld"));
});

test("rangschikking voor een hele sport bevat meerdere sporters en rangt gezamenlijk", () => {
  const rows = getAnalysisPerformances(performances, { scope: "sport", sports: ["Wielrennen"] });
  assert.equal(rows.length, 50);
  assert.equal(new Set(rows.map((row) => row.person)).size, 5);
  assert.equal(rows[0].resultNumber, 1);
  assert.ok(rows.every((row) => row.sport === "Wielrennen"));
  const onePerson = getAnalysisPerformances(performances, { scope: "sport", sports: ["Wielrennen"], people: ["Alex Voorbeeld"] });
  assert.equal(onePerson.length, 10);
  assert.ok(onePerson.every((row) => row.person === "Alex Voorbeeld"));
});

test("disciplinerangschikking combineert resultaten van meerdere sporters en disciplinefilter", () => {
  const rows = getAnalysisPerformances(performances, { scope: "discipline", disciplines: ["tijdrit"] });
  assert.equal(rows.length, 25);
  assert.equal(new Set(rows.map((row) => row.person)).size, 5);
  assert.ok(rows.every((row) => row.discipline === "tijdrit"));
  assert.deepEqual(getAnalysisPerformances(performances, { scope: "discipline" }), []);
});

test("sport-, discipline- en jaarfilters kunnen worden gecombineerd", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", [], ["tijdrit"], ["Wielrennen"], [2024, 2023]);
  assert.equal(rows.length, 2);
  assert.ok(rows.every((row) => row.sport === "Wielrennen" && row.discipline === "tijdrit" && [2024, 2023].includes(row.year)));
});

test("zwemdata gebruikt de vier opgegeven disciplines", () => {
  assert.deepEqual(
    [...new Set(performances.filter((row) => row.sport === "Zwemmen").map((row) => row.discipline))].sort(),
    ["100m vrije slag", "100m rugslag", "200m vrije slag", "200m wisselslag"].sort()
  );
});

test("beschikbare disciplines volgen de geselecteerde sport", () => {
  assert.deepEqual(getAvailableDisciplines(performances, ["Wielrennen"]), ["tijdrit", "wegrace"]);
  assert.deepEqual(getAvailableDisciplines(performances, ["Atletiek"]), ["100m", "200m", "400m", "800m"]);
  assert.deepEqual(getAvailableDisciplines(performances, ["Zwemmen"]), ["100m rugslag", "100m vrije slag", "200m vrije slag", "200m wisselslag"]);
  assert.deepEqual(getAvailableDisciplines(performances), getAvailableDisciplines(performances, ["Atletiek", "Wielrennen", "Zwemmen"]));
});

test("Olympische Spelen komen alleen voor in 2024, 2021 en 2016", () => {
  const olympicYears = [...new Set(performances
    .filter((row) => row.competitionSet === "Olympische Spelen")
    .map((row) => row.year))].sort((a, b) => b - a);
  assert.deepEqual(olympicYears, [2024, 2021, 2016]);
});

test("een sporter kan in hetzelfde jaar meerdere disciplines hebben", () => {
  for (const person of new Set(performances.map((row) => row.person))) {
    const sameYearRows = performances.filter((row) => row.person === person && row.year === 2024);
    assert.equal(sameYearRows.length, 2);
    assert.equal(new Set(sameYearRows.map((row) => row.discipline)).size, 2);
  }
});

test("een en meerdere competitiefilters werken als combinatie van groepen", () => {
  assert.deepEqual(getFilteredPerformances(performances, "Alex Voorbeeld", ["EK"]).map((row) => row.competitionSet), ["EK", "EK", "EK"]);
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", ["EK", "WK"]);
  assert.equal(rows.length, 6);
  assert.ok(rows.every((row) => ["EK", "WK"].includes(row.competitionSet)));
});

test("rang sorteert oplopend en gelijke rang deelt piekprestatie met overgeslagen nummers", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  assert.deepEqual(rows.map((row) => row.rank), [1, 2, 4, 7, 12, 15, 20, 25, 29, 45]);
  assert.deepEqual(rows.map((row) => row.resultNumber), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("kolomsortering verandert de weergavevolgorde maar behoudt piekprestatienummers", () => {
  const rankedRows = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  const byYear = getSortedPerformances(rankedRows, "year", "asc");
  assert.deepEqual(byYear.map((row) => row.year), [2016, 2016, 2019, 2020, 2021, 2021, 2022, 2023, 2024, 2024]);
  assert.deepEqual(byYear.map((row) => row.resultNumber), [9, 10, 8, 7, 2, 6, 5, 4, 1, 3]);
  assert.deepEqual(getSortedPerformances(rankedRows, "rank", "asc").map((row) => row.rank), rankedRows.map((row) => row.rank));
  assert.deepEqual(getSortedPerformances(rankedRows, "competitionSet", "asc").map((row) => row.competitionSet), [
    "EK", "EK", "EK", "Olympische Spelen", "Olympische Spelen", "Olympische Spelen", "WK", "WK", "WK", "World Cup"
  ]);
});

test("gelijke rangen krijgen na filteren hetzelfde piekprestatienummer", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", ["EK"]);
  assert.deepEqual(rows.map((row) => row.rank), [7, 15, 29]);
  assert.deepEqual(rows.map((row) => row.resultNumber), [1, 2, 3]);
});

test("piekprestatienummer telt opnieuw binnen de geselecteerde discipline", () => {
  const allDisciplines = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  const disciplineRows = getFilteredPerformances(performances, "Alex Voorbeeld", [], ["wegrace"]);
  assert.equal(allDisciplines.find((row) => row.competitionSet === "EK" && row.year === 2022).resultNumber, 4);
  assert.deepEqual(disciplineRows.map((row) => row.resultNumber), [1, 2, 3, 4, 5]);
  assert.ok(disciplineRows.every((row) => row.discipline === "wegrace"));
});

test("twee eenmalige disciplines krijgen elk nummer 1, samen nummer 1 en 2", () => {
  const example = [
    { person: "Fictieve Atleet", competitionSet: "EK", year: 2022, discipline: "200 m", rank: 1 },
    { person: "Fictieve Atleet", competitionSet: "EK", year: 2020, discipline: "400 m", rank: 3 }
  ];
  assert.deepEqual(getFilteredPerformances(example, "Fictieve Atleet", []).map((row) => row.resultNumber), [1, 2]);
  assert.deepEqual(getFilteredPerformances(example, "Fictieve Atleet", [], ["200 m"]).map((row) => row.resultNumber), [1]);
  assert.deepEqual(getFilteredPerformances(example, "Fictieve Atleet", [], ["400 m"]).map((row) => row.resultNumber), [1]);
});

test("onbekende persoon geeft een lege selectie", () => {
  assert.deepEqual(getFilteredPerformances(performances, "Onbekend", []), []);
});
