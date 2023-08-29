# Chapter 09 - Optimizing our App📚

### In the previous session we have studied about:

### Nested Paths :-

A path inside another path. It can be created by making a children array for an already existing children. Ex :-
In the 1st layer of children, we are specifying path with the suffix “/”, which denotes root (like -> “/about”). We could have also written “about” instead and it would work just fine because the parent path is already specified as root (since it’s written path: “/” ).
However, in the nested path, always write just the name in the path argument (like :- path: ”profile”), and not path: “/profile”. This is because in the latter one, the actual path will be treated as “localhost:1234/profile”, since as stated earlier, “/” denotes root path.

```
“localhost:1234/profile”, since as stated earlier, “/” denotes root path. However, in the former case, the actual path will be “localhost:1234/about/profile”.
```

## And difference between class-based-component vs  Functional component

### React Class Lifecycle:

 React lifecycle has two phases:
1.	Render Phase → includes constructor and render method.
2.	Commit Phase → phase, where react, is actually modifying the DOM.and we know that the componentDidMount() is called after we have updated the DOM (That is why we see the Skimmer effect).

3.	Also we have more React Life Cycle methods , But we will study the most important ones.

`Constructor () → render() → ComponentDidMount() → ComponentDidUpdate() → ComponentWillUnmount()`

-----------------------------------------------------------------------------------------------------

## In tis class we have mainly see about 

custom Hooks :-
We can build our own hooks to ensure
• readability,
• reusability,
• separation of concerns (maintainability / modularity),
• testable : because I can write separate test cases for each helper function/hook
Now, Hooks are functions at the end of the day and they are considered to be utility/helper functions. So, they are generally kept in a separate folder named “utils” altogether. In that folder we can create a file named “helper.js” to store our custom hooks.
➢ Generally, Hooks are mentioned in the utils folder inside another Hooks folder or just directly
➢ Always, mention “use” as the prefix of the filename containing our hook.
➢ Always do a named

## And in the restaurant Menu we have extract the customm Hook `useRestautant` hook and it will take care of all our restaurant logic.

## In the RestaurantMenu.js, we are actually doing 2 things :-

• Fetching details about the menu of a restaurant by making an API call to the server.
• Displaying or rather rendering the details of the component in the DOM
We will be making the first functionality as a hook in a file named “useRestaurant.js” in the utils folder.


## And then we have created a `useOnline` hook from scratch .It will check wether the user is offline/online based on our internt connection. 

## It will gives us a boolean value true/false.

## Note: whenever we have added a `addEventListener` it it our resbonsibbility to remove all our `addEventListener` which ever we have added.

## Finally we have seen the `Lazy loading` things:

# Lazy Loading:

```
lazy(load) 
Call lazy outside your components to declare a lazy-loaded React component:

import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

Parameters 

Load:

A function that returns a Promise or another thenable (a Promise-like object with a then method). React will not call load until the first time you attempt to render the returned component. After React first calls load, it will wait for it to resolve, and then render the resolved value as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call load more than once. If the Promise rejects, React will throw the rejection reason for the nearest Error Boundary to handle.

Returns:

lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use <Suspense> to display a loading indicator while it’s loading.


For Reference: [https://react.dev/reference/react/lazy]

```

## There are several special names for Bundling:
•	Chunking
•	Code Splitting
•	Dynamic Bundling
•	Lazy Loading
•	On Demand Loading
•	Dynamic Import

## Note:Never ever use a Lazy component inside a another component ⬇️.
If we keep lazy() import into another component it will lazy loaded after every render cycle⬆️.The do lazy loading where you will going to import it.

