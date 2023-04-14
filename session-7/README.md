# Chapter 07 - Finding the Path 📚

### In the previous session we have studied abot difference between `Monolith` and `Microservice`. And then we have learned one of the most important Hook `useEffect Hook`,And then we Have created a `Shimmer UI.

## In this, First we have seen about:
     - We should never the following cases:
#### - Never write a component inside another component.
#### - Never write useState inside if else.
#### - Never write useState inside for loop.
#### - Never create useState outside your component.

### Note: -It is a good practise to put all our `Images` in the `Assets` folder. And use `Formik` for making forms.
### - And then we have learn about 
```
`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`. 
```
```
And one of the important in `Client-side routing` is react-router-dom provide us one of the important thing iinstead of using Anchor tag <a></a> we use super powerful tool is `<Link>` 
Link - By using this our page will not get reload if change to diffrent pages in our project.But in our DOM it is represent Anchor tag <a></a> .
```
### - And then , we have read about `{createBrowserRouter}` this will helps us to create routing .It is coming from `react-router-dom` which we installed as a package.`createBrowserRouter` takes two parameters First one is [array] and inside that we had a {object} i.e.(array of objects).In the object we give a path and element.

### - And to make this `createBrowserRouter` to work we shld also provide `RouterProvider` with a configuration in our root.render(</>).

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

```
        
### - And we have studied about `Nested Routing`
- Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data.
### -Also one of the important concept in`createBrowserRouter` is `Children` we will put all our component which we wwant to route according to `Nested Routing`.
### → to create `Nested Routing` we have to create a <Outlet /> .Whatever inside the children will come inside this <Outlet /> . And children doen't want to maintain any sequence or any order.we can put randomly which sequcence we want.

• Outlet - A component that renders the next match in a set of matches.All the Children objects are come into the <Outlet />.

```
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
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);


```

### Finally we have studied the `Dynamic Routing`

### `Dynamic Routing` - It will render different restaurant menu using `path:”/restaurant/:id”` and will update on UI. 

### → path:”/restaurant/:id” this is dynamic route  The two segments with : are dynamic.

- useParams Hook → this can be used to read the params from the URL
```
import { useParams } from "react-router-dom";

const params = useParams();
const {id} = params;
console.log(params);

```

