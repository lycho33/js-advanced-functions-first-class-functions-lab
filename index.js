// Code your solution in this file!
// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0, 2)
// }

// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(-2)
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(ride) {
//     return function multiplyFare(fare) {
//         return ride * fare
//     }
// }

// const fareDoubler = createFareMultiplier(2) //2 = fare ---- fareDoubler(10) -> 10 = ride --> ride * fare = 10 * 2
// const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = function(arrayOfDrivers, selectFunctions) {
//   return selectFunctions(arrayOfDrivers)
//   //selectFunctions = returnFirstTwoDriver + retrunLastTwoDrivers
// }

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer){
    return function(fare){
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, selectFunctions) {
  return selectFunctions(arrayOfDrivers)
  selectFunctions = returnFirstTwoDrivers + retrunLastTwoDrivers
}