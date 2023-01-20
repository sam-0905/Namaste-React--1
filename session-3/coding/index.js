import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
        id: "title",
        key: "h1",
    },
    "Hello World !"
)


// JSX?

const head5 = < h1 id = "title" > Namamste React < /h1>

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading)