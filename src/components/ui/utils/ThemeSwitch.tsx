"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    } else {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  }

  return (
    <div
      className="transition-all hover:scale-110 active:scale-95 bg-card border-border p-2 rounded border cursor-pointer"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </div>
  );
}
