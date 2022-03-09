import { useState } from "react";

export default function useToggleTheme() {
  const [colorTheme, setColorTheme] = useState("light");

  const toggleTheme = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
    } else {
      setColorTheme("light");
    }
  };
  return { toggleTheme, colorTheme };
}
