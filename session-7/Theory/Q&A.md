## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path

## Theory Assignment:
## What are various ways to `add images` into our App? Explain with `code examples`.

 The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
```
import Logo from "../../assets/images/Logo.png";
export default function App() {
  return <img src={Logo} alt="logo" />
}
```
```
Adding the image into the project 
`Drag your image into your project` and `import it` into the desired component
```

Using the `full URL of the image ` for the web (CDN) or any public images or we can use it directly as we used in our class. The `Food Fire` logo is used as link before we import it feom `Assets`.
Example : 
```
<img src="https://cdn3.vectorstock.com/i/1000x1000/21/27/cooking-chef-logo-vector-30792127.jpg" alt="React Image" />
```

## What would happen if we do `console.log(useState())`?
   
   If we do `console.log(useState())`, we get an array `[undefined, function]`  where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.
   
## How will `useEffect` behave if we `don't add` a `Dependency array`?

    First `useEffect`- Default behaviour is called after intial render.If the dependency array is `Empty`.
```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

   Second, If we don't add a `Dependency array` It will called after `Every render` , then it print first render then `useEffect`.
```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

   Third, If we pass any state variable in the `Dependency array` the callback function will be executed  `one time`  and it will be changed only when the particular state get `changed` or otherwise it won't be called.

```
useEffect(() => {
	console.log("I run every-time only when my condition gets changed")
}, [local state varaible.]);
```

## What is `SPA`?
 
   `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## What is the `difference` between `Client Side Routing` and `Server Side Routing`?
   In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one. 

   In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`. 

## What is an Image CDN?  

   Image CDNs specializes in the transformation, optimization, and delivery of images. You can also think of them as APIs for accessing and manipulating the images used on your site. For images loaded from an image CDN, an image URL indicates not only which image to load, but also parameters like size, format, and quality. This makes it easy to create variations of an image for different use cases.
