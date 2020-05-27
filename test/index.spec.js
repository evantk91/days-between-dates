const assert = require('assert')
const { daysBetweenDates, isDateBefore, isLeapYear, daysInMonth, nextDay } = require('../index')

describe("days between examples", () => {
   it("returns the correct number of days between 12/10/2019 and 3/15/2020", () => {
       const date1 = [2019, 12, 10]
       const date2 = [2020, 3, 15]
       const output = 96
       const result = daysBetweenDates(date1, date2)
       assert.equal(result, output) 
   })

   it("returns the correct number of days between 12/10/2019 and 3/15/2021", () => {
       const date1 = [2019, 12, 10]
       const date2 = [2021, 3, 15]
       const output = 461
       const result = daysBetweenDates(date1, date2)
       assert.equal(result, output) 
   }) 
})

describe("is date before examples", () => {
    it("returns true for 12/10/2019 and 3/15/2020", () => {
       const date1 = [2019, 12, 10]
       const date2 = [2020, 3, 15]
       const result = isDateBefore(date1, date2)
       assert.equal(result, true)
    })

    it("returns true for 12/10/2019 and 12/20/2019", () => {
        const date1 = [2019, 12, 10]
        const date2 = [2019, 12, 20]
        const result = isDateBefore(date1, date2)
        assert.equal(result, true)
     })
 })

 describe("is leap year examples", () => {
    it("returns true for 2020", () => {
       const year = 2020
       const result = isLeapYear(year)
       assert.equal(result, true)
    })
 })

 describe("days in month examples", () => {
    it("returns the correct number of days for February 2020", () => {
       const month = 2
       const year = 2020
       const output = 29
       const result = daysInMonth(month, year)
       assert.equal(result, 29)
    })
 })

 describe("next day examples", () => {
    it("returns the next day for 2/29/2020", () => {
       const date = [2020, 2, 29]
       const output = [2020, 3, 1]
       const result = nextDay(date)
       assert.deepEqual(result, output)
    })

    it("returns the next day for 12/31/2019", () => {
        const date = [2019, 12, 31]
        const output = [2020, 1, 1]
        const result = nextDay(date)
        assert.deepEqual(result, output)
     })
 })