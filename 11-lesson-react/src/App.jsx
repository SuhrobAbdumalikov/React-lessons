import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import "./App.css";

const perPage = 40;

function App() {
  const [users, setUsers] = useState([]);
  const [currentPageUsers, setCurrentPageUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setUsers(data);
    })();
  }, []);

  const paginationCounter = users.length / perPage;

  useEffect(() => {
    setCurrentPageUsers(
      users.slice(currentPage * perPage, (currentPage + 1) * perPage)
    );
  }, [currentPage, users]);

  return (
    <div className="container">
      <h1>Photos</h1>
      {!users.length ? <Loading /> : null}
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexWrap: "wrap",
          width: 1400,
          margin: "0 auto",
        }}
      >
        {currentPageUsers.map(({ id, thumbnailUrl, title }) => {
          return (
            <div key={id} style={{ width: 200, textAlign: "center" }}>
              <img src={thumbnailUrl} alt={title} />
              <p>
                {id}.{title}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        {Array(paginationCounter)
          .fill(null)
          .map((_, idx) => {
            return (
              <button
                style={{
                  width: 35,
                  height: 20,
                  backgroundColor: "ActiveCaption",
                  color: "white",
                }}
                key={idx}
                className={`${currentPage === idx ? "active" : ""}`}
                onClick={() => setCurrentPage(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
