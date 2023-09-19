import  ReactDOM  from "react-dom/client";
import React from "react";

const h1 = React.createElement('h1',{},'Hello world');
const h2 = React.createElement('h2',{},'Salom Dunyo');
const box = React.createElement('div',{},h1,h2)

ReactDOM.createRoot(document.querySelector('#root')).render(box);