"use client";
import Link from "next/link";
import Text from "../../ui/typogrhapy/Text";

import { Menu } from "lucide-react";
import { useState } from "react";
import { MenuPortal } from "../../ui/portals/MenuPortal";
import HeaderNavLink from "./HeaderNavLink";
import ThemeSwitch from "@/components/ui/utils/ThemeSwitch";
import LanguageSelector from "@/components/ui/utils/LanguageSelector";
import { useTranslation } from "react-i18next";
import CvDownloadButton from "@/components/ui/utils/CvDownloadButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex flex-row justify-between md:justify-center md:items-center backdrop-blur px-8 py-4">
      <div className="flex flex-row justify-center md:justify-start flex-1">
        <Text
          variant="regular"
          className="text-xl md:text-3xl font-bold flex items-center"
          heading={true}
        >
          Artem's portfolio
        </Text>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <div
          onClick={() => setOpen((old) => !old)}
          className="p-2 rounded border"
        >
          <Menu />
        </div>
        <MenuPortal open={open} onClose={() => setOpen(false)}>
          <Text variant="xl" className="text-center">
            Menu
          </Text>
          <NavLinks />
        </MenuPortal>
      </div>
    </header>
  );
}

function NavLinks() {
  const { t } = useTranslation();

  return (
    <>
      <CvDownloadButton />
      <div className="flex flex-row gap-2 items-center">
        <ThemeSwitch />
        <LanguageSelector />
      </div>
      <nav className="flex flex-col md:flex-row gap-4">
        <HeaderNavLink text={t("Header.home")} url="/pages" />
        <HeaderNavLink text={t("Header.projects")} url="/pages/projects" />
        <HeaderNavLink text={t("Header.jobs")} url="/pages/jobs" />
        <HeaderNavLink text={t("Header.contact")} url="/pages/contacts" />
      </nav>
    </>
  );
}
