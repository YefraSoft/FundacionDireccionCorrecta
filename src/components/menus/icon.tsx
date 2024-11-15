import { Coins, Heart, PiggyBank, Smile } from "lucide-react";
import { useState } from "react";

interface IconPrefitProps {
  icon: string;
  label: string;
}

export default function IconPrefit({ icon, label }: IconPrefitProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative rounded-full h-16 w-16 shadow-md flex items-center justify-center cursor-pointer 
      hover:scale-105 transition duration-300 text-cello-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon === "smile" && <Smile />}
      {icon === "pig" && <PiggyBank />}
      {icon === "heart" && <Heart />}
      {icon === "coin" && <Coins />}
      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full text-center bg-cello-700 text-cello-50 text-xs rounded-b-lg py-1">
          {label}
        </div>
      )}
    </div>
  );
}
