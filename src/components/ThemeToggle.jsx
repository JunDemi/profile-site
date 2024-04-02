import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atom";

const ThemeToggle = () => {
  const [themeMode, set_themeMode] = useRecoilState(themeState);
  useEffect(() => {
    if (themeMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [themeMode]);
  return (
    <input
      type="checkbox"
      className="theme-toggle-btn"
      onChange={() => set_themeMode((prev) => !prev)}
    />
  );
};

export default ThemeToggle;
