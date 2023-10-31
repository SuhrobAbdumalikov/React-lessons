import { createContext, useReducer } from "react";
import { TYPES } from "./constants/actionTypes";
import { reducer } from "./store";
import FirstComponent from "./components/FirstComponent";

export const Context = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    color: "red",
    isOpen: true,
  });

  const colors = ["red", "gray", "green", "blue"];

  const setColor = (color) => {
    dispatch({ type: TYPES.COLOR, payload: color });
  };

  const setIsOpen = () => {
    dispatch({ type: TYPES.OPEN });
  };

  const values = {
    isOpen: state.isOpen,
    color: state.color,
    setColor,
    colors,
  };

  return (
    <Context.Provider value={values}>
      <div className="m-10">
        <button
          className="bg-green-600 text-white rounded-md p-2 mb-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {state.isOpen ? "Close Modal" : "Open Modal"}
        </button>
        <FirstComponent />
      </div>
    </Context.Provider>
  );
}

export default App;
