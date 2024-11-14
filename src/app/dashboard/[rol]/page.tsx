"use client";
import DashbardCompany from "@/components/dashboards/companyDash";
import { DashbardHook } from "@/components/providers/Hook";
import { dashboardProps } from "@/utils/interfaces";
import { notFound } from "next/navigation";
import { useEffect, use } from "react";

export default function Dashbard({ params }: dashboardProps) {
  const { rol } = use(params);
  const { setUserRol } = DashbardHook();

  useEffect(() => {
    setUserRol(rol);
    if (!rol || !["sponsor", "branch", "company"].includes(rol)) {
      notFound();
    }
  });

  return (
    <div className="">
      {rol === "sponsor" && <div />}
      {rol === "branch" && <div />}
      {rol === "company" && <DashbardCompany />}
    </div>
  );
}
