import getWordFrequencyMap from "./getWordFrequencyMap";
import { createReadStream } from "fs";
import { createInterface } from "readline/promises";
import mergeAndSumObjects from "../utils/mergeAndSumObjects";

/**
 * Returns
 * @param filePath
 * @returns
 */
const getWordFrequencyInFile = async (filePath: string, n?: number) => {
  // Read the file line by line
  const stream = createReadStream(filePath, { encoding: "utf-8" });
  const rl = createInterface({ input: stream, crlfDelay: Infinity });
  let endResult: Record<string, number> = {};

  for await (const line of rl) {
    // Parse each line with getWordFrequencyMap
    const lineResult = await getWordFrequencyMap(line, n);

    // Merge: the key existing in both objects should have the sum of the values
    endResult = mergeAndSumObjects(endResult, lineResult);
  }

  return endResult;
};

export default getWordFrequencyInFile;
