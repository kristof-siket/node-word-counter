// Unit tests for getWordFrequencyMap

import getWordFrequencyMap from "../getWordFrequencyMap";
import { describe, expect, it } from "vitest";

describe("getWordFrequencyMap", () => {
  it("should return an empty object when given an empty string", async () => {
    const result = await getWordFrequencyMap("");
    expect(result).toEqual({});
  });

  it("should return an empty object when given a string with only common words", async () => {
    const result = await getWordFrequencyMap("the a and", 5);
    expect(result).toEqual({});
  });

  it("should return an empty object when given a string with only short words", async () => {
    const result = await getWordFrequencyMap(
      "a b c d e f g h i j k l m n o p q r s t u v w x y z",
      5
    );
    expect(result).toEqual({});
  });

  it("should return a map of word frequencies when given a string with words of various lengths", async () => {
    const result = await getWordFrequencyMap(
      "the quick brown fox jumps over the lazy dog",
      5
    );
    expect(result).toEqual({
      brown: 1,
      fox: 1,
      jumps: 1,
      lazy: 1,
      dog: 1,
    });
  });

  it("should return a map of word frequencies when given a string with words of various lengths and mixed case", async () => {
    const result = await getWordFrequencyMap(
      `In a hole in the ground there lived a hobbit.
        The hobbit was fond of adventures.
        Adventures are not always comfortable, but they are necessary.`,
      4
    );
    expect(result).toEqual({
      hobbit: 2,
      adventures: 2,
      comfortable: 1,
      fond: 1,
    });
  });
});
