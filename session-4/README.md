# Chapter 04 - Talk is Cheap, show me the code 📚
 
### In the previous session we have created a  `Header component`. With that we have continued to build our reamining portion of our Food Villa app.

### - First  we have learnt `React.Fragment` in this.

 - `React.Fragment` -  is a feature in React that allows you to return multiple elements from a React       component by allowing you to group a list of children without adding extra nodes to the DOM.
 - From this  we have render our components  using this concept.
 

### And then  we have created like a `config Driven UI` 
- `Config-Driven UI` is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the server (backend). This is one of the popular pattern used in the industry now.
- using the Hardcoded data which contains restaurants.

### Then `Props`
 -`Props` (short for “Properties”) in React are attributes passed to the components in JSX used to pass data. They are nothing but keys that hold some value. Also, React wraps the props along with the values associated, into an object named props, which is passed as an arguement to that specific functional component

### Then we have learnt a major topic called `Virtual Dom` & `Reconcilation`.

  -React uses `virtual DOM` to key the browser very Fast. `virtual DOM` is a representation of a `Actual DOM` tree.React also uses something know as `Reconciliation` init. `Reconciliation` has `Diff Algorithm` which finds out the difference between trees(`Actual DOM` tree vs `virtual DOM` tree).so , the `Reconciliation` helps to re-render only th portion which is requierd , which is found by Diff Algorithm.This process is called `Reconciliation`.


### using these components we have built rest of the components (`Body`,`Footer`) init.