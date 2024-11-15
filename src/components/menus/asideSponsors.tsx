import { companyData } from "@/utils/fakeData";
import CompanyCard from "../cards/companyCard";
import ButtonIcon from "./buttonIcon";
import IconPrefit from "./icon";

export default function AsideSponsors() {
  const buttonsVariants = {
    bgColror: "bg-havelockblue-400 text-havelockblue-100",
    hoverColor: "hover:bg-havelockblue-500 animate-bounce",
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
            <span
              className="inline-block font-thin text-xs text-havelockblue-400 hover:scale-105 transition duration-300"
            >
              Conoce mas beneficios
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
            Quienes ya gozan los beneficios
          </span>
          {companyData.map((company, index) => (
            <CompanyCard
              key={index}
              logo={company.logo}
              companyName={company.companyName}
              location={company.location}
              industry={company.industry}
              date={company.date}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
