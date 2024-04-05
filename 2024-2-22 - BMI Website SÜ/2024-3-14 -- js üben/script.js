function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}
date1 = new date(2013, 11, 24);
return date1.timeForMilkAndCookies(); // true