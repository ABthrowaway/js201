/*jshint esversion: 6 */
// Write a function 'madlib', which is given a name and a subject.
// It should return a new string: (name)'s favorite subject in school is (subject).
// Example: madlib('Anushka', 'art') should return "Anushka's favorite subject in school is art."

var madlib = (name, subject) =>
  `${name}'s favorite subject in school is ${subject}`;

console.log(madlib("Andrew", "History"));
