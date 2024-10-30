import { buttonProps } from "@/utils/interfaces";
import { Pen, Plus, Minus } from "lucide-react";

export default function ButtonIcon({ label, icon }: buttonProps) {
  return (
    <button className="flex items-center justify-center text-sm rounded-full py-px px-1 hover:bg-havelockblue-300 text-havelockblue-950">
      {label && label}
      {icon === "pen" && <Pen size={16} />}
      {icon === "add" && <Plus size={16} />}
      {icon === "delete" && <Minus size={16} />}
    </button>
  );
}
