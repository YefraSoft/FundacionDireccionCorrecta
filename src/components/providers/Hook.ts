import { useContext } from "react";
import { dashContext } from "./dashboardProvider";
import { overContext } from "./overFlowProvider";

export const DashbardHook = () => {
  const context = useContext(dashContext);
  if (!context) {
    throw new Error("useNavBar debe ser usado dentro de NavBarProvider");
  }
  return context;
};

export const overFlowHook = () => {
  const context = useContext(overContext);
  if (!context) {
    throw new Error("overContext debe ser usado dentro de OverFlowProvider");
  }
  return context;
};
