## Namaste React Course by Akshay Saini
# Chapter 08 - Let's get Classy
## Theory Assignment: 

## How do you create `Nested Routes react-router-dom` configuration? 
     We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages
```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // // nested routing for subchild
            element: <Profile />,
          },
        ],
        }
      ],
   }
])
```

## Read about `createHashRouter`, `createMemoryRouter` from React Router docs. 

`createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
  
--------------------------------------------

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

## What is the `order of life cycle method calls` in `Class Based Components`? 

   Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
## Why do we use `componentDidMount`? 
  `componentDidMount`- In CBC it is the best place to make an API call.Like we make an api call inside useEffect in fumctional component .Bcz intially react first finishes the render() Phase and it updates the DOM ,Then it make an API call(it need to load some data).So it takes some time to load and also we use `componentDidMount` as a `async function `so it delays the component to print.It is called after intial or every render.
  Example:
```
    async componentDidMount() {
    //This is the best place we make an API call
    const data = await fetch("https://api.github.com/users/sam-0905");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("userInfo", json);
    console.log("componentDidMount");
  }
```
## Why do we use `componentWillUnmount`? Show with `example`. 
`ComponentWillUnmount()` - It is called when it is destroying it will call tihs(IT's like loading) or If we leave or switch to another page it will be called.ince we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.

 For example,A timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

```
“localhost:1234/about” or “localhost:1234/about/profile”. Now, in this page, the About component, along with its child components (here ProfileClass component) is displayed in the webpage.
The moment we navigate to the Home/Contacts component from the navbar, we will see that the console log inside the `ComponentWillUnmount() `gets printed.

```

## (Research) Why do we use `super(props)` in `constructor`? 

`super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.


## (Research) Why `can't we have` the `callback function` of `useEffect async`?

`useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
