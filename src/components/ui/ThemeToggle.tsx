"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(function () {
    const modeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const result = modeQuery.matches ? "dark" : "light";
    document.body.classList.add(result);
    setTheme(result);
  }, []);

  function handleLight() {
    setTheme("light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  function handleDark() {
    setTheme("dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  return (
    <>
      {theme === "dark" && (
        <button onClick={handleLight}>
          <MdLightMode className="text-2xl hover:text-amber-500 duration-300" />
        </button>
      )}
      {theme === "light" && (
        <button onClick={handleDark}>
          <MdDarkMode className="text-2xl hover:text-amber-500 duration-300" />
        </button>
      )}
    </>
  );
}
