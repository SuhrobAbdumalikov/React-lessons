import { useState } from "react";
import Heading from "./components/Heading";
import SideBar from "./components/sideBar";
import { data, cardData } from "./data/data";
import { Card } from "./components/Card";

//=========>> simple <<============//
// export const App = () => (
//   <div>
//     {/* <Heading class="HeadingRed" /> */}
//     <SideBar
//       mainTitle={"JavaScript Tutorial"}
//       children={[
//         "JavaScript Introduction",
//         "JavaScript Example",
//         "External JavaScript",
//       ]}
//     ></SideBar>
//     <SideBar
//       mainTitle={"JavaScript Basics"}
//       children={[
//         "JS Comment",
//         "JS Variable",
//         "JS Global Variable",
//         "JS Data Types",
//         "JS Operators",
//         "JS If statement",
//         "JS Switch",
//         "JS Loop",
//         "JS Fuction",
//       ]}
//     ></SideBar>
//   </div>
// );

// export const App = () => (
//   <>
//     <SideBar props={data}></SideBar>
//     <Card props={cardData}></Card>
//   </>
// );

export const App = () => {
  let [state, setState] = useState(0);
  const clicked = () => {
    state++;
    setState((prev) => ++prev);
  };
  return (
    <>
      <button onClick={clicked}>Click Me</button>
      <h1>{state}</h1>
    </>
  );
};
