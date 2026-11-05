
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import type { Language } from "./types";

export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("portfolio-language") === "en" ? "en" : "pt"
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <>
      <Hero language={language} setLanguage={setLanguage} />
      <Projects language={language} />
      <Skills language={language} />
      <About language={language} />
      <Contact language={language} />
    </>
  );
}
