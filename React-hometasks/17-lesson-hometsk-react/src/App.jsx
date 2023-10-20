import { useEffect, useState } from "react";
import { useHttp } from "./utils/useHttp";

function App() {
  const [users, setUsers] = useState([]);

  // const dragStart = (e, card) => {
  //   console.log("card", card);
  // };
  // const dragEnd = (e, card) => {
  //   console.log("card", card);
  // };
  // const dragOver = (e, card) => {
  //   e.preventDefault();
  //   console.log("card", card);
  // };
  // const ondropHandler = (e, card) => {
  //   e.preventDefault();
  //   console.log("card", card);
  // };

  const getData = async () => {
    const data = await useHttp.get("users");
    setUsers(data.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex items-center justify-center bg-gray-500">
      <div className="flex items-start flex-col">
        {users.map(({ id, name, username, email, phone, website }) => {
          return (
            <div
              key={id}
              className="my-5 bg-black text-white w-96 p-3 rounded-lg cursor-grab"
              // onDragStart={(e: DragEvent<HTMLDivElement>) => dragStart(e, card)}
              // onDragLeave={(e: DragEvent<HTMLDivElement>) => dragLeave(e, card)}
              // onDragEnd={(e: DragEvent<HTMLDivElement>) => dragEnd(e, card)}
              // onDragOver={(e: DragEvent<HTMLDivElement>) => dragOver(e, card)}
              // onDrop={(e: DragEvent<HTMLDivElement>) => ondropHandler(e, card)}
              draggable
            >
              <h2 className="font-extrabold text-green-500">{name}</h2>
              <h3 className="italic text-white">{username}</h3>
              <span className="text-red-400">{phone}</span>
              <div className="flex justify-between">
                <p className="text-yellow-200">{email}</p>
                <a href={website} className="text-blue-500">
                  {website}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
