import { calculateScrabbleScore } from "./scrabble-score.js";
import { test, expect } from "vitest";

// pass the word A into the function and then assign it a value for that A word
// test('A', () => {
//     expect(calculateScrabbleScore('A')).toEqual(1);
// });

test('multiple letters', () => {
    expect(calculateScrabbleScore('EAT')).toEqual(26);
});

// repeat steps 1-3 for the remaining single letter words (i.e. B, C, D and so forth up to and including Z)
// test.each([
//     ['A', 1],
//     ['B', 3],
//     ['C', 3],
//     ['D', 2],
//     ['E', 1],
//     ['F', 4],
//     ['G', 2],
//     ['H', 4],
//     ['I', 1],
//     ['J', 8],
//     ['K', 5],
//     ['L', 1],
//     ['M', 3],
//     ['N', 1],
//     ['O', 1],
//     ['P', 3],
//     ['Q', 10],
//     ['R', 1],
//     ['S', 1],
//     ['T', 1],
//     ['U', 1],
//     ['V', 4],
//     ['W', 4],
//     ['X', 8],
//     ['Y', 4],
//     ['Z', 10],
// ])('should return the correct score for %s which has a value of %i', (input, expected) => {
//     expect(calculateScrabbleScore(input)).toBe(expected);
//   });
