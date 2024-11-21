"use client";
import { useState } from "react";
import ComboList from "../menus/comboList";
import { calcDays, calcMonths, calcEarnings } from "@/utils/funtions";
import { branchesData } from "@/utils/fakeData";
import { branchData } from "@/utils/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { Info, CircleCheckBig, CircleAlert } from "lucide-react";
import ButtonIcon from "../menus/buttonIcon";

export default function BranchCard() {
  const [activeBranch, setActiveBranch] = useState<branchData | null>();

  
  return (
    <div className="relative pb-1">
      <span className="relative text-havelockblue-700 font-semibold text-lg text-center">
        Donaciones por sucursal
      </span>
      <div className="flex gap-2 px-2 items-center text-sm text-havelockblue-900">
        <span>Periodo</span>
        <div className="flex border rounded-md gap-1">
          <ComboList name="day" items={calcDays} />
          <ComboList name="moth" items={calcMonths} />
        </div>
        <span>a</span>
        <div className="flex border rounded-md gap-1">
          <ComboList name="day" items={calcDays} />
          <ComboList name="moth" items={calcMonths} />
        </div>
      </div>
      <div
        className="flex flex-col pb-1 m-1 sm:w-1/2 sm:h-40 shadow-lg border rounded-md text-sm 
    border-havelockblue-500 text-havelockblue-950 overflow-y-scroll"
      >
        {branchesData.map((branch) => (
          <div
            key={branch.id}
            className="hover:bg-havelockblue-100 mt-1 mx-1 pb-1 rounded-sm transition-all 
      duration-500 hover:shadow active:scale-95"
          >
            <div className="flex justify-between px-1 sm:px-5 items-center">
              <span className="w-full" onClick={() => setActiveBranch(activeBranch === branch ? null : branch)}>
                {branch.sucursal}
              </span>
              <div className="flex gap-3 items-center mt-1">
                <ButtonIcon icon="pen" />
                <ButtonIcon icon="add" />
                <ButtonIcon icon="delete" />
              </div>
            </div>
            {branch.payRequest.map((data) => (
              <AnimatePresence key={data.id}>
                {activeBranch?.id === branch.id && (
                  <motion.div
                    key={data.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                    className="flex text-xs justify-between mx-1 px-1 items-center rounded-sm mt-1
                  shadow-sm border-t border-havelockblue-200 bg-havelockblue-50"
                  >
                    <span className="pr-3">{data.date}</span>
                    <span className="grow">{data.title}</span>
                    {data.status === "Pendiente" && (
                      <div className="flex items-center">
                        <span className="pr-3 font-semibold text-havelockblue-700">{`$${data.amount}`}</span>
                        <Info className="text-havelockblue-500" size={20} />
                      </div>
                    )}
                    {data.status === "Aprobado" && (
                      <div className="flex items-center">
                        <span className="pr-3 font-semibold text-patina-700">{`$${data.amount}`}</span>
                        <CircleCheckBig className="text-patina-500" size={20} />
                      </div>
                    )}
                    {data.status === "Rechazado" && (
                      <div className="flex items-center">
                        <span className="pr-3 font-semibold text-rose-700">{`$${data.amount}`}</span>
                        <CircleAlert className="text-rose-500" size={20} />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        ))}
        <AnimatePresence>
          {activeBranch && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute flex gap-2 ml-5 items-center text-sm text-havelockblue-900 -bottom-6
        bg-havelockblue-50 border-havelockblue-300 px-4 py-1 shadow-md rounded-lg"
            >
              <span>Ganancias totales: </span>
              <span className="font-bold text-patina-500">{`$${calcEarnings(activeBranch)}`}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
