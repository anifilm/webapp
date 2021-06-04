import React from "react";

function createTitle() {
    const element = React.createElement("h1", {className: "hero-title"}, "Welcome to our supermarket");
    return element;
}

// sample usage (do not modify)
console.log(createTitle());
