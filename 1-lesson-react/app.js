//============>> yomon dasturchi qiladigan usul
// const li1 = React.createElement('li',{},'Olma');
// const li2 = React.createElement('li',{},'Olxori');
// const li3 = React.createElement('li',{},'Olcha');

//=======>> yaxshi dasturchi qiladigan usul
//   const lists = ["olma", "olcha", "olxori"].map((fruit, idx) =>
//     React.createElement(
//       "li",
//       {
//         key: idx,
//       },
//       fruit
//     )
//   );
//   const ul = React.createElement("ul", {}, lists);
//   const row = React.createElement(
//     "div",
//     {
//       className: "row",
//     },
//     ul
//   );
//   const container = React.createElement(
//     "div",
//     {
//       className: "container",
//     },
//     row
//   );

//   const root = ReactDOM.createRoot(document.querySelector("#root"));
//   root.render(container);

// ==============>> Simple page <<===============//
const cards = [
  {
    title: "lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: "./images/img1.png",
  },
  {
    title: "lorem Ipsum 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: "./images/img2.png",
  },
  {
    title: "lorem Ipsum 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    img: "./images/img3.png",
  },
];

const boxes = cards.map(({ title, description, img }, idx) =>
  React.createElement(
    "div",
    { className: "box", key: idx },
    React.createElement("img", { src: img }),
    React.createElement("h2", {}, title),
    React.createElement("p", {}, description)
  )
);

const wrapper = React.createElement("div", { className: "wrapper" }, boxes);
ReactDOM.createRoot(document.querySelector("#root")).render(wrapper);
