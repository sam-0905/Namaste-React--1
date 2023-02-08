### Is JSX mandatory for React? 
   --No, `Jsx` is not mandatory in React, `JSX` is a Html like syntax , but it is not Html inside JavaScript.`JSX` makes it easier to write and add HTML in React. `JSX` converts HTML tags into react elements. Each `JSX` element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with `JSX` can also be done with just plain JavaScript.By using Jsx the code get clean and readable.

     ### Example
         `const Title = <h1>This is JSX !</h1>`
### Is ES6 mandatory for React? 
  --`ES6` is not mandatory for using React but it's highly recommended to use `ES6`. Any javascript expressions (pure js) can be used in JSX to render React elements.

Currently, lot of React projects use `ES6` features in React ecosystem, so it's better to have knowledge on ES6 features like modules, destructuring, spread operator, template literals, classes, map, filter and reduce array methods.
### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX. 


      `{TitleComponent}`: This value describes the TitleComponent as a javascript expression or a variable. 
      The {} can embed a javascript expression or a variable inside it.

      `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.

      `<TitleComponent></TitleComponent>` : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

### How can I write comments in JSX? 

   --JSX comments are written as:

`{/*  */} `- for single or multiline comments

#### Example
`{/* A JSX comment */}`
`{/* `
   what ever can be wirte inside
`*/} `


### What is <React.Fragment></React.Fragment> and <></>? 

  -- <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.
    
    ### Example
 `React.Fragment `
 `const jsx = ( `
 ` <React.Fragment> *** insted ** <>`
  `<h1>jsx</h1>`
  `<h1>second jsx</h1>`
 `</React.Fragment> *** insted ** </>`
`)`


### What is Reconciliation in React? 

  -React uses `virtual DOM` to key the browser very Fast. `virtual DOM` is a representation of a `Actual DOM` tree.React also uses something know as `Reconciliation` init. `Reconciliation` has `Diff Algorithm` which finds out the difference between trees(`Actual DOM` tree vs `virtual DOM` tree).so , the `Reconciliation` helps to re-render only th portion which is requierd , which is found by Diff Algorithm.This process is called `Reconciliation`

     ### Example
`
     <div className="before" title="stuff" />
      <div className="after" title="stuff" />
`
### What is React Fiber? 

   React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

    -Pause, resume, and restart rendering work on components as new updates come in
    -Reuse previously completed work and even abort it if not needed
    -Split work into chunks and prioritize tasks based on importance

### Why do we need keys in React? 

     yes,`Keys` plays an marjor role in React . We should give a proper or `unique Keys `in react  if we have a same element or attribute multiple times in react , in that is have already three `</li>` in our code,suppose for instance we add a new kwy init , React will get confuse where the key should be placed.for that we have giving unique Keys to each `</li>`to avoid that circumstance.

       #### Example
       `<ul>
       <li>Hello World !</li>
       <li>React</li>
       </ul>`

       This is the correct way:
        `<ul>
        <li key="2015">Hello World !</li>
        <li key="2016">React</li>
        </ul>`

### Can we use index as keys in React? 
       Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

              `NO key << INDEX as key <<<<<< Unique id as key from data`        


### What is props in React? Ways to. 
      props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
      

            
### What is Config Driven UI?

       Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the server (backend). This is one of the popular pattern used in the industry now.