module.exports = {
    daysBetweenDates, 
    isDateBefore,
    isLeapYear,
    daysInMonth,
    nextDay
}

function daysBetweenDates(date1, date2) {
    let days = 0
    while (isDateBefore(date1, date2)) {
        date1 = nextDay(date1)
        days += 1
    } 
    return days
}

function isDateBefore(date1, date2) {
    const year1 = date1[0]
    const month1 = date1[1]
    const day1 = date1[2]
    
    const year2 = date2[0]
    const month2 = date2[1]
    const day2 = date2[2]

    if (year1 < year2) {
        return true
    } else if(year1 === year2) {
        if (month1 < month2) {
            return true
        } else {
            return day1 < day2
        }
    } else {
        return false
    }
}

function isLeapYear(year) {
    if(year % 400 === 0) {
       return true
    } else if(year % 100 === 0) {
       return false
    } else if(year % 4 === 0) {
       return true
    } else {
       return false
    }
 }

 function daysInMonth(month, year) {
     const longMonths = [1, 3, 5, 7, 8, 10, 12]
     if(longMonths.includes(month)) {
         return 31
     } else if(month === 2) {
         if(isLeapYear(year)) {
             return 29
         } else {
             return 28
         }
     } else {
         return 30
     }
 }

 function nextDay(date) {
     let year = date[0]
     let month = date[1]
     let day = date[2]

     if (day < daysInMonth(month, year)) {
         day += 1
     } else {
         if (month < 12) {
             month += 1
             day = 1
         } else {
             year += 1
             month = 1
             day = 1
         }
     }
     return [year, month, day]
 }