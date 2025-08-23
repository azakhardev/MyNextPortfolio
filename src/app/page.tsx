"use client";
import Button from "@/components/forms/Button";
import Input from "@/components/forms/Input";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";
import Text from "@/components/ui/typogrhapy/Text";
import MouseTracker from "@/components/ui/animations/MouseTracker";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();
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
    <div className="w-[100vw] flex flex-col items-center mt-[25vh]">
      <div className="flex flex-col justify-between h-[20vh] md:h-[15vh] text-center px-4 md:px-0">
        <Text variant="h1">Artem's Dev Portfolio</Text>
        <Input
          ref={inputRef}
          defaultValue={username}
          placeholder={t("Login.input-placeholder")}
        />
      </div>
      <div className="h-[10vh] flex items-center justify-center mt-[10vh]">
        <Button
          onClick={() => {
            handleLogin();
          }}
        >
          {t("Login.button")}
        </Button>
      </div>
      <MouseTracker />
    </div>
  );
}
