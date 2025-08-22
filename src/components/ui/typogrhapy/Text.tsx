"use client";

import React from "react";
import clsx from "clsx";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small";

type Style = {
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  muted?: boolean;
};

interface Props extends React.HTMLAttributes<HTMLDivElement>, Style {
  children: React.ReactNode;
  variant?: Variant;
}

export default function Text({
  children,
  variant = "body",
  italic,
  bold,
  underline,
  muted,
  className,
  ...rest
}: Props) {
  const baseStyles: Record<Variant, string> = {
    h1: "text-4xl font-heading font-bold",
    h2: "text-3xl font-heading font-bold",
    h3: "text-2xl font-heading font-semibold",
    h4: "text-xl font-heading font-semibold",
    h5: "text-lg font-heading font-medium",
    h6: "text-base font-heading font-medium",
    body: "text-base font-sans",
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
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
