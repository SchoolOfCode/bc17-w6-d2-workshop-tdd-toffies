import { calculateScrabbleScore } from "./scrabble-score.js";
import { test, expect } from "vitest";

// pass the word A into the function and then assign it a value for that A word
test('A', () => {
    expect(calculateScrabbleScore('A')).toEqual(1);
});