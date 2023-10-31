import { useEffect, useReducer, useState } from "react";
import { TYPES } from "./constants/actionTypes";
import { reducer } from "./store/Reducer";
import { useRequest } from "./utils/useRequest";
import CurrencyInput from "./components/CurrencyInput";
import Loader from "./components/Loader";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    amount1: 0,
    amount2: 0,
    currency1: "",
    currency2: "",
    rates: [],
  });
  const [loading, setLoading] = useState(false);

  const getCurrencyConverter = async () => {
    setLoading(true);
    await useRequest
      .get(
        `convert?to=${state.currency2}&from=${state.currency1}&amount=${state.amount1}`,
        {
          headers: {
            apikey: "JApOuW26kHZGk65CvFRioWrMVhOzQn8b",
          },
        }
      )
      .then((result) => setAmount2(result.data?.result))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  const getCurrencyLists = async () => {
    await useRequest
      .get("list", {
        headers: {
          apikey: "JApOuW26kHZGk65CvFRioWrMVhOzQn8b",
        },
      })
      .then((result) => {
        setRates(Object.keys(result.data?.currencies));
        console.log(result.data?.currencies);
      })
      .catch((error) => console.log("error", error));
  };

  const setRates = (el) => {
    dispatch({ type: TYPES.RATES, payload: el });
  };

  const setCurrency1 = (el) => {
    dispatch({ type: TYPES.CURRENCY1, payload: el });
  };

  const setCurrency2 = (el) => {
    dispatch({ type: TYPES.CURRENCY2, payload: el });
  };

  const setAmount1 = (e) => {
    dispatch({ type: TYPES.AMOUNT1, payload: e });
  };

  const setAmount2 = (e) => {
    dispatch({ type: TYPES.AMOUNT2, payload: e });
  };

  useEffect(() => {
    getCurrencyConverter();
    getCurrencyLists();
  }, []);

  return (
    <div className=" mt-36  flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-10">CurrenCy Converter</h1>
      <div className="flex items-center justify-center w-full">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col items-start gap-5 border py-5 px-10 rounded-md border-gray-700">
            <div className="font-medium flex items-center gap-5">
              <h1 className="text-lg text-gray-500">
                {state.amount1 ? state.amount1 : "0"}
              </h1>
              <p className="text-md text-gray-500">
                {state.currency1 ? state.currency1 : state.rates[0]}
              </p>
            </div>
            <div className="font-medium flex items-center gap-5">
              <h1 className="text-5xl">
                {state.amount2 ? state.amount2 : "0"}
              </h1>
              <p className="text-3xl">
                {state.currency2 ? state.currency2 : state.rates[0]}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>From</p>
              <CurrencyInput
                handleAmountChange={setAmount1}
                handleSelectChange={setCurrency1}
                currencies={state.rates}
                amount={state.amount1}
                currency={state.currency1}
              />
              <p>To</p>
              <CurrencyInput
                handleAmountChange={setAmount2}
                handleSelectChange={setCurrency2}
                currencies={state.rates}
                amount={state.amount2}
                currency={state.currency2}
              />
            </div>
            <button
              className="border px-5 py-2 rounded-md border-gray-700 hover:border-gray-300"
              onClick={() => getCurrencyConverter()}
            >
              Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
