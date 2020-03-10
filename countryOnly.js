const assertEqual = require("./assertEqual");


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count



const countOnly = function (allItems, itemsToCount) {

  const results = {}

  for (const name of allItems) {

    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] = +1;
      } else {
        results[name] = 1;
      }

    }
  }

  return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);

assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
