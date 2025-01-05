"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Loader } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <Button
        onClick={() => setTheme("light")}
        variant={"ghost"}
        className="cursor-pointer [&_svg]:size-5  p-0 aspect-square border border-muted-foreground/30 rounded group"
      >
        <Sun className="group-hover:rotate-180 transition-all duration-300" />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        onClick={() => setTheme("dark")}
        variant={"ghost"}
        className="cursor-pointer [&_svg]:size-5 p-0 aspect-square border border-muted-foreground/30 rounded group"
      >
        <Moon className="group-hover:rotate-[270deg] transition-all duration-300" />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setTheme("dark")}
      variant={"ghost"}
      className="cursor-pointer [&_svg]:size-5 p-0 aspect-square border border-muted-foreground/30 rounded group"
    >
      <Loader className="animate-spin" />
    </Button>
  );
}
