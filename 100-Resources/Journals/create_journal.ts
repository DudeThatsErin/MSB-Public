import fs from "fs/promises";
import { dirname } from "path";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_MS = 24 * 60 * 60 * 1000;
const CURRENT_DATE = new Date().toISOString().split("T").at(0);

const jan1 = Date.parse("2025-01-01");
const calendar = Array.from(
  { length: 366 },
  (_, i) => new Date(jan1 + i * DAY_MS),
);

function padTwoDigits(number: number) {
  return String(number).padStart(2, "0");
}

function formatDate(date: Date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

function capitalize(string: string) {
  return string.length > 0 ? string.at(0)!.toUpperCase() + string.slice(1) : "";
}

function buildDailyNote(date: Date) {
  const prevDate = new Date(date.valueOf() - 1 * DAY_MS);
  const nextDate = new Date(date.valueOf() + 1 * DAY_MS);
  const prevMonth = padTwoDigits(prevDate.getMonth() + 1);
  const nextMonth = padTwoDigits(nextDate.getMonth() + 1);
  const path = `${padTwoDigits(date.getMonth() + 1)} - ${MONTHS[date.getMonth()]}/${formatDate(date)}.md`;
  const quarter = 1 + Math.floor(date.getMonth() / 3);
  const monthName = capitalize(MONTHS[date.getMonth()]);
  // Use date to format CURRENT_DATE for the daily note content
  const currentNoteDate = date.toISOString().split("T").at(0);

  return {
    path,
    content: `---
date: ${currentNoteDate}
tags:
    - journal
cssclasses:
banner: blue waves
banner-y: 30
content-start: 275
banner-repeat: false
banner-height: 350
banner-fade: -100
banner-radius: 10
banner-inline-title-color: "#12345678"
---

[[Journal/Q${quarter}|Q${quarter}]] • [[Journal/${padTwoDigits(date.getMonth() + 1)}/${monthName}|${monthName}]] • [[Journal/${prevMonth}/${formatDate(prevDate)}|<<]] • [[Journal/${nextMonth}/${formatDate(nextDate)}|>>]]

# ${date.getFullYear()} - TIME`,
  };
}

for (const date of calendar) {
  const dailyNote = buildDailyNote(date);

  // Ensure the directory exists
  await fs.mkdir(dirname(dailyNote.path), { recursive: true });

  // Write the file
  await fs.writeFile(dailyNote.path, dailyNote.content);
}