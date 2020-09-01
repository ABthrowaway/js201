/*jshint esversion: 6 */
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

var isVowel = (letter) => {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
    default: false,
  };
  return vowels[letter] || vowels["default"];
};

console.log(isVowel({ e: "Elephant" }));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false

var isEven = (num) => {
  if (Number.isInteger(num) && num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(100.1));

var isOdd = (num) => {
  if (Number.isInteger(num) && num % 2 != 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isOdd(101));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
// Hint 3: Can you find this data online in JSON format? How might that be helpful?
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false

var isCapitalCity = (state, city) => {
  let stateData = [
    {
      name: "Alabama",
      capital: "Montgomery",
      lat: "32.361538",
      long: "-86.279118",
    },
    {
      name: "Alaska",
      capital: "Juneau",
      lat: "58.301935",
      long: "-134.419740",
    },
    {
      name: "Arizona",
      capital: "Phoenix",
      lat: "33.448457",
      long: "-112.073844",
    },
    {
      name: "Arkansas",
      capital: "Little Rock",
      lat: "34.736009",
      long: "-92.331122",
    },
    {
      name: "California",
      capital: "Sacramento",
      lat: "38.555605",
      long: "-121.468926",
    },
    {
      name: "Colorado",
      capital: "Denver",
      lat: "39.7391667",
      long: "-104.984167",
    },
    {
      name: "Connecticut",
      capital: "Hartford",
      lat: "41.767",
      long: "-72.677",
    },
    {
      name: "Delaware",
      capital: "Dover",
      lat: "39.161921",
      long: "-75.526755",
    },
    {
      name: "Florida",
      capital: "Tallahassee",
      lat: "30.4518",
      long: "-84.27277",
    },
    {
      name: "Georgia",
      capital: "Atlanta",
      lat: "33.76",
      long: "-84.39",
    },
    {
      name: "Hawaii",
      capital: "Honolulu",
      lat: "21.30895",
      long: "-157.826182",
    },
    {
      name: "Idaho",
      capital: "Boise",
      lat: "43.613739",
      long: "-116.237651",
    },
    {
      name: "Illinois",
      capital: "Springfield",
      lat: "39.783250",
      long: "-89.650373",
    },
    {
      name: "Indiana",
      capital: "Indianapolis",
      lat: "39.790942",
      long: "-86.147685",
    },
    {
      name: "Iowa",
      capital: "Des Moines",
      lat: "41.590939",
      long: "-93.620866",
    },
    {
      name: "Kansas",
      capital: "Topeka",
      lat: "39.04",
      long: "-95.69",
    },
    {
      name: "Kentucky",
      capital: "Frankfort",
      lat: "38.197274",
      long: "-84.86311",
    },
    {
      name: "Louisiana",
      capital: "Baton Rouge",
      lat: "30.45809",
      long: "-91.140229",
    },
    {
      name: "Maine",
      capital: "Augusta",
      lat: "44.323535",
      long: "-69.765261",
    },
    {
      name: "Maryland",
      capital: "Annapolis",
      lat: "38.972945",
      long: "-76.501157",
    },
    {
      name: "Massachusetts",
      capital: "Boston",
      lat: "42.2352",
      long: "-71.0275",
    },
    {
      name: "Michigan",
      capital: "Lansing",
      lat: "42.7335",
      long: "-84.5467",
    },
    {
      name: "Minnesota",
      capital: "Saint Paul",
      lat: "44.95",
      long: "-93.094",
    },
    {
      name: "Mississippi",
      capital: "Jackson",
      lat: "32.320",
      long: "-90.207",
    },
    {
      name: "Missouri",
      capital: "Jefferson City",
      lat: "38.572954",
      long: "-92.189283",
    },
    {
      name: "Montana",
      capital: "Helana",
      lat: "46.595805",
      long: "-112.027031",
    },
    {
      name: "Nebraska",
      capital: "Lincoln",
      lat: "40.809868",
      long: "-96.675345",
    },
    {
      name: "Nevada",
      capital: "Carson City",
      lat: "39.160949",
      long: "-119.753877",
    },
    {
      name: "New Hampshire",
      capital: "Concord",
      lat: "43.220093",
      long: "-71.549127",
    },
    {
      name: "New Jersey",
      capital: "Trenton",
      lat: "40.221741",
      long: "-74.756138",
    },
    {
      name: "New Mexico",
      capital: "Santa Fe",
      lat: "35.667231",
      long: "-105.964575",
    },
    {
      name: "New York",
      capital: "Albany",
      lat: "42.659829",
      long: "-73.781339",
    },
    {
      name: "North Carolina",
      capital: "Raleigh",
      lat: "35.771",
      long: "-78.638",
    },
    {
      name: "North Dakota",
      capital: "Bismarck",
      lat: "48.813343",
      long: "-100.779004",
    },
    {
      name: "Ohio",
      capital: "Columbus",
      lat: "39.962245",
      long: "-83.000647",
    },
    {
      name: "Oklahoma",
      capital: "Oklahoma City",
      lat: "35.482309",
      long: "-97.534994",
    },
    {
      name: "Oregon",
      capital: "Salem",
      lat: "44.931109",
      long: "-123.029159",
    },
    {
      name: "Pennsylvania",
      capital: "Harrisburg",
      lat: "40.269789",
      long: "-76.875613",
    },
    {
      name: "Rhode Island",
      capital: "Providence",
      lat: "41.82355",
      long: "-71.422132",
    },
    {
      name: "South Carolina",
      capital: "Columbia",
      lat: "34.000",
      long: "-81.035",
    },
    {
      name: "South Dakota",
      capital: "Pierre",
      lat: "44.367966",
      long: "-100.336378",
    },
    {
      name: "Tennessee",
      capital: "Nashville",
      lat: "36.165",
      long: "-86.784",
    },
    {
      name: "Texas",
      capital: "Austin",
      lat: "30.266667",
      long: "-97.75",
    },
    {
      name: "Utah",
      capital: "Salt Lake City",
      lat: "40.7547",
      long: "-111.892622",
    },
    {
      name: "Vermont",
      capital: "Montpelier",
      lat: "44.26639",
      long: "-72.57194",
    },
    {
      name: "Virginia",
      capital: "Richmond",
      lat: "37.54",
      long: "-77.46",
    },
    {
      name: "Washington",
      capital: "Olympia",
      lat: "47.042418",
      long: "-122.893077",
    },
    {
      name: "West Virginia",
      capital: "Charleston",
      lat: "38.349497",
      long: "-81.633294",
    },
    {
      name: "Wisconsin",
      capital: "Madison",
      lat: "43.074722",
      long: "-89.384444",
    },
    {
      name: "Wyoming",
      capital: "Cheyenne",
      lat: "41.145548",
      long: "-104.802042",
    },
  ];

  return stateData.some(
    (element) =>
      element.name.toLowerCase() == state.toLowerCase() &&
      element.capital.toLowerCase() == city.toLowerCase()
  );
};

console.log(isCapitalCity("Texas", "Houston"));
