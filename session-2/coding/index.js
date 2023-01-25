/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", {
        id: "title",
    },
    "Hello World !"
);

const heading1 = React.createElement(
    "h2", {
        id: "title",
        //style: { color: "red" },
    },
    "Learing React from zero to Hero!"
);

const heading2 = React.createElement(
    "h3", {
        id: "title",
    },
    "From Akshay"
);

const container = React.createElement(
    "div", {
        id: "container",
        className: "class",
    }, [heading, heading1, heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);