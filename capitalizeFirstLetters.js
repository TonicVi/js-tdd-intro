function capitalizeFirstLetters(input) {
  let words = "";
  return (words = input
    .split(" ")
    .map(w => w.substring(0, 1).toUpperCase() + w.substring(1))
    .join(" "));
}

module.exports = capitalizeFirstLetters;
