import React from "react";

const LangContext = React.createContext();

function LangProvider({ children }) {
  const [lang, setLang] = React.useState(
    window.localStorage.getItem("language") || "eng"
  );
  React.useEffect(() => {
    window.localStorage.setItem("language", lang);
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export { LangContext, LangProvider };
