import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";
import { LanguageProvider } from "./localise-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
  rootElement
);
