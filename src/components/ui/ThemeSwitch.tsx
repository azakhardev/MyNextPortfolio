"use client";

import { useEffect } from "react";
import Button from "../forms/Button";

export default function ThemeSwitch() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  }

  return <Button onClick={() => toggleTheme()}>Switch Theme</Button>;
}
