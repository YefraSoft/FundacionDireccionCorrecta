import DashbardCompany from "@/components/dashboards/companyDash";
import { dashboardProps } from "@/utils/interfaces";
import { notFound } from "next/navigation";

export default async function Dashbard({ params }: dashboardProps) {
  const { rol } = await params;
  if (!rol || !["sponsor", "branch", "company"].includes(rol)) {
    notFound();
  }

  return (
    <div className="">
      {rol === "sponsor" && <div />}
      {rol === "branch" && <div />}
      {rol === "company" && <DashbardCompany />}
    </div>
  );
}
