import { useTranslation } from "react-i18next";
import { translationKey } from "./translationKeys";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <>
      <div>
        <h1>{t(translationKey["Welcome"])}</h1>
        <h2>{t(translationKey["description"])}</h2>
      </div>
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("ru")}>ru</button>
      <button onClick={() => changeLanguage("uz")}>uz</button>
    </>
  );
}

export default App;
