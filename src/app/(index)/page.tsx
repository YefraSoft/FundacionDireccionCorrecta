"use client";
import IndexCard from "@/components/cards/indexCard";
import Header from "@/components/menus/header";
import Footer from "@/components/navbars/footer";
import { useState } from "react";
import { benefitsFakeData } from "@/utils/fakeData";
import DetailWindow from "@/components/menus/detailWindow";

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
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-2xl font-semibold text-center my-6 col-span-1 md:col-span-2 lg:col-span-3">
            Porque unirse como <span className="italic">Compañia</span>
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
          <h2 className="text-2xl font-semibold text-center my-6 col-span-1 md:col-span-2 lg:col-span-3">
            Porque unirse como <span className="italic">Donador</span>
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
      </div>
      <Footer />
    </div>
  );
}
