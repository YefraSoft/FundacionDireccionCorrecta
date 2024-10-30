"use client";
import { pagesIndex } from "@/assets/staticAssets";
import Links from "../menus/links";
import DropdownButton from "../menus/dropDown";
import { navDashProps } from "@/utils/interfaces";

export default function NavDashboard({ rol }: navDashProps) {
  return (
    <nav className="flex bg-havelockblue-50 p-4 rounded-b-xl items-center justify-between">
      <span className="text-havelockblue-900">Direccion Correcta | {rol}</span>
      <Links menuItems={pagesIndex} />
      <DropdownButton menuItems={pagesIndex} />
    </nav>
  );
}
