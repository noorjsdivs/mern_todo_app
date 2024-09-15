"use client";

import React from "react";
import { useTheme } from "./ThemeContext";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={` w-full px-5 min-h-screen ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
