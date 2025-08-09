import { useEffect, useState } from "react";

export default function useThemeAndLanguage() {
  const [language, setLanguage] = useState("pt");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const savedLang = localStorage.getItem("language");

      if (savedTheme) {
        const isDark = savedTheme === "dark";
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
      } else {
        document.documentElement.classList.add("dark");
      }

      if (savedLang && (savedLang === "pt" || savedLang === "en")) {
        setLanguage(savedLang);
      }
    } catch {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {}
  }, [darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { language, darkMode, toggleLanguage, toggleTheme };
}
