import DashbardCompany from "@/components/dashboards/companyDash";
import { dashboardProps } from "@/utils/interfaces";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const roles = ["sponsor", "branch", "company"];
  return roles.map((rol) => ({ rol }));
}

export default function Dashbard({ params }: dashboardProps) {
  const { rol } = React.use(params);

  if (!rol || !["sponsor", "branch", "company"].includes(rol)) {
    notFound();
  }

  return (
    <div className="">
      {rol === "sponsor" && <div>Sponsor Dashboard</div>}
      {rol === "branch" && <div>Branch Dashboard</div>}
      {rol === "company" && <DashbardCompany />}
    </div>
  );
}
