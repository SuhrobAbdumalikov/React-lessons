import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [description, setDescription] = useState("");

  const dataURL = " http://localhost:3000/";
  const server = async () => {
    await fetch(dataURL + "profile")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  server();

  const handaleAdd = async () => {
    await fetch(dataURL + "profile", {
      method: "POST",
      body: JSON.stringify({
        name: data,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    setData("");
    setDescription("");
  };

  return (
    <>
      <p>name:</p>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <p>description:</p>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />
      <br />
      <br />
      <button onClick={handaleAdd}>add</button>
    </>
  );
}

export default App;
