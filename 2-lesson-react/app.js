import ReactDOM from "react-dom/client";
import React from "react";

// const h1 = React.createElement('h1',{},'Hello world');
// const h2 = React.createElement('h2',{},'Salom Dunyo');
// const box = React.createElement('div',{
//     className:'box'
// },h1,h2)

// ReactDOM.createRoot(document.querySelector('#root')).render(box);
const cards = [
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-in-park-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/forest-road-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/road-in-amazing-summer-mountains-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-in-park-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/forest-road-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/road-in-amazing-summer-mountains-free-photo.jpg?w=600&quality=80",
  },
  {
    title: "Title",
    description: "Something short and simple here",
    img: "https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

//============>> first container
const itmes = cards.map((el, { title, description, img }) =>
  React.createElement(
    "div",
    { className: "items" },
    React.createElement("img", { src: img }),
    React.createElement(
      "div",
      { className: "Texts" },
      React.createElement("h3", {}, title),
      React.createElement("p", {}, description)
    )
  )
);
const h2 = React.createElement("h2", {}, "Headline");
const box = React.createElement("div", { className: "Box" }, itmes);
const container = React.createElement(
  "div",
  {
    className: "container",
  },
  h2,
  box
);

//===============>> second container

// const nextContainer = React.createElement('div',{className:'nextContainer', });

// const fullContainer = React.createElement('div',{className:'fullcontainer'},container)
ReactDOM.createRoot(document.querySelector("#root")).render(container);
