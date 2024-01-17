import path from "path";
import { describe, it, expect } from "vitest";
import getWordFrequencyInFolder from "../getWordFrequencyInFolder";

const FOLDERS = [1];

const expectedResults: Record<string, number>[] = [
  { man: 6, truth: 6, acknowledged: 3, considered: 3, daughters: 3 },
];

describe("getWordFrequencyInFolder", () => {
  it.each(FOLDERS)(
    "should return the correct word frequencies when given folder %s",
    async (folder) => {
      const result = await getWordFrequencyInFolder(
        path.join(__dirname, `./data/${folder}`),
        5
      );

      console.log(`Folder: ${folder}`);
      console.log(result);

      expect(result).toEqual(expectedResults[folder - 1]);
    }
  );
});
