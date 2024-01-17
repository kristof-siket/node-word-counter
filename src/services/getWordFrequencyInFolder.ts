import fs from "fs";
import getWordFrequencyInFile from "./getWordFrequencyInFile";
import path from "path";
import mergeAndSumObjects from "../utils/mergeAndSumObjects";

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
