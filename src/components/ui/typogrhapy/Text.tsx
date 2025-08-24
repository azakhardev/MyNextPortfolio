"use client";

import React from "react";
import clsx from "clsx";
import { head } from "framer-motion/client";

type Variant = "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "regular" | "small";

type Style = {
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  muted?: boolean;
  heading?: boolean;
};

interface Props extends React.HTMLAttributes<HTMLDivElement>, Style {
  children: React.ReactNode;
  variant?: Variant;
}

export default function Text({
  children,
  variant = "regular",
  italic,
  bold,
  underline,
  muted,
  heading,
  className,
  ...rest
}: Props) {
  const baseStyles: Record<Variant, string> = {
    ["4xl"]: "text-4xl font-bold",
    ["3xl"]: "text-3xl font-bold",
    ["2xl"]: "text-2xl font-semibold",
    ["xl"]: "text-xl font-semibold",
    lg: "text-lg font-medium",
    md: "text-base font-medium",
    regular: "text-base font-sans",
    small: "text-sm font-sans",
  };

  return (
    <div
      className={clsx(
        baseStyles[variant],
        italic === true && "italic",
        italic === false && "not-italic",
        bold === true && "font-bold",
        bold === false && "font-normal",
        underline === true && "underline",
        underline === false && "no-underline",
        muted && "text-text-muted",
        heading && "font-heading",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
