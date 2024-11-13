"use client";
import { asideDonationData } from "@/utils/fakeData";
import { useEffect, useState } from "react";
import ButtonIcon from "./buttonIcon";
import DonationWindow from "./donationWindow";
import OverFlowProvider from "../providers/overFlowProvider";
import { overFlowHook } from "../providers/Hook";

export default function AsideDonations() {
  const [porcent, setPorcent] = useState<number>(0);
  const buttonsVariants = {
    bgColror: "bg-patina-200",
    hoverColor: "hover:bg-patina-300",
  };

  useEffect(() => {
    if (asideDonationData.totalFonds > 0) {
      setPorcent(
        (asideDonationData.totalFondsToday / asideDonationData.totalFonds) * 100
      );
    }
  }, []);

  return (
    <div className="m-2">
      <div className="p-6">
        <span className="font-thin text-sm text-patina-600">Fondos:</span>
        <div className="flex bg-patina-500 w-full h-3 items-center rounded-full shadow-sm">
          <div
            className="bg-patina-300 h-3 p-1 rounded-full transition-all duration-500"
            style={{ width: `${porcent.toFixed(2)}%` }}
          />
        </div>
        <span className="font-thin text-sm text-patina-600">
          Meta de donaciones: ${asideDonationData.donorGoal} MXN
        </span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/2 h-3 p-1 rounded-full" />
        </div>
        <span className="font-thin text-sm text-patina-600">
          Meta de apoyo a la plataforma: ${asideDonationData.donorProyet} MXN
        </span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/4 h-3 p-1 rounded-full" />
        </div>
        <div className="flex justify-center items-center mt-2">
          <ButtonIcon
            label="¡Donar ahora!"
            icon="donate"
            variants={buttonsVariants}
            onClick={() => setOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <OverFlowProvider>
            <DonationWindow />
          </OverFlowProvider>
        )}
      </div>
    </div>
  );
}
