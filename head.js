
const assertEqual = require("./assertEqual");

let head = function(array) {
  return array[0];
};
  
assertEqual(head([5,6,7]), 5);


module.exports = head;
  

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");












