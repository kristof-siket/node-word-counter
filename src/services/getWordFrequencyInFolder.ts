import fs from "fs";
import getWordFrequencyInFile from "./getWordFrequencyInFile";
import path from "path";
import mergeAndSumObjects from "../utils/mergeAndSumObjects";

/**
 * Return the number of times each word appears in a folder (only the top n words)
 * @param folderPath Path to the folder
 * @param n Number of words to return
 * @returns A promise that resolves to an object with the top n words and their counts
 */
const getWordFrequencyInFolder = async (folderPath: string, n?: number) => {
  const files = await fs.promises.readdir(folderPath);

  const promises = files.map((file) =>
    getWordFrequencyInFile(path.join(folderPath, file), n)
  );

  // We can run this in parallel as we will merge in the end
  const results = await Promise.all(promises);

  const merged = results.reduce(mergeAndSumObjects, {});

  // Return the words with top n counts
  return Object.fromEntries(
    Object.entries(merged)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
  );
};

export default getWordFrequencyInFolder;
