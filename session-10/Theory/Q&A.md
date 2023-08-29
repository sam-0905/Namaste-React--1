## Namaste React Course by Akshay Saini

## Chapter 09 - Optimizing our App

## Theory Assignment: 

## When and why do we need `lazy()`?

  React.lazy is used to `dynamically import` a component when it is first rendered, instead of importing at the beginning till when the file loads. This is called `Code Splitting`/ `On-demading loading`. 

  In our example : In App.js, Instamart component and about component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.

## What is `suspense`?

   By the way of keeping a component inside a `suspense` react will take care of all.In before it will not load our code for first time ,but after using suspense its works fine(React will take care behind the secenes.)

   Suspense component allows us to show some `fallback{}` content (such as a loading indicator/ Shimmer component) while we’re waiting for the lazy component to load or the component is not yet rendered. 
   
```javascript Eg:
import React, { lazy ,Suspense } from 'react';

const Instamart = lazy(() => import("../components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // ->/about/profile -This will also work -> If we given Like this - ParentPath/{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

```

The `fallback` prop accepts any `React elements` that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap `multiple lazy components` with a `single` Suspense component.


## Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?

This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and the Component is expected to render in the meantime. If only the dynamic import is done and there is no `<Suspense />` component then this error is shown. React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing the shimmer (loading indicator) is not desirable in some situations, then `startTransistion` API can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the Suspense component or its props from your code.
## `Advantages and Disadvantages` of using this `code splitting pattern`?

| Advantages  | Disadvantages |
| :---------- | :----------   |
| Reduces the page load time by bundling the large code into smaller bundles and laoding dynamically only when the component is loaded | Though the initial page load time is reduced, this increases the load time of each component thats loaded dynamically |
| Only the components that the user needs are loaded initially | There will be many http requests as the components are loaded dynamically |
| Cna imporve the user experience while loaded by showing suspense fallback/ loading dicator | But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component |

## When `do we and why do we need suspense`?

Suspense are useful when the components are `waiting` (React.lazy components are getting dynamically loaded) before rendering. Today, React Suspense only supports one use case which is loading components dynamically with React lazy(). In the future, it will support other use cases like data fetching.
