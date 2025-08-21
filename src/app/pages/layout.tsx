import type { Metadata } from "next";
import Protected from "@/components/protected";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
