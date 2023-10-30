// import { useState } from "react";
import { useReducer } from "react";
// import ChildComponents from "./components/ChildComponents";

const reducer = (state, fNum, sNum, { type }) => {
  switch (type) {
    case "INC":
      return fNum + sNum;
    case "DEC":
      return fNum - sNum;
    case "DIV":
      return fNum / sNum;
    case "MUL":
      return fNum * sNum;
    default:
      break;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  const [state, setState] = useReducer(reducer, 0);
  // const [fNum, setFNum] = useReducer(reducer, 0);
  // const [sNum, setSNum] = useReducer(reducer, 0);

  // const add = useCallback(() => {
  //   console.log("added");
  // }, []);

  // const add = useMemo(() => {
  //   for (let index = 0; index < 1000; index++) {}
  // }, [count2]);

  const abc = (type) => {
    setState({
      payload: 10,
      type,
    });
  };

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <br />
      <br />
      <h1>{count2}</h1>
      <button onClick={() => setCount2((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>-</button>
      <br /> */}
      {/* <br /> */}
      {/* <ChildComponents add={add} /> */}

      <div style={{ display: "flex", gap: 10 }}>
        <h1>{state}</h1>
      </div>
      <input type="number" placeholder="first Number" onChange={() => {}} />
      <br />
      <br />
      <input type="number" placeholder="first Number" onChange={() => {}} />
      <br />
      <br />
      <div style={{ display: "flex", gap: 30 }}>
        <button onClick={() => abc("INC")}>+</button>
        <button onClick={() => abc("DEC")}>-</button>
        <button onClick={() => abc("DIV")}>/</button>
        <button onClick={() => abc("MUL")}>*</button>
      </div>
    </>
  );
}

export default App;
