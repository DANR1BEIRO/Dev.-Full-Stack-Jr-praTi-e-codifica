/**
 * Write a program that takes a day of the week as input.
 * If the day is Saturday or Sunday, print "Weekend".
 * Otherwise, print "Weekday".
 */

const DAYS = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
};

const WEEKEND = [DAYS.SUNDAY, DAYS.SATURDAY];

function checkWeekDay(day) {
  console.log(
    WEEKEND.includes(day) 
    ? `${day} is weekend!` 
    : `${day} is weekday!`
  );
}

checkWeekDay(DAYS.SUNDAY); 
checkWeekDay(DAYS.MONDAY); 
