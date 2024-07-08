import { createContext, useEffect, react, useState } from "react";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("dark");
  const handleThemeSettings = () => {
    setDarkMode((previous) => !previous);
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    theme == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [handleThemeSettings]);

  const contextData = {
    darkMode: darkMode,
    theme: theme,
    setTheme: setTheme,
    setDarkMode: setDarkMode,
    handleThemeSettings: handleThemeSettings,
  };

  return (
    <GeneralContext.Provider value={contextData}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
