"use client";

import { useLanguage } from "@/components/hooks/useLanguage";
import { useState } from "react";
import { motion } from "framer-motion";
import { Triangle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { current, setLanguage } = useLanguage();
  const [showSelector, setShowSelector] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="relative ">
      <div className="flex flex-row gap-2 rounded-md border border-border p-1 min-w-[150px] justify-between bg-card capitalize">
        <p>
          {t("Header.language")}: {current}
        </p>
        <motion.div
          onClick={() => setShowSelector((old) => !old)}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: showSelector ? 60 : 0 }}
        >
          <Triangle />
        </motion.div>
      </div>
      {showSelector && (
        <div className="absolute left-0 top-full w-full mt-1 z-10 bg-card rounded-md shadow-md flex flex-col gap-1 p-2">
          <button
            onClick={() => setLanguage("cs")}
            className={`block px-2 py-1 text-left w-full hover:font-black ${
              current === "cs" ? "font-bold" : undefined
            }`}
          >
            Česky
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`block px-2 py-1 text-left w-full hover:font-black ${
              current === "en" ? "font-bold" : undefined
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
