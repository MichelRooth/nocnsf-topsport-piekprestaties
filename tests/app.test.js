const test = require("node:test");
const assert = require("node:assert/strict");
const { performances, getFilteredPerformances } = require("../src/app.js");

test("fictieve dataset dekt alle vier competitiegroepen", () => {
  assert.deepEqual(
    [...new Set(performances.map((row) => row.competitionSet))].sort(),
    ["EK", "Olympische Spelen", "WK", "World Cup"].sort()
  );
});

test("vijf fictieve sporters hebben elk tien prestaties", () => {
  assert.equal(new Set(performances.map((row) => row.person)).size, 5);
  for (const person of new Set(performances.map((row) => row.person))) {
    assert.equal(performances.filter((row) => row.person === person).length, 10);
  }
  assert.ok(performances.some((row) => row.rank >= 45 && row.rank <= 80));
});

test("persoonfilter toont uitsluitend prestaties van die persoon", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  assert.equal(rows.length, 10);
  assert.ok(rows.every((row) => row.person === "Alex Voorbeeld"));
});

test("een en meerdere competitiefilters werken als combinatie van groepen", () => {
  assert.deepEqual(getFilteredPerformances(performances, "Alex Voorbeeld", ["EK"]).map((row) => row.competitionSet), ["EK", "EK", "EK"]);
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", ["EK", "WK"]);
  assert.equal(rows.length, 6);
  assert.ok(rows.every((row) => ["EK", "WK"].includes(row.competitionSet)));
});

test("rang sorteert oplopend en gelijke rang blijft behouden", () => {
  const rows = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  assert.deepEqual(rows.map((row) => row.rank), [1, 2, 2, 3, 3, 4, 5, 6, 29, 45]);
  assert.equal(rows.filter((row) => row.rank === 2).length, 2);
  assert.deepEqual(rows.map((row) => row.resultNumber), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("resultaatnummer telt opnieuw binnen de geselecteerde discipline", () => {
  const allDisciplines = getFilteredPerformances(performances, "Alex Voorbeeld", []);
  const disciplineRows = getFilteredPerformances(performances, "Alex Voorbeeld", [], ["200 m"]);
  assert.equal(allDisciplines.find((row) => row.competitionSet === "EK" && row.year === 2022).resultNumber, 4);
  assert.deepEqual(disciplineRows.map((row) => row.resultNumber), [1, 2, 3]);
  assert.ok(disciplineRows.every((row) => row.discipline === "200 m"));
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
