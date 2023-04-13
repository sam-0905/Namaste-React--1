# Chapter - 03 : Laying The Foundation 📚
 
### In This we have add scrpit for "start" anf "Build" cmd.
- And, in the command line, write :- :”npm run start`”
However we can also write`
- “start” : “npx parcel index.html” in the package.json, and
   `npm start` in the cmd to start the server.
- Similarly, to build the script, we can modify the code by writing
  “build” : “npx parcel buid index.html” OR “parcel build index.html” in the package.json, and
  `npm run build` in the cmd to start the server.

### we have installed - "babel-plugin-transform-remove-console." 

  -In the last class, we got to know that Parcel removes the console logs from the js file. But it was wrong. It can be removed with the help of another package named `babel-plugin-transform-remove-console`. 

### keys 
    In react we should have a proper `Keys` init .Because react gets confuse if we have a multiple element 
in the same name.if we intoduce any new component init it gets confuse where it should get place .so, by giving a proper key make a good practise.

### And made a `Header component` with react using these concepts in Assigment.


