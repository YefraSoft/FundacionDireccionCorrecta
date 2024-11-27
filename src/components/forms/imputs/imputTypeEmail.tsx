import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InputTypeEmailProps } from "@/utils/interfaces";
import {
  handleEmailChange,
  handleEmailVerify,
  handleKeyDown,
} from "@/services/handlers";

export default function InputTypeEmail({
  email,
  setEmail,
}: InputTypeEmailProps) {
  const [suggestedEmail, setSuggestedEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative mt-1 mx-4 sm:mx-0">
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleEmailChange(e, setEmail, setSuggestedEmail);
        }}
        onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSuggestedEmail("");
          handleEmailVerify(e.target.value, setIsValid);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown(e, suggestedEmail, setEmail, setIsValid);
        }}
        onFocus={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFocus(true);
          handleEmailVerify(e.target.value, setIsValid);
          if (isValid) {
            setFocus(false);
          }
        }}
        className={`p-2 rounded-xl border w-full border-patina-300 ${
          !isValid && focus && "border-pink-400"
        } caret-havelockblue-300 focus:outline-none focus:ring-1 text-sm mb-1 focus:ring-blue-500`}
      />
      <AnimatePresence>
        {suggestedEmail && (
          <motion.p
            key="suggest"
            className="text-havelockblue-500 text-xs font-thin ml-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            layout
          >
            Tab para confirmar: {suggestedEmail}
          </motion.p>
        )}
        {!isValid && focus && (
          <motion.p
            key="error"
            className="text-pink-400 text-xs font-thin ml-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            layout
          >
            El formato del correo es inválido
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
