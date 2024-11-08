"use client";
import { createContext, useState } from "react";
import { overFlowContext } from "@/utils/interfaces";

// CONTEXT
export const overContext = createContext<overFlowContext | undefined>(
  undefined
);

export default function OverFlowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(Boolean);
  return (
    <overContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </overContext.Provider>
  );
}

