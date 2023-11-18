import { Provider } from "react-redux";
import { store } from "./store/store.js";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={<ErrorBoundary />}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
