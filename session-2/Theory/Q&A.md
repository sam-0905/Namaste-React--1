- What is `NPM`?
      we have to manage a lot of pacakges a react app is huge app which does not run in a react there are lot of super power which it needs those super powers are come from different pakages are done by npm.

- What is `Parcel/Webpack`? Why do we need it?
     parcel or webpack is one of the Bundlers that we use in our project to make our app more faster through caching while development,optimized, minified,compatible with diffrent browser ,cleaining our code and much more.

- What is `.parcel-cache`?
     Parcel-cache is loaction where parcel store all the previous build related information. This help parcel to retrive.
     previous build information and which in turn reduce the build duration.

- What is `npx` ?
     npx -  A tool for executing Node pacakges.npx will check whether <command> exists in `$PATH`, or in the local project binaries, and execute it.

- What is difference between `dependencies` vs `devDependencies`

     `dependencies` - it contains an the library, which our project requires for production.
     
     `devDependencies`- it is a packagein the package.json file that we need only for project development purpose.

- What is `Tree Shaking`?
     In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used this is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.

- What is `Hot Module Replacement`?
     As we make changes in our code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR).

- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

     a.`Cache optimization` - If we use `npx parcel build index.html` only the first we use to build it takes some time to load. for instance, it may take 515ms or takes some time based on your laptop config or internet, post that build it takes just 3ms , 7ms etc.

     b.`File Watcher Algorithnm` - Parcel utilizes a very fast watcher written in C++ and its keep track of all files which are changing real time & it tells the server to relod very fastet in c++ .

     c.`Minification` -Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box.  Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.
    
     d.`Compression`- Parcel supports compressing bundles using Gzip and Brotli. While many servers compress data on the fly, others require you to upload pre-compressed payloads ahead of time. This may also allow for better compression, which would be too slow to do on every network request.
       
     e.`Code Cleanup` - Unnecessary console.log messages are removed through this process.

     f.`Port Numbe`r - Check if the port number already used by any other apps & assign new port number.

- What is `.gitignore`? What should we add and not add into it?
     gitignore is a file which keeps track of the files & folders that are not meant to be pushed to the code repository.
     example : .parcel-cache,node_modules,dist etc. 

- What is the difference between `package.json` and `package-lock.json`?
     `package.json`  -  it is created during npm initialization because, want to manage lot of packages,react is a huge app.

     `package-lock.json` - to know what the exact version we use on our production.It tell current version of library which we are using.And it also maintain its integrity .
        
- Why should I not modify `package-lock.json` ?
      package-lock.json actually is large information center which keeps track of package and version and dependency information which is used to run app if that get modified then it will create conflict at server and gets error.

- What is `node_modules` ? Is it a good idea to push that on git?
       Node module is a kind of database in our npm parcel usel lot of things to optimize our app. wecan generate everything in node modules if we have a `package.json` and `package-lock.json` it keep track of all the dependencies.
       No,though the node module should never ne pushed to git since it is very heavy object. 
       
- What is the `dist` folder?
       dist is basically keep th files for us .parcel will build all the production files into our dist folder when we run `npx parcel build index.html`.

- What is `browserlists` ?

       Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

        some qeury which is commonly :
           - “last 2 versions ” 	
           - "> 0.5%, last 2 versions, not dead"   
            

       
