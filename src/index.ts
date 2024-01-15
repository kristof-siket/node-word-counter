import { Command } from "commander";
import showTitle from "./ui/showTitle";
import packageJson from "../package.json";

// App title
showTitle();

// Set up main command
const app = new Command();

app
  .version(packageJson.version)
  .description(packageJson.description)
  .arguments("<command> [dir] [num_of_words]")
  .parse(process.argv);

// Parse first two args (rest are ignored)
const [dir, numOfWords] = app.args;

console.log(`You passed in ${dir} and ${numOfWords}.`);
