"use client";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CenterPortal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
          <div className="fixed top-0 w-screen h-screen px-4 pt-12 pb-4 md:px-12 md:py-12 flex flex-col items-center justify-center z-50">
            {children}

            <motion.div
              className="absolute top-[15px] right-[25px] cursor-pointer p-1 hover:bg-stone-600/40 hover:scale-110 transition-all rounded-md z-60 group"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <X size={32} className="hover:text-red-500 text-white" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
