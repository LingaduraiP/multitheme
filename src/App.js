import React from "react";
import Header from "./components/Header";
import { useTheme } from "./context/themeProvider";

const App = () => {
  const theme = useTheme();

  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
