import { buttonProps } from "@/utils/interfaces";
import { Pen, Plus, Minus, HandCoins, X, Search, UserRoundPlus } from "lucide-react";

export default function ButtonIcon({
  label,
  icon,
  onClick,
  variants,
}: buttonProps) {
  return (
    <button
      className={`flex items-center justify-center text-sm rounded-full p-1 transition-all duration-200 shadow-md hover:shadow-lg
        ${label && "gap-1 py-2 px-1"}
        ${variants?.bgColror && variants.bgColror} ${
        variants?.hoverColor ? variants.hoverColor : "hover:bg-havelockblue-300"
      }
        ${
          variants?.textColror ? variants.textColror : "text-havelockblue-950"
        }`}
      onClick={onClick}
    >
      {label && label}
      {icon === "exit" && <X size={20} />}
      {icon === "pen" && <Pen size={16} />}
      {icon === "add" && <Plus size={16} />}
      {icon === "delete" && <Minus size={16} />}
      {icon === "donate" && <HandCoins size={16} />}
      {icon === "find" && <Search size={16} />}
      {icon === "userAdd" && <UserRoundPlus size={16} />}
    </button>
  );
}
