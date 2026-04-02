"use client";

import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setIsDark(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={isDark} onChange={toggleDarkMode} size={40} />
      </div>
    </>
  );
};

export default ThemeSwitcher;
