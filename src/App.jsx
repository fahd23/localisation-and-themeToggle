import "./styles.css";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";
import { ThemeToggle } from "./Nav";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";
import { languageLib } from "./languageLib";

export default function App() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div className={`App ${theme === "light" ? "bg-light" : "bg-dark"}`}>
      <h1 className={theme === "light" ? "light" : "dark"}>
        {languageLib[language]["title"]}
      </h1>
      <div className="app-body">
        <ThemeToggle />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
