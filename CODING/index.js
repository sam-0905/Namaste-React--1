const heading = React.createElement("h2", {
        id: "title"
    },
    "Hellow World !"
)


const heading1 = React.createElement("h1", {
        id: "title",
        //style: { color: "red" },
    },
    "heading1"
)

const heading2 = React.createElement("h2", {
        id: "title"
    },
    "heading2"
)

const container = React.createElement("div", {
    id: "container",
    className: "class"
}, [heading, heading1, heading2])


console.log(heading1)


const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(container)