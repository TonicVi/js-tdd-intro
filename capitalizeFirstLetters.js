const assert = require("assert");

function capitalizeFirstLetters(input) {
    return input
    .split(' ')
    .map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1))
    .join(' ')
}


assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters("lalala"), "Lalala");

assert.strictEqual(
  capitalizeFirstLetters("get to the chopper"),
  "Get To The Chopper"
);

assert.strictEqual(capitalizeFirstLetters("z"), "Z");

assert.strictEqual(capitalizeFirstLetters(""), "");
