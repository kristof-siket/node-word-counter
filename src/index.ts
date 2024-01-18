#!/usr/bin/env node

import { Command } from "commander";
import showTitle from "./ui/showTitle";
import packageJson from "../package.json";
import getWordFrequencyInFolder from "./services/getWordFrequencyInFolder";

// App title
showTitle();

// Set up main command
const app = new Command();

app
  .name(packageJson.name)
  .version(packageJson.version)
  .description(packageJson.description)
  .arguments("<command> [dir] [num_of_words]")
  .parse(process.argv);

// Parse first two args (rest are ignored)
const [dir, numOfWords] = app.args;

// Log the args
console.log(`You passed in ${dir} and ${numOfWords}. Counting words...`);

// Load directory
getWordFrequencyInFolder(dir, Number(numOfWords))
  .then((result) => {
    // Log a friendly success message with some emoji
    console.log(
      `🎉 Done! Here are the top ${numOfWords} most frequently used words in ${dir}:`
    );
    console.log(result);
  })
  .catch((err) => {
    // Log a supportive error message with some emoji
    console.log(`😢 Oops! Something went wrong.`);
    console.error(err);
  });

//
