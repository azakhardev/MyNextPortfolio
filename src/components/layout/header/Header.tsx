"use client";
import Link from "next/link";
import Text from "../../ui/typogrhapy/Text";
import i18next from "i18next";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MenuPortal } from "./MenuPortal";
import HeaderNavLink from "./HeaderNavLink";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between md:justify-center md:items-center backdrop-blur px-8 py-4">
      <div className="flex flex-row justify-center md:justify-start flex-1">
        <Text
          variant="regular"
          className="text-xl md:text-3xl font-bold flex items-center"
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
  return (
    <>
      <ThemeSwitch />
      <HeaderNavLink text={i18next.t("Header.home")} url="/pages" />
      <HeaderNavLink
        text={i18next.t("Header.projects")}
        url="/pages/projects"
      />
      <HeaderNavLink text={i18next.t("Header.jobs")} url="/pages/jobs" />
      <HeaderNavLink text={i18next.t("Header.contact")} url="/pages/contacts" />
    </>
  );
}
