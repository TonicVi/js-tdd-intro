const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });
  it("transforms javaScript correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
  });
  it("works with a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters("z"), "Z");
  });
  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
  it("transforms get to the chopper correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("get to the chopper"),
      "Get To The Chopper"
    );
  });
});
