import type { Metadata } from "next";
import Protected from "@/components/Protected";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Ar. Z. Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Protected>
      <Header />
      {children}
      <Footer />
    </Protected>
  );
}
