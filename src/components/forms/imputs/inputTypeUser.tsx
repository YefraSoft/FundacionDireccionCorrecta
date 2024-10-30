import { InputTypeUserProps } from "@/utils/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function InputTypeUser({
  plaseHolder,
  user,
  setUser,
}: InputTypeUserProps) {
  const [isValid, setIsValid] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={plaseHolder ? plaseHolder : "Usuario"}
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
          setIsValid(e.target.value.length >= 6);
        }}
        onFocus={() => {
          setFocus(true);
          if (isValid) {
            setFocus(false);
          }
        }}
        className={`p-2 w-full rounded-xl border text-patina-500 mb-1 border-patina-300 ${
          !isValid && focus && "border-pink-400"
        } focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm`}
      />
      <AnimatePresence>
        {!isValid && focus && (
          <motion.p
            className="text-pink-400 text-xs font-thin ml-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            layout
          >
            El usuario debe tener al menos 6 caracteres
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}