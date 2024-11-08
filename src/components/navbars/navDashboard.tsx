"use client";
import { pagesIndex } from "@/assets/staticAssets";
import Links from "../menus/links";
import DropdownButton from "../menus/dropDown";
import { DashbardHook } from "../providers/Hook";

export default function NavDashboard() {
  const { userRol } = DashbardHook();
  return (
    <nav className="flex bg-havelockblue-50 p-4 rounded-b-xl items-center justify-between">
      <span className="text-havelockblue-900">
        Direccion Correcta | {userRol}
      </span>
      <Links menuItems={pagesIndex} />
      <DropdownButton menuItems={pagesIndex} />
    </nav>
  );
}
