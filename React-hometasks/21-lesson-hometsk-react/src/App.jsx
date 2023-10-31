// import axios from "axios";
// import { useEffect, useState } from "react";
// import CurrencyInput from "./components/CurrencyInput";

// function App() {
//   // const [data, setData] = useState([]);
//   const [rates, setRates] = useState([]);
//   const [amount1, setAmount1] = useState(0);
//   const [amount2, setAmount2] = useState(0);
//   const [currency1, setCurrency1] = useState("");
//   const [currency2, setCurrency2] = useState("");
//   const [loading, setLoading] = useState(false);

//   const initialAmount = amount1;
//   const from = currency1;
//   const to = currency2;

//   useEffect(() => {
//     setLoading(true);
//     axios(
//       `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${initialAmount}`,
//       {
//         method: "GET",
//         headers: {
//           apikey: "OTBMxtfYP8JREzn51z93CrGqEbGVfxMF",
//         },
//       }
//     )
//       .then((result) => setAmount2(result.data?.result))
//       .catch((error) => console.log("error", error));
//     setLoading(false);
//   }, [amount1, currency1, currency2]);

//   useEffect(() => {
//     axios("https://api.apilayer.com/currency_data/list", {
//       method: "GET",
//       headers: {
//         apikey: "OTBMxtfYP8JREzn51z93CrGqEbGVfxMF",
//       },
//     })
//       .then((result) => setRates(Object.keys(result.data.currencies)))
//       .catch((error) => console.log("error", error));
//   }, []);

//   return (
//     <div className="flex items-center justify-center w-full h-screen">
//       {loading ? (
//         <h1>loading...</h1>
//       ) : (
//         <div className="flex flex-col items-start gap-5">
//           <div className="font-medium flex items-center gap-5">
//             <h1 className="text-lg text-gray-500">{amount1}</h1>
//             <p className="text-md text-gray-500">
//               {currency1 ? currency1 : rates[0]}
//             </p>
//           </div>
//           <div className="font-medium flex items-center gap-5">
//             <h1 className="text-5xl">{amount2}</h1>
//             <p className="text-3xl">{currency2 ? currency2 : rates[0]}</p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <CurrencyInput
//               handleAmountChange={setAmount1}
//               handleSelectChange={setCurrency1}
//               currencies={rates}
//               amount={amount1}
//               currency={currency1}
//             />
//             <CurrencyInput
//               handleAmountChange={setAmount2}
//               handleSelectChange={setCurrency2}
//               currencies={rates}
//               amount={amount2}
//               currency={currency2}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//========================================================================================================>>

import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import CurrencyInput from "./components/CurrencyInput";

const TYPES = {
  AMOUNT1: "AMOUNT1",
  AMOUNT2: "AMOUNT2",
  RATES: "RATES",
  CURRENCY1: "CURRENCY1",
  CURRENCY2: "CURRENCY2",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.AMOUNT1:
      state.amount1 = action.payload;
      break;
    case TYPES.AMOUNT2:
      state.amount2 = action.payload;
      break;
    case TYPES.CURRENCY1:
      state.currency1 = action.payload;
      break;
    case TYPES.CURRENCY2:
      state.currency2 = action.payload;
      break;
    case TYPES.RATES:
      state.rates = action.payload;
      break;
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    amount1: 0,
    amount2: 0,
    currency1: "",
    currency2: "",
    rates: [],
  });
  const [loading, setLoading] = useState(false);

  const initialAmount = state.amount1;
  const from = state.currency1;
  const to = state.currency2;

  useEffect(() => {
    setLoading(true);
    axios(
      `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${initialAmount}`,
      {
        method: "GET",
        headers: {
          apikey: "WZ760FrG3l1IeqkXXCCqAxIZruU7ktgD",
        },
      }
    )
      .then((result) => setAmount2(result.data?.result))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios("https://api.apilayer.com/currency_data/list", {
      method: "GET",
      headers: {
        apikey: "WZ760FrG3l1IeqkXXCCqAxIZruU7ktgD",
      },
    })
      .then((result) => setRates(result.data?.currencies))
      .catch((error) => console.log("error", error));
  }, []);

  const setRates = (el) => {
    dispatch({ type: TYPES.RATES, payload: el });
  };

  const setCurrency1 = (e) => {
    dispatch({ type: TYPES.CURRENCY1, payload: e.target.value });
  };

  const setCurrency2 = (e) => {
    dispatch({ type: TYPES.CURRENCY2, payload: e.target.value });
  };

  const setAmount1 = (e) => {
    dispatch({ type: TYPES.AMOUNT1, payload: e.target.value });
  };

  const setAmount2 = (e) => {
    dispatch({ type: TYPES.AMOUNT2, payload: e.target.value });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="flex flex-col items-start gap-5">
          <div className="font-medium flex items-center gap-5">
            <h1 className="text-lg text-gray-500">{state.amount1}</h1>
            <p className="text-md text-gray-500">{state.currency1}</p>
          </div>
          <div className="font-medium flex items-center gap-5">
            <h1 className="text-5xl">{state.amount2}</h1>
            <p className="text-3xl">{state.currency2}</p>
          </div>
          <div className="flex flex-col gap-2">
            <CurrencyInput
              handleAmountChange={setAmount1}
              handleSelectChange={setCurrency1}
              currencies={state.rates}
              amount={state.amount1}
              currency={state.currency1}
            />
            <CurrencyInput
              handleAmountChange={setAmount2}
              handleSelectChange={setCurrency2}
              currencies={state.rates}
              amount={state.amount2}
              currency={state.currency2}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
