import React from "react";
import {render} from "react-dom";

const element = React.createElement("h1", {}, "Online Supermarket");
const root = document.querySelector("#react-root");
render(element, root);
