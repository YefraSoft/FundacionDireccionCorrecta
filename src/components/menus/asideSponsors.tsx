import { companyData } from "@/utils/interfaces";
import CompanyCard from "../cards/companyCard";
import ButtonIcon from "./buttonIcon";
import IconPrefit from "./icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAliados } from "@/services/dataService";
import LoadingCircle from "./loadingCircle";

export default function AsideSponsors() {
  const [companys, setCompnays] = useState<companyData[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  useEffect(() => {
    getAliados().then((data: companyData[]) => {
      setCompnays(data);
      setloading(false);
    });
  }, []);
  const buttonsVariants = {
    bgColror: "bg-havelockblue-500 text-havelockblue-50",
    hoverColor: "hover:bg-havelockblue-600 animate-bounce",
  };
  return (
    <div>
      <div className="px-2">
        <section className="px-2">
          <span className="text-lg text-patina-600">
            Ayuda a mexico y se parte del movimiento
          </span>
          <section>
            <span className="font-thin text-sm text-patina-600">
              Beneficios
            </span>
            <section className="flex justify-between">
              <IconPrefit icon="smile" label="Social" />
              <IconPrefit icon="pig" label="Monetario" />
              <IconPrefit icon="heart" label="Empatico" />
              <IconPrefit icon="coin" label="Fiscal" />
            </section>
            <span className="inline-block font-thin text-xs text-havelockblue-400 hover:scale-105 transition duration-300">
              <Link href="/">Conoce mas beneficios</Link>
            </span>
          </section>
          <section className="flex justify-center items-center mt-4">
            <ButtonIcon
              label="¡Registrate!"
              icon="userAdd"
              variants={buttonsVariants}
            />
          </section>
          {/* isOpen && <DonationWindow setOpen={setOpen} />*/}
        </section>
        <section className="divide-y-2 space-y-2 mt-2">
          <span className="font-thin text-lg text-patina-600">
            Nuestros centros de ayuda
          </span>
          {loading ? (
            <LoadingCircle />
          ) : (
            companys.map((company, index) => (
              <CompanyCard
                key={index}
                logo={company.logo}
                branch_name={company.branch_name}
                address={company.address}
                business_class={company.business_class}
                reg_date={company.reg_date}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
