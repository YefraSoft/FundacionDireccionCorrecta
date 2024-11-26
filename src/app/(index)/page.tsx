"use client";
import IndexCard from "@/components/cards/indexCard";
import Header from "@/components/menus/header";
import { useState } from "react";
import { benefitsFakeData } from "@/utils/fakeData";
import DetailWindow from "@/components/menus/detailWindow";
import Faqs from "@/components/menus/faqs";

export default function Index() {
  const [showDetail, setShowDetail] = useState<string | null>(null);
  const BenefitsSponsor = benefitsFakeData.filter(
    (benefit) => benefit.for === "SPONSOR"
  );
  const BenefitsCompapy = benefitsFakeData.filter(
    (benefit) => benefit.for === "COMPANY"
  );
  const handleButtonClick = (detail: string) => {
    setShowDetail(detail);
  };
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center py-10">
        <span className="text-2xl mb-5">¿Que es direccion correcta?</span>
        <div className="flex items-center justify-center rounded-md bg-patina-200 h-96 w-1/2 shadow-md">
          VIDEO
        </div>
      </section>
      <section className="mx-auto p-2 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-24">
          <h2 className="text-2xl text-center my-6 col-span-1 lg:col-span-3">
            Beneficios para <span className="italic">Empresas</span>
          </h2>
          {BenefitsCompapy.map((benefit) => (
            <IndexCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
              button={{
                onClick: () => handleButtonClick(benefit.detail_description),
              }}
            />
          ))}
          <h2 className="text-2xl text-center my-6 col-span-1 lg:col-span-3">
            Beneficios para <span className="italic">Personas</span>
          </h2>
          {BenefitsSponsor.map((benefit) => (
            <IndexCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
              button={{
                onClick: () => handleButtonClick(benefit.detail_description),
              }}
            />
          ))}
        </div>
        {showDetail && (
          <DetailWindow
            description={showDetail}
            button={{
              onClick: () => handleButtonClick(""),
            }}
          />
        )}
      </section>
      <section className="container mx-auto p-2 overflow-hidden">
        <Faqs />
      </section>
    </div>
  );
}
