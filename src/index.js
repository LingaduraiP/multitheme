import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./context/themeProvider";
import GlobalStyle from "./GlobalStyle";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <GlobalStyle />
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
