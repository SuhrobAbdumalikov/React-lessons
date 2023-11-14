import axios from "axios";

export const getTodos = () => {
  return (dispatch) => {
    console.log(dispatch);
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      dispatch(res.data), console.log(res.data);
    });
  };
};
