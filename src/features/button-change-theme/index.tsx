"use client";

import { IButton } from "@/shared/interfaces/button";
import Button from "@/shared/ui/button/Button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ButtonChangeTheme = ({ variant = "containd", ...props }: IButton) => {
  const [color, setColor] = useState<"dark" | "light">("dark");
  const toggleChangeColor = () => {
    setColor((prev) => {
      if (prev === "dark") {
        return (prev = "light");
      }
      return (prev = "dark");
    });
    localStorage.setItem("theme", color);

    // theme.media = "(prefers-color-scheme: light)"
  };
  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    const themeLocal = localStorage.getItem("theme");
    if (theme.matches) {
      setColor("dark");
    } else {
        setColor("light");
    }
    if (themeLocal === "dark") {
      document.body.classList.toggle("theme-dark");
    } else {
      document.body.classList.toggle("theme-light");
    }
  }, [color]);
  return (
    <Button {...props} variant={variant} onClick={toggleChangeColor}>
      {color === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ButtonChangeTheme;
