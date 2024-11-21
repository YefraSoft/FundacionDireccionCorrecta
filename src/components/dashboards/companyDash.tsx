"use client";
import { ProductBranch as fake } from "@/utils/fakeData";
import BranchCard from "../cards/branchCard";
import ProductList from "../cards/productCard";
import RegisterBranch from "../forms/type/registerBranch";
import { branchsProducts } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { getBranchesWidthProducts } from "@/services/dataService";

export default function DashbardCompany() {
  const [ProductBranch, setProductBranch] = useState<branchsProducts[]>([]);

  useEffect(() => {
    getBranchesWidthProducts()
      .then((Product: branchsProducts[]) => {
        setProductBranch(Product);
      })
      .catch(() => {
        setProductBranch(fake);
      });
  }, []);
  return (
    <div className="h-full bg-gradient-to-b from-white to-slate-200">
      <BranchCard />
      <ProductList ProductBranch={ProductBranch} />
      <div className="relative pb-1">
        <span className="text-havelockblue-700 font-semibold text-lg">
          Credenciales de acceso para sucursales
        </span>
        <RegisterBranch />
      </div>
    </div>
  );
}

/*
- Donaciones
- Información de la empresa
- Formularios CRUD de productos y sucursales
- Credenciales de acceso para sucursales
- Facturas de productos donados
- Notificaciones
- Fondos disponibles para donaciones por sucursal
*/
