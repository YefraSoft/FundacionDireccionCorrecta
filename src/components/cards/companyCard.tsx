import Image from "next/image";

interface CompanyCardProps {
  logo: string;
  companyName: string;
  location: string;
  industry: string;
  date: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  logo,
  companyName,
  location,
  industry,
  date,
}) => {
  return (
    <div
      className="shadow-sm rounded-lg p-2 flex items-center space-x-3 w-full
    hover:scale-105 transition duration-300"
    >
      <Image
        src={logo}
        alt={companyName}
        className="w-16 h-16 rounded-full object-cover"
        width={100}
        height={100}
      />
      <div>
        <h3 className="text-lg font-semibold text-patina-700">{companyName}</h3>
        <p className="text-sm text-patina-500">Ubicaciónes: {location}</p>
        <p className="text-sm text-patina-500">Industria: {industry}</p>
        <p className="text-sm text-patina-500">Desde: {date}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
