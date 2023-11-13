import { createStore } from "redux";
import Count from "./components/Count";

const initialState = {
  count: 0,
};

const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      // state = { ...state, count: state.count + 1 };
      state.count = state.count + 1;
      break;
    case "DEC":
      // state = { ...state, count: state.count - 1 };
      state.count = state.count - 1;
      break;
    default:
  }
  // return state;
  return { ...state };
};

export const store = createStore(CountReducer);

function App() {
  return <Count />;
}

export default App;
