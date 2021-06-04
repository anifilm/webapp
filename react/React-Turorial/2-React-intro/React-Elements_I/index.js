import React from "react";

function createDivElement() {
    const element = React.createElement("div", {}, "Hello World!");
    return element;
}

// sample usage (do not modify)
console.log(createDivElement());
