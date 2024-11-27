import { buttonProps } from "@/utils/interfaces";
import {
  Pen,
  Plus,
  Minus,
  HandCoins,
  X,
  Search,
  UserRoundPlus,
  Plane,
} from "lucide-react";
import LoadingCircle from "./loadingCircle";

export default function ButtonIcon({
  label,
  icon,
  loading,
  onClick,
  variants,
}: buttonProps) {
  return (
    <button
      disabled={loading && loading}
      className={`flex items-center justify-center text-sm rounded-full p-1 transition-all duration-200 shadow-md hover:shadow-lg
        ${label && "gap-1 py-2 px-1"}
        ${variants?.bgColror && variants.bgColror} ${
        variants?.hoverColor ? variants.hoverColor : "hover:bg-havelockblue-300"
      }
        ${
          variants?.textColror ? variants.textColror : "text-havelockblue-600"
        }`}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          Enviando... <LoadingCircle />
        </div>
      ) : (
        label
      )}
      {icon === "exit" && <X size={20} />}
      {icon === "pen" && <Pen size={16} />}
      {icon === "add" && <Plus size={16} />}
      {icon === "delete" && <Minus size={16} />}
      {icon === "donate" && <HandCoins size={16} />}
      {icon === "find" && <Search size={16} />}
      {icon === "userAdd" && <UserRoundPlus size={16} />}
      {icon === "send" && <Plane size={16} />}
    </button>
  );
}
