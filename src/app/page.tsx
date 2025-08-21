"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const username = searchParams.get("username") ?? undefined;

  function handleLogin() {
    const value = inputRef.current?.value ?? "";
    if (value) {
      localStorage.setItem("username", value);

      router.push("/pages");
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="flex flex-col border rounded w-1/6 h-1/2">
        <div>
          <Input ref={inputRef} defaultValue={username} />
        </div>
        <div className="flex items-center justify-center">
          <Button
            onClick={(e) => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
