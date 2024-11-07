"use client";
import { asideDonationData } from "@/utils/fakeData";
import { useEffect, useState } from "react";

export default function AsideDonations() {
  const [porcent, setPorcent] = useState<number>(0);

  useEffect(() => {
    if (asideDonationData.totalFonds > 0) {
      setPorcent(
        (asideDonationData.totalFondsToday / asideDonationData.totalFonds) * 100
      );
    }
  },[]);

  return (
    <div className="m-2">
      <div>
        <span className="font-thin text-sm text-patina-600">
          Meta de donaciones: ${asideDonationData.donorGoal}
        </span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/2 h-3 p-1 rounded-full" />
        </div>
        <span className="font-thin text-sm text-patina-600">
          Meta de apoyo a la plataforma: ${asideDonationData.donorProyet}
        </span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/4 h-3 p-1 rounded-full" />
        </div>
        <span className="font-thin text-sm text-patina-600">
          Fondos disponibles hoy: ${asideDonationData.totalFondsToday} - 
          {porcent.toFixed(2)}%
        </span>
        <div className="flex bg-patina-500 w-full h-3 items-center rounded-full shadow-sm">
          <div
            className="bg-patina-300 h-3 p-1 rounded-full"
            style={{ width: `${porcent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

