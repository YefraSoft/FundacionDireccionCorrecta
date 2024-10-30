import {
  unlockButtonReg,
  unlockButtonLog,
  unlockButtonForg,
} from "@/services/handlers";
import { disableButtonProps } from "@/utils/interfaces";
import { Fingerprint, UserRoundCog } from "lucide-react";

export default function InputTypeButton({
  lavel,
  user,
  password,
  email,
  rol,
  variant,
}: disableButtonProps) {
  const isDisabled = () => {
    if (user && password) {
      return unlockButtonReg(user, password, email, rol);
    } else if (password) {
      return unlockButtonLog(email, password);
    } else {
      return unlockButtonForg(email);
    }
  };
  return (
    <button
      type="submit"
      disabled={isDisabled()}
      className={`flex font-semibold ${variant?.bgColror ? variant.bgColror : "bg-patina-100"} py-2 px-4 rounded-full transition ease-in-out
        ${variant?.textColror ? variant.textColror : "text-patina-400"} duration-300 shadow-sm hover:shadow-lg disabled:cursor-not-allowed 
        disabled:opacity-75 mt-2 enabled:opacity-100`}
    >
      {variant?.icon ? <UserRoundCog size={26} strokeWidth="1.3" /> : <Fingerprint size={26} strokeWidth="1.3"/>}
      <div className="grow mr-5">{lavel}</div>
    </button>
  );
}
