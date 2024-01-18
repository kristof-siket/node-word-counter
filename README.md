# WordCounter 📊

Welcome to my Word Counter CLI application! 🚀 This app can do one simple thing: find the "n" most frequently used words in a folder. 

## Quickstart 🏎️

To try this app out, you need to perform the following steps: 

1. Check out the repo.
2. Install the dependencies: `npm i`.
3. Build the app: `npm run build`.
4. Run the built version: `node dist/index.js <folder> <wordCount>`.

If you see any issues popping up during the steps above, maybe you have an incompatibility issue. Here are the Node and NPM versions I used:

- Node.js v20.10.0
- NPM: 10.2.5

An easy test case can be running the following command: 

```
node dist/index.js ./src/services/__tests__/data/1 5
```

Which should generate the following result:

```
🎉 Done! Here are the top 5 most frequently used words in ./src/services/__tests__/data/1:
Top 5 words in ./src/services/__tests__/data/1:

1. man: 6
2. truth: 6
3. acknowledged: 3
4. considered: 3
5. daughters: 3
```

As you can see, paths relative to the calling location are working just fine. Happy testing! 🎉

## Technical Details 🛠️

### Tools and frameworks

This application uses Node.js with TypeScript and the Commander.js framework for building the CLI app. I've also sprinkled in a bit of Figlet (just for the title).

I embraced a test-driven development approach (not strictly by the book, sometimes I wrote a simple chunk of the function before the test). For testing, I chose Vitest, my favorite test framework – it's almost equal to Jest in terms of API but faster, more modern, and compatible with other cool stuff! 🚨

### Algorithm

I tried to implement the requirements in a way that it scales especially in terms of memory usage. That's why, instead of reading the entire file at once, I voted for **reading it line-by-line and merge-summing the results after every line**.

The implementation goes through the following steps:

1. Read the passed directory: load the list of files and call the file parsing function on them (I do this in **parallel** with `Promise.all()`  as the results will be summed in the end).
2. Read the lines of each file: each file parsing is about going through it line-by-line and calling the `getWordFrequencyMap` on each line, then sum-merging the partial results to an accumulator object.
3. Parse the line with a pure function that takes a string as an argument and performs the actual logic.

The algorithm is optimized because it performs reads in parallel, and also doesn't overload the memory because of the line-by-line parsing. One weak point is that a large file can also be a single long line, which would make it slightly less effective. Chunk-by-chunk reading can be an option to solve this, in that case, we have to make sure that the words are not broken on the boundary of each chunk.

Note: the current implementation doesn't go into subfolders recursively. It could be added to the `getWordFrequencyInFolder` quite easily though. 

