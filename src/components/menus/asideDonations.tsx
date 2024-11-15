import { asideDonationData, newsData } from "@/utils/fakeData";
import ButtonIcon from "./buttonIcon";
import DonationWindow from "./donationWindow";
import { OverFlowHook } from "../providers/Hook";
import NewsCard from "../cards/newsCard";

export default function AsideDonations() {
  const { isOpen, setOpen } = OverFlowHook();
  const buttonsVariants = {
    bgColror: "bg-havelockblue-400 text-havelockblue-100",
    hoverColor: "hover:bg-havelockblue-500 animate-bounce",
  };

  return (
    <div className="m-2 rounded-md">
      <div className="p-6">
        <span className="font-thin text-sm text-patina-600">
          Meta de donaciones: ${asideDonationData.goalAmountDonation} MXN
        </span>
        <section className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div
            className="bg-patina-300 h-3 p-1 rounded-full transition-all duration-500"
            style={{
              width: `${
                (asideDonationData.currentAmountDonation /
                  asideDonationData.goalAmountDonation) *
                100
              }%`,
            }}
          />
        </section>
        <span className="font-thin text-sm text-patina-600">
          Meta de apoyo a la plataforma: ${asideDonationData.goalAmountProject}{" "}
          MXN
        </span>
        <section className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div
            className="bg-patina-300 h-3 p-1 rounded-full transition-all duration-500"
            style={{
              width: `${
                (asideDonationData.currentAmountProject /
                  asideDonationData.goalAmountProject) *
                100
              }%`,
            }}
          />
        </section>
        <section className="flex justify-center items-center mt-4">
          <ButtonIcon
            label="¡Donar ahora!"
            icon="donate"
            variants={buttonsVariants}
            onClick={() => setOpen(!isOpen)}
          />
        </section>
        {isOpen && <DonationWindow setOpen={setOpen} />}
        <section className="divide-y-2 mt-2">
          <span className="font-thin text-lg text-patina-600">Destacados</span>
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              title={newsItem.title}
              description={newsItem.description}
              location={newsItem.location}
              date={newsItem.date}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
