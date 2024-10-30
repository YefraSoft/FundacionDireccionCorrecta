"use client";
import DashbardCompany from "@/components/dashboards/companyDash";
import NavDashboard from "@/components/navbars/navDashboard";
import { dashboardProps } from "@/utils/interfaces";
import { notFound } from "next/navigation";
import React from "react";

export default function Dashbard({ params }: dashboardProps) {
  const rol = React.use(params).rol?.toLowerCase();
  if (!rol || !["sponsor", "branch", "company"].includes(rol)) {
    notFound();
  }
  return (
    <div className="">
      <NavDashboard rol={rol} />
      {rol === "sponsor" && <div />}
      {rol === "branch" && <div />}
      {rol === "company" && <DashbardCompany />}
    </div>
  );
}
