// get the value of A to return 1

export function calculateScrabbleScore(word) {
  if (
    word === "A" ||
    word === "I" ||
    word === "L" ||
    word === "N" ||
    word === "O" ||
    word === "R" ||
    word === "S" ||
    word === "T" ||
    word === "U"
  ) {
    return 1;
  }
  if (word === "D" || word === "G") {
    return 2;
  }
  if (word === "" || word === "") {
    return 2;
}
