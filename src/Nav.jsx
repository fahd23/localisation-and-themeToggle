import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";

export const ThemeToggle = () => {
  const { themeToggler } = useTheme();
  const { setLanguage } = useLanguage();
  return (
    <>
      <button className="btn primary" onClick={themeToggler}>
        Theme Toggle
      </button>
      <button className="btn primary" onClick={() => setLanguage("english")}>
        English
      </button>
      <button className="btn primary" onClick={() => setLanguage("tamil")}>
        தமிழ்
      </button>
    </>
  );
};
