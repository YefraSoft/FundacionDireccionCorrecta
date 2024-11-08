"use client";
import { createContext, useState } from "react";
import { dashBoarContext } from "@/utils/interfaces";

// CONTEXT
export const dashContext = createContext<dashBoarContext | undefined>(
  undefined
);

export default function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userRol, setUserRol] = useState("");
  return (
    <dashContext.Provider value={{ userRol, setUserRol }}>
      {children}
    </dashContext.Provider>
  );
}
