"use client";

import { motion } from "framer-motion";
import CenterPortal from "../portals/CenterPortal";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Text from "../typogrhapy/Text";

export default function CvDownloadButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="transition-all hover:scale-110 active:scale-95 bg-card border-border p-2 rounded border cursor-pointer flex flex-row gap-1"
        onClick={() => setOpen(true)}
      >
        <Download />
        <span className="md:hidden">{t("Header.download")}</span>
      </div>

      <CenterPortal open={open} onClose={() => setOpen(false)}>
        <motion.div
          className="h-2/3 w-full md:w-1/2 md:h-1/2 lg:w-1/3 bg-bg rounded-2xl z-50 border-2 border-border flex flex-col justify-around"
          initial={{ y: -40, opacity: 0.4 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          <div className="flex flex-col items-center h-full justify-around gap-6 w-full p-2">
            <Text variant="2xl" heading>
              CV Format
            </Text>
            <div className="w-full xl:w-2/3 flex flex-row justify-around ">
              <FileButton text="Word" file="documents/CV.docx" />
              <FileButton text="PDF (modern)" file="documents/CV.pdf" />
            </div>
            <Text variant="lg">{t("Dialogs.CV.select")}</Text>
          </div>
          <div></div>
        </motion.div>
      </CenterPortal>
    </>
  );
}

function FileButton(props: { text: string; file: string }) {
  return (
    <a
      className="py-4 px-8 flex flex-col justify-center items-center gap-2 bg-card hover:bg-card-hover border-border border rounded-md lg:p-4 w-1/3 h-full"
      href={props.file}
      download
    >
      <FileText className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
      <Text
        variant="regular"
        className="text-base md:text-lg lg:text-xl text-center"
      >
        {props.text}
      </Text>
    </a>
  );
}
