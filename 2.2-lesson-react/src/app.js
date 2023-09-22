import React from "react";
import ReactDOM from "react-dom/client";
// import { products } from "./data";

// const heading = <h1 id='heading1'>Hello World</h1>
// const heading = (
//   <div>
//     <h1>Hello World</h1>
//     <h2>Salom Dunyo</h2>
//   </div>
// );

//============>> first step <<==============//
// const container = (
//   <div id="container">
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//     <div id="items">
//       <img
//         src="https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80"
//         id="img"
//       ></img>
//       <h2>Vegetables</h2>
//       <p>This is fruit</p>
//     </div>
//   </div>
// );

//===========>> second step <<===============//
// const container = (
//   <div id="container">
//     {products.map(({ title, productCount, img },idx) => (
//       <div id="items" key={idx}>
//         <img src={img}></img>
//         <h2>{title}</h2>
//         <p>{productCount}</p>
//       </div>
//     ))}
//   </div>
// );
// ReactDOM.createRoot(document.querySelector("#root")).render(container);

//===============>> practise <<================//
const cards = [
    {
      img:'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80',
      title:'Hello World',
      price:'$14.99',
      startIcon:'⭐⭐⭐⭐⭐',
      trashIcon:'trash',
  
    },
    {
      img:'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80',
      title:'Hello World',
      price:'$14.99',
      startIcon:'⭐⭐⭐⭐⭐',
      trashIcon:'trash',
  
    },
    {
      img:'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0fGVufDB8fDB8fHww&w=1000&q=80',
      title:'Hello World',
      price:'$14.99',
      startIcon:'⭐⭐⭐⭐⭐',
      trashIcon:'trash',
  
    },
  ]



const container = (
  <div id="container">
    {cards.map(({ title, price, img, startIcon,}) => (
      <div className="box">
        <img src={img}></img>
        <div className="heart">
        <i class="fa-regular fa-heart"></i>
        </div>
        <div className="eye">
        <i class="fa-regular fa-eye"></i>
        </div>
        <div className="bottomTexts">
          <div className="leftSide">
            <p>{title}</p>
            <h3 className="price">{price}</h3>
            <span className="stars">{startIcon}</span>
          </div>
          <div className="rightSide">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    ))}
  </div>
);
ReactDOM.createRoot(document.querySelector("#root")).render(container);
