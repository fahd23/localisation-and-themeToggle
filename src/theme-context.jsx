import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "dark" });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
