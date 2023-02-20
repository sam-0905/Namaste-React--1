# Chapter 05 - Let's get Hooked!

## What is the difference between `Named export`, `Default export`, and `* as export`?
    ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
  In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export` examples:

export const Title = () => {}
and the component is `Imported` from component.js file like: here we must use `{}` in `{Title}`.
```

// ex. importing a single named export
import { Component } from "./Component";

// ex. importing multiple named exports
import { Component, Component2 } from "./Component";

// ex. giving a named import a different name by using "as":
import { Component2 as MyNewComponent } from "./Component";



In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from Component.js file like:
```
const Header = () => {}
export default Header;
```
and the component is imported from Component.js file like: here we must omit `{}` in Component.
```
import Component from "./Component";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from Component.js file like:
```
export const Header = () => {}
export const Body = () => {}
export const Footer = () => {}
``` 
and the component is imported from Component.js file like:
```
import * as xyz from "./Component";
```
Now we can use them in JSX as:
```
<xyz.Header />
<xyz.Body />
<xyz.Footer />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const Component2 = () => {}
const Component = () => {}
export default Component;
```
and import like:
```
import Component, {Component2} from "./Component";
```



## What is the importance of config.js file? 

      config.js file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.

Example : All API Base URLs, CDN links, config data from backend, default values needed in the app are could be placed in config.js file.

## What are React Hooks? 

         A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
### React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.


## Why do we need useState Hook?

      `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook
```
const [state, setState] = useState(initialstate);
```
#### Importing: To use useState you need to import useState from react as shown below:
```
import React, { useState } from "react";
```
we can use Hooks in Functional Components
```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```