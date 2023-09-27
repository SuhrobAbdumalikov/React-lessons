import { useState, useRef } from "react";

const Form = ({ send }) => {
    const {isShowPassword,SetShowPassword} = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnchange = () =>{

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="Enter name ..."
        onChange={handleOnchange}
      ></input>
      <input
        id="password"
        type="password"
        placeholder="Enter password ..."
        className="input"
      ></input>
      <button>Send</button>
    </form>
  );
};

export default Form;
