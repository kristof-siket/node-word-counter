import { COMMON_ENGLISH_WORDS } from "../utils/contants";

/**
 * Returns a map of the top n most frequently used words in the given text. Note: this assumes that the entire text is loaded.
 * @param text The text to analyze.
 * @param n The number of words to return.
 */
const getWordFrequencyMap = async (text: string, n?: number) => {
  const words =
    text
      .toLocaleLowerCase()
      .match(/\b\w+\b/g)
      ?.filter(
        (word) => !COMMON_ENGLISH_WORDS.includes(word) && !(word.length < 3)
      ) || [];

  const wordCount: Record<string, number> = {};

  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  // Sort wordCount by value
  const sorted = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    // sort alphabetically if values are equal
    .sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : 0))
    .slice(0, n);

  // Return the top n words
  return Object.fromEntries(sorted);
};

export default getWordFrequencyMap;
