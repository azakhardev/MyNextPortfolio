"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";
import Text from "@/components/ui/typogrhapy/Text";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const username = searchParams.get("username") ?? undefined;

  function handleLogin() {
    const value = inputRef.current?.value ?? "";
    if (value.trim() !== "") {
      localStorage.setItem("username", value);

      router.push("/pages");
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-around">
      <div className="flex flex-col gap-2">
        <Text variant="h1">Artem's Dev Portfolio</Text>
        <Input
          ref={inputRef}
          defaultValue={username}
          placeholder="Enter yours/company name"
        />
      </div>
      <div className="flex items-center justify-center">
        <div
          className="cursor-pointer hover:shadow-glow-primary"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}
