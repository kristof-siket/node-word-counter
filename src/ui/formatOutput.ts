const formatOutput = (
  wordMap: Record<string, number>,
  n: number,
  dir: string
) => {
  const output = `Top ${n} words in ${dir}:\n\n${Object.entries(wordMap)
    .map((entry, index) => `${index + 1}. ${entry[0]}: ${entry[1]}`)
    .join("\n")}`;
  return output;
};

export default formatOutput;
