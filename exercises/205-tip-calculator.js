/*jshint esversion: 6 */
// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

// var tipAmount = (billAmount, levelOfService) => {
//   switch (levelOfService) {
//     case "good":
//       return billAmount * 0.2;
//       break;
//     case "fair":
//       return billAmount * 0.15;
//       break;
//     case "poor":
//       return billAmount * 0.1;
//       break;
//     default:
//       return "Invalid level of service entered";
//       break;
//   }
// };

var tipAmount = (billAmount, levelOfService) =>
  ({
    good: billAmount * 0.2,
    fair: billAmount * 0.15,
    poor: billAmount * 0.1,
  }[levelOfService]);

console.log(tipAmount(100, "good"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

var totalAmount = (billAmount, levelOfService) =>
  ({
    good: (billAmount += billAmount * 0.2),
    fair: (billAmount += billAmount * 0.15),
    poor: (billAmount += billAmount * 0.1),
  }[levelOfService]);

console.log(totalAmount(100, "good"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

var splitAmount = (billAmount, levelOfService, numPeople) =>
  ({
    good: (billAmount += billAmount * 0.2) / numPeople,
    fair: (billAmount += billAmount * 0.15) / numPeople,
    poor: (billAmount += billAmount * 0.1) / numPeople,
  }[levelOfService]);

console.log(splitAmount(100, "good", 5));
