import { ProductBranch } from "@/utils/fakeData";
import BranchCard from "../cards/branchCard";
import ProductList from "../cards/productCard";
import RegisterBranch from "../forms/type/registerBranch";

export default function DashbardCompany() {
  return (
    <div className="h-full bg-gradient-to-b from-white to-slate-200">
      <BranchCard />
      <ProductList branches={ProductBranch} />
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
