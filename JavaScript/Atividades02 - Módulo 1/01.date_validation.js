function isValidDate(year, month, day) {
    if (month < 1 || month > 12) {
        return false;
    }

    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        monthDays[1] = 29;
    }

    if(day < 1 || day > monthDays[month -1]) {
        return false;
    }

    return true;
}

console.log(isValidDate(1991, 12, 25));
