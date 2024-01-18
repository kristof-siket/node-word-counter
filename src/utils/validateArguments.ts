import fs from "fs";

const validateArguments = (args: any[]) => {
  // Check if the first argument is a valid directory
  if (!fs.existsSync(args[0])) {
    throw new Error(`"${args[0]}" is not a valid directory.`);
  }

  // Check if the second argument is a valid number
  if (isNaN(Number(args[1]))) {
    throw new Error(`"${args[1]}" is not a valid number.`);
  }
};

export default validateArguments;
