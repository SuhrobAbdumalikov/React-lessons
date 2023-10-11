// import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRequest } from "./utils/httpRequest";

// function App() {
//   const elementRef = useRef();

//   useEffect(() => {
//     VanillaTilt.init(elementRef.current, {
//       glare: true,
//       maxGlare: 0.5,
//       reset: false,
//       scale: 1.2,
//     });
//   });

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{ backgroundColor: "green", width: 200, height: 200 }}
//         ref={elementRef}
//         className="your-element"
//         data-tilt
//       ></div>
//     </div>
//   );
// }

// export default App;

// ======================================================================>>

const App = () => {
  const [data, setData] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    VanillaTilt.init(elementRef.current, {
      glare: true,
      maxGlare: 0.5,
      reset: false,
      scale: 1.2,
    });
  }, []);

  // useEffect(() => {
  //   fetch("https://api.quran.com/api/v4/chapters?language=en")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.log(err));
  // }, []);

  //axios =========>>
  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get(
  //       "https://api.quran.com/api/v4/chapters?language=en"
  //     );
  //     await setData(data);
  //   })();
  // }, []);

  //axios configs ============>>

  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexWrap: "wrap",
        gap: "50px",
      }}
    >
      {data?.data?.chapters?.map((data) => {
        return (
          <div
            className="your-element"
            data-tilt
            ref={elementRef}
            key={data.id}
            style={{
              backgroundColor: "green",
              color: "white",
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <h1>{data.name_simple}</h1>
            <h2>{data.name_arabic}</h2>
            <p>{data.revelation_place}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
