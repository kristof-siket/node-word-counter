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
{ man: 6, truth: 6, acknowledged: 3, considered: 3, daughters: 3 }
```

As you can see, paths relative to the calling location are working just fine. Happy testing! 🎉

## Technical Details 🛠️

This application uses Node.js with TypeScript and the Commander.js framework for building the CLI app. I've also sprinkled in a bit of Figlet (just for the title).

I embraced a test-driven development approach (not strictly by the book, sometimes I wrote a simple chunk of the function before the test). For testing, I chose Vitest, my favorite test framework – it's almost equal to Jest in terms of API but faster, more modern, and compatible with other cool stuff! 🚨