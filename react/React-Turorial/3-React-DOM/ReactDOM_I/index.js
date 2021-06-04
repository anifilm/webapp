import React from "react";
import {render} from "react-dom";

const element = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#react-root");
render(element, root);
