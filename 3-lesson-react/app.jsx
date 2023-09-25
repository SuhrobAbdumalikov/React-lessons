import ReactDOM from "react-dom/client";
import { Button, Groups } from "./components/button";
// const className = "Hello World";
// const children = (
//   <div>
//     <span>Test</span>
//     <div>
//         <h1>{className}</h1>
//     </div>
//     <span>Test</span>
//   </div>
// );

// const props = {
//   className,
//   children,
// };
// const container = <div {...props}></div>;
// ReactDOM.createRoot(document.querySelector("#root")).render(container);

//============>> btn components <<============//
ReactDOM.createRoot(document.querySelector("#root")).render(
  <div className="container">
    {/* <Button btnTitle={"hello world"} /> */}
    <Groups groupName={"Ocean"} course={"It bootcomp"} started={"01.03.2023"} room={"#2 rooms"} students={"12"} time={"12:30"}/>
    <Groups groupName={"Ocean"} course={"It bootcomp"} started={"01.03.2023"} room={"#2 rooms"} students={"12"} time={"12:30"}/>
    <Groups groupName={"Ocean"} course={"It bootcomp"} started={"01.03.2023"} room={"#2 rooms"} students={"12"} time={"12:30"}/>
  </div>
);
