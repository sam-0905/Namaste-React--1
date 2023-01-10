const heading = React.createElement("h1", {
        id: "title"
    },
    "Hello World !"
)


const heading1 = React.createElement("h2", {
        id: "title",
        //style: { color: "red" },
    },
    "Learing React from zero to Hero!"
)

const heading2 = React.createElement("h3", {
        id: "title"
    },
    "From Akshay"
)

const container = React.createElement("div", {
    id: "container",
    className: "class"
}, [heading, heading1, heading2])


console.log(heading1);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(container);