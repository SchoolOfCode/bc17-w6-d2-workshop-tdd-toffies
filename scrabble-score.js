// get the value of A to return 1

// export function calculateScrabbleScore(word) {
//   if (
//     word === "A" ||
//     word === "I" ||
//     word === "L" ||
//     word === "N" ||
//     word === "O" ||
//     word === "R" ||
//     word === "S" ||
//     word === "T" ||
//     word === "U"
//   ) {
//     return 1;
//   }
//   if (word === "D" || word === "G") {
//     return 2;
//   }
//   if (word === "" || word === "") {
//     return 2;
// }};

export function calculateScrabbleScore(word) {
    // find length of word
    const wordLength = word.length;
    // define val of each letter
    const letterValues = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26 };

    // loop through each letter of word,  
    let wordScore = 0;
    for (let i = 0; i < wordLength; i++) {
        const letter = word[i]
        wordScore += letterValues[letter] //SUM each val of each letter and return
    }
    return wordScore;
};
