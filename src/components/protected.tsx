"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}
