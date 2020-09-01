/*jshint esversion: 6 */
// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

var numberJoinerWhile = (start, end) => {
  var result = "";
  var count = start;
  while (count <= end) {
    result += count;
    if (count == end) {
      break;
    }
    result += "_";
    count++;
  }
  return result;
};

console.log(numberJoinerWhile(1, 10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

var numberJoinerFor = (start, end) => {
  var result = "";
  for (let i = start; i <= end; i++) {
    result += i;
    if (i == end) {
      break;
    }
    result += "_";
  }
  return result;
};

console.log(numberJoinerFor(1, 10));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

var numberJoinerFancy = (start, end, sep) => {
  var result = "";
  for (let i = start; i <= end; i++) {
    result += i;
    if (i == end) {
      break;
    }
    result += sep;
  }
  return result;
};

console.log(numberJoinerFancy(3, 6, "***BANANAS***"));
