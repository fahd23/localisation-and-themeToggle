import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";
import "./styles.css";
import { languageLib } from "./languageLib";

export function Cart() {
  const { items } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <h1 className={`margin-1 ${theme === "light" ? "light" : "dark"}`}>
      {`${languageLib[language]["cart"]} ${items}`}
    </h1>
  );
}
