"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border flex flex-row text-sm bg-footer text-stone-300">
      <div className="flex-1 flex flex-col items-center justify-center py-2">
        <ul className="list-disc list-inside">
          <strong>{t("Footer.libraries")}</strong>
          <li>Prisma</li>
          <li>Framer motion</li>
          <li>React-i18next</li>
          <li>Zustand</li>
          <li>Tailwind</li>
          <li>Typescript</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center py-4">
        {t("Footer.description")}
      </div>
      <div className="flex-1 flex items-center flex-col py-2">
        <ul className="list-disc list-inside">
          <strong>{t("Footer.contacts")}</strong>
          <li>{t("Footer.tel")} : +420 774639246</li>
          <li>
            Email:{" "}
            <a className="underline" href="mailto:zakharchenkoartem@seznam.cz">
              zakharchenkoartem@seznam.cz
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/artem-zacharčenko-142997332"
            >
              Artem Zacharčenko
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a className="underline" href="https://github.com/azakhardev">
              azakhardev
            </a>
          </li>
          <li>
            DockerHub:{" "}
            <a
              className="underline"
              href="https://hub.docker.com/repositories/artemzach"
            >
              azakhardev
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
