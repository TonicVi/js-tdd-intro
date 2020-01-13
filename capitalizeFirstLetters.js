const assert = require("assert");

function capitalizeFirstLetters(input) {
}
  // let output = "";
  // let words = input.split(" ");
  // console.log(words);
  // if (words.length === 1) {
  //   for (let i = 0; i < input.length; i++) {
  //     if (i === 0) {
  //       output += input[0].toUpperCase();
  //     } else {
  //       output += input[i];
  //     }
  //   }
  //   return output;
  // } else if (words.length > 1) {
  //   for (let i = 0; i < words[i].length; i++) {
  //     console.log(words[i].length)
  //     for (let j = 0; j < words[i][j].length; j++) {
  //       words[i]

  //     }

      // for (let j = 0; j < words[i].length; j++) 
      
      //   if (j === 0) {
      //     output += words[0].toUpperCase();
      //   } else {
      //     output += words[j];
      //   }
      // }}}



assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters("lalala"), "Lalala");

assert.strictEqual(
  capitalizeFirstLetters("get to the chopper"),
  "Get To The Chopper"
);

assert.strictEqual(capitalizeFirstLetters("z"), "Z");

assert.strictEqual(capitalizeFirstLetters(""), "");
