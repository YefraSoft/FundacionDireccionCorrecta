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
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              className="opacity-25 text-havelockblue-400"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75 text-havelockblue-600"
              fill="none"
              d="M4 12a8 8 0 0116 0"
              strokeWidth="4"
            ></path>
          </svg>
          Enviando...
        </span>
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
