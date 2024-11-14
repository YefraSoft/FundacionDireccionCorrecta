"use client";
import DashbardCompany from "@/components/dashboards/companyDash";
import { DashbardHook } from "@/components/providers/Hook";
import { dashboardProps } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, use } from "react";

export default function Dashbard({ params }: dashboardProps) {
  const { rol } = use(params);
  const { setUserRol } = DashbardHook();
  const router = useRouter();

  useEffect(() => {
    setUserRol(rol);
    if (!rol || !["sponsor", "branch", "company"].includes(rol)) {
      router.push("/");
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
