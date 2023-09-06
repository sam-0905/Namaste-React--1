# Chapter 09 - Optimizing our App📚

### In the previous session we have studied about:
## custom Hooks :-

We can build our own hooks to ensure
• readability,
• reusability,
• separation of concerns (maintainability/modularity), 
• testable: because I can write separate test cases for each helper function/hook
Now, Hooks are functions at the end of the day and they are considered to be utility/helper functions. So, they are generally kept in a separate folder named “utils” altogether. In that folder we can create a file named “helper.js” to store our custom hooks.
➢ Generally, Hooks are mentioned in the utils folder inside another Hooks folder or just directly
➢ Always, mention “use” as the prefix of the file name containing our hook.
➢ Always do a named
## And in the restaurant Menu we have extract the customm Hook `useRestautant` hook and it will take care of all our restaurant logic.

## And then we have created a `useOnline` hook from scratch .It will check wether the user is offline/online based on our internt connection.It will gives us a boolean value true/false.

## Finally we have seen the `Lazy loading` things:
# Lazy Loading:
```
lazy(load) 
Call lazy outside your components to declare a lazy-loaded React component:

```
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

`Parameters` 

Load:
A function that returns a Promise or another thenable (a Promise-like object with a then method). React will not call load until the first time you attempt to render the returned component. After React first calls load, it will wait for it to resolve, and then render the resolved value as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call load more than once. If the Promise rejects, React will throw the rejection reason for the nearest Error Boundary to handle.

Returns:
lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use <Suspense> to display a loading indicator while it’s loading.

For Reference: [https://react.dev/reference/react/lazy]

```
## Note:Never ever use a Lazy component inside a another component ⬇️.
If we keep lazy() import into another component it will lazy loaded after every render cycle⬆️.The do lazy loading where you will going to import it.

-----------------------------------------------------------------------------------------------------

## In this seesion we have studied about:

### There are several ways of css:
•	First is create a separate stylesheet(index.css) and in code we create a style using a className,id,..etc.
•	Second way is inline styling.
•	Third way is using library or Framework.  (Material UI, Bootstrap, Base Web UI, Ant design, chakra UI)
•	Fourth way is to using SCSS & SASS.
•	Styled components

```
components library(For refernce)
Material UI -https://mui.com/
Bootstrap - https://getbootstrap.com/
Base Web UI -https://baseweb.design/
Ant design -https://ant.design/components/overview
chakra UI -https://chakra-ui.com/
Styled components-https://styled-components.com/
```


## And then Applying CSS using external libraries like `Material UI, Chakra UI, SASS` etc :
➢ Cons :-
• Including any CSS library will increase our bundle size
• We lose a lot of control over how our elements look i.e. customizing it becomes difficult
➢ Pros :-
• Reusable
• Easy to code
• Takes care of responsiveness

## And Applying CSS using `Styled Components`:
There is also another framework to help developers write CSS called Styled-Components. Just like we are able to write HTML-like code inside javascript files in React in the form of JSX, this framework helps us to write CSS-like syntax inside our JSX. If you want to learn use :-
➢ Pros :-
• Reusable
➢ Cons :-
• Can be unreadable because of the long codes and no moduling.

For refernce :[https://dev.to/elijahtrillionz/complete-guide-on-how-to-use-styled-components-in-react-360c]
For refernce :[https://www.smashingmagazine.com/2020/07/styled-components-react/].

## Then Finally we have seened about 

### `Tailwind CSS Framework :`
Tailwind is a Open Source CSS Framework.
`Pros :`
• While writing normal CSS, we had to toggle between the CSS file and the JS files to see which class or id do we have to put our CSS in. Tailwind says that we can instead write the CSS on the go (i.e. in the same file)
• Reusable because it comes with a lot of prebuilt classes
• It consumes lesser bundle size because it offers us just minimal CSS to ease up our pain
• Flexible UI i.e. easily customizable.
• Easy to debug (Reason mentioned at last)


#### and we have setup up our Tailwind CSS 

Steps to use tailwind css in app : 
- Install tailwind css

```
npm install -D tailwindcss postcss
npx tailwindcss init
```

- Configure PostCSS
```json
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

- Configure your template paths

```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### The we have used Tailwindcss in our project.