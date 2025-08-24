"use client";

import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n: i18next } = useTranslation();

  const setLanguage = (lng: "cs" | "en") => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return { current: i18next.language, setLanguage };
}
