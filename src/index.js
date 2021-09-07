import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ThemeProvider } from "./Context/Theme";
import { LangProvider } from "./Context/Lang";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
