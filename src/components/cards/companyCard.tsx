import { companyData } from "@/utils/interfaces";
import Image from "next/image";

const CompanyCard: React.FC<companyData> = ({
  logo,
  branch_name,
  address,
  business_class,
  reg_date,
}) => {
  return (
    <div
      className="shadow-sm rounded-lg p-2 flex items-center space-x-3 w-full
    hover:scale-105 transition duration-300"
    >
      <Image
        src={logo}
        alt={branch_name}
        className="w-16 h-16 rounded-full object-cover"
        width={100}
        height={100}
      />
      <div>
        <h3 className="text-lg font-semibold text-patina-700">{branch_name}</h3>
        <p className="text-sm text-patina-500">Ubicación: {address}</p>
        <p className="text-sm text-patina-500">Industria: {business_class}</p>
        <p className="text-sm text-patina-500">Desde: {reg_date}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
