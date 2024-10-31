/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
  and returns a boolean value indicating whetherit is a weekday or a weekend.
*/

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

export {};
