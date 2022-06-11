import React, { useContext } from "react";
import colorTheme from "../colorTheme";

const ThemeContext = React.createContext();
const UpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(UpdateContext);
}

export default function ThemeProvider(prop) {
  const [selectTheme, setSelectTheme] = React.useState(0);
  const theme = colorTheme[selectTheme];
  //   console.log(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <UpdateContext.Provider value={setSelectTheme}>
        {prop.children}
      </UpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
