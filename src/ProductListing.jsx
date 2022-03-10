import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";
import { languageLib } from "./languageLib";
export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();
  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2
        className={`margin-1 ${theme === "light" ? "light" : "dark"}`}
      >{`${languageLib[language]["product"]} ${item}`}</h2>
      <button className="btn primary" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  ));
}
