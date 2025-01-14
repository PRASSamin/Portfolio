"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "lucide-react";
import React from "react";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full flex flex-col gap-16 items-center justify-center  -mt-10 md:mt-0">
      <Link href="/" className="cursor-pointer">
        <Image
          className="w-32 h-auto pras-logo dark:invert-[100%] dark:drop-shadow-[0px_6px_24px_#2b006b]"
          src={"/logo-b.svg"}
          alt="pras-logo"
          width={250}
          height={250}
        />
      </Link>
      <SignIn
        fallback={
          <div className="w-screen h-screen bg-background fixed inset-0 flex flex-col justify-center items-center">
            <Loader className="animate-spin" />
          </div>
        }
        appearance={{
          layout: {
            socialButtonsVariant: "blockButton",
            unsafe_disableDevelopmentModeWarnings: true,
          },
          elements: {
            rootBox:
              "w-[calc(100vw-2rem)] min-[480px]:w-[calc(100vw-5rem)] min-[550px]:w-[calc(100vw-10rem)] sm:w-[400px]",
            cardBox: "w-full h-full justify-between",
            socialButtons: "flex flex-col gap-2",
            socialButtonsBlockButton: "py-[0.7rem] px-[0.65rem]",
            card: "gap-0 px-[1rem] min-[480px]:px-[1.5rem]",
            main: "pt-[4rem] pb-[1rem]",
            logoBox: "sr-only",
          },
          baseTheme: theme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}
