import { describe, expect, it } from "vitest";
import getWordFrequencyInFile from "../getWordFrequencyInFile";
import path from "path";

const FOLDERS = [1];
const FILES = ["a", "b", "c"];

// TODO employ more test data
const expectedResults: Record<string, object>[] = [
  {
    a: { man: 6, truth: 6, acknowledged: 3, considered: 3, daughters: 3 },
    b: { his: 2, quickly: 2, along: 1, april: 1, breast: 1 },
    c: { had: 2, you: 2, advantages: 1, advice: 1, all: 1 },
  },
];

describe.each(FOLDERS)("getWordFrequencyInFile", (folder) => {
  it.each(FILES)(
    `should return ${JSON.stringify(
      expectedResults[folder - 1]
    )} when given ${folder}/%s.txt`,
    async (file) => {
      const lines = await getWordFrequencyInFile(
        path.join(__dirname, `./data/${folder}/${file}.txt`),
        5
      );

      console.log(`Folder: ${folder}, File: ${file}`);
      console.log(expectedResults[folder - 1]);

      expect(lines).toEqual(expectedResults[folder - 1][file]);
    }
  );
});
