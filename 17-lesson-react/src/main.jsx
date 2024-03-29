import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import i18n from "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n} initialLanguage={"uz"}>
    <App />
  </I18nextProvider>
);
