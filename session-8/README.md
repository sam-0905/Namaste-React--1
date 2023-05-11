# Chapter 08 - Let's get Classy 📚
### In the previous session we have studied about some following cases that We should never do ,the following cases:
- Never write a component inside another component
- Never write useState inside if else
- Never write useState inside for loop
- Never create useState outside your component.
  ### And then we have learn about 
`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page.
In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`. 

### we have also studied `{createBrowserRouter}` this will helps us to create routing .It is coming from `react-router-dom` which we installed as a package.`createBrowserRouter` takes two parameters First one is [] and inside that we had a {} i.e.(array of objects).In the object we give a path and element.  And to make this `createBrowserRouter` to wprk we shld also provide `RouterProvider` with a configuration in our root.render(</>)
        
### And we have studied about `Nested Routing`
- Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data

• Outlet - A component that renders the next match in a set of matches.All the Children objects are come into the <Outlet />.
## `Dynamic Routing` - It will render different restaurant menu using `path:”/restaurant/:id”` and it will get render our UI. 

----------------------------------------------------------------------------------------------------------------

## In This video we have mainly studied about `class Bssed Comoponent`

### Nested Paths :-
A path inside another path. It can be created by making a children array for an already existing children. Ex :-
In the 1st layer of children, we are specifying path with the suffix “/”, which denotes root (like -> “/about”). We could have also written “about” instead and it would work just fine because the parent path is already specified as root (since it’s written path: “/” ).
However, in the nested path, always write just the name in the path argument (like :- path: ”profile”), and not path: “/profile”. This is because in the latter one, the actual path will be treated as “localhost:1234/profile”, since as stated earlier, “/” denotes root path.

```
“localhost:1234/profile”, since as stated earlier, “/” denotes root path. However, in the former case, the actual path will be “localhost:1234/about/profile”.
```

### Note (Things which we do inside a `class-based component`)
```
You cannot create a class-based component without a render() method. Just like a functional component, returns a JSX using a keyword return, a class-based component (CBC) returns JSX using the render().
```

```
`Using state (creating the state variable)`:-
In functional comp. we used to import the useState hook. We know that classes have a constructor and constructor is a special member function used for initialisation and hence we create the state variables inside a class constructor. Now, we use useState to create state variables, but earlier we used this.state object ,given to us by React, just like this.props. In that object we can write the state variables with their initial value in the form of key-value pairs.
```

```
We know that if we the set function for updating the value of a set variable, instead of doing normally like ->
“setVar = newValue”,
React will trigger the reconciliation cycle on encountering it and keep our UI in sync with it. Similarly, for CBC, React gives access to a function called `setState`, where we pass the modified object as parameter. `Never mutate state directly. `
```

```
`Doing API call in CBC` :-
In FC, we used to do API Call in the useEffect() because it got called after the first render, so that at first we can render whatever we can in the default state and later on we update the state. On updating, the component is rerendered.
So, in CBC too, first of all we have to render and then update. For this purpose, there is a member function called componentDidMount(), which will be called after my render.

```

### React Class Lifecycle:
 React lifecycle has two phases:
1.	Render Phase → includes constructor and render method.
2.	Commit Phase → phase, where react, is actually modifying the DOM.and we know that the componentDidMount() is called after we have updated the DOM (That is why we see the Skimmer effect).

3.	Also we have more React Life Cycle methods , But we will study the most important ones.

`Constructor () → render() → ComponentDidMount() → ComponentDidUpdate() → ComponentWillUnmount()`

#### Then we hve also seen somme example with the React LifeCycle Methods.

### In CBC we make an API in call from componentDidMount():-
#### -> componentDidMount() - It is called after every render.
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

### Finally we have seen about `componentDidUpdate` & `ComponentWillUnmount`

#### -> componentDidUpdate() -It is called when the rerendering of an existing component and its updation in DOM has already been done. In simple words, this method will be called after every next render.

#### -> ComponentWillUnmount() - It is called when it is destroying it will call tihs(IT's like loading) or If we leave or switch to another page it will be called.

```
“localhost:1234/about” or “localhost:1234/about/profile”. Now, in this page, the About component, along with its child components (here ProfileClass component) is displayed in the webpage.
The moment we navigate to the Home/Contacts component from the navbar, we will see that the console log inside the `ComponentWillUnmount() `gets printed.

```

### Note - "NEVER EVER COMPARE REACT LIFE CYCLE METHODS TO FUNCTIONAL COMPONENT HOOKS"

### Use Case of componentWillUnmount() :-
It is called when a component is unmounted. It means when we move from one component to another component, or rather one page to another page (not to be confused with React is a single page application. Here we are just using page to mean a component rather than a webpage). So, when we navigate to another component/page, sometimes we need to clear something up. For ex :-
Lets we write a setInterval in the componentDidMount() method, which prints a statement “Namaste React OP” after every sec. Now, when we open the url “localhost:1234/about” in the browser, we will be seeing that statement getting printed multiple times.

Now, when we will navigate to the Home/Contacts page, we would live this setInterval execution to stop. But, that won’t happen because this is a single page application where only the component is changed by React through it’s reconciliation process. So, we will still see that statement getting printed in the console. 


This is major downside of single page application
So, when we are changing our page, instead of reloading the page, React is changing the components. So, if we again move to the Contacts/Home page and again navigate back to the About page, the count of that statement getting printed will be 3 in every sec.

To avoid this, we need to cleanup this functionality. We know that when a component unmount, the componentWillUnmount() will be called and also that to clear a setInterval(), we use a clearInterval(). But, how can we reference the clearInterval() in the componentWillUnmount() to the setInterval() in the componentDidMount()?
To do that, while writing the setInterval(), store it in a variable using the “this” keyword and reference that variable in the clearInterval() too like :-
Doing this, the statement will get printed only when we are in the About page and not any other page because as soon as we navigate away from the About Page, that setInterval() will be cleaned up.
Performing.