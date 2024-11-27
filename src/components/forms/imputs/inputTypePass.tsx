import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeAlert, BadgeCheck, Eye, EyeOff } from "lucide-react";
import { InputTypePassProps, ValidationState } from "@/utils/interfaces";
import { handlePasswordChange } from "@/services/handlers";

export default function InputTypePass({
  password,
  setPassword,
}: InputTypePassProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [validation, setValidation] = useState<ValidationState>({
    minLength: false,
    hasSymbol: false,
    isValid: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative mt-1 mx-4 sm:mx-0">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handlePasswordChange(e, setPassword, setValidation)
        }
        onFocus={() => {
          setIsFocused(true);
          if (validation.isValid) {
            setIsFocused(false);
          }
        }}
        className={`p-2 w-full rounded-xl border border-patina-300 mb-1 text-patina-500 ${
          !validation.isValid && isFocused && "border-pink-400"
        } focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm`}
      />

      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        <AnimatePresence>
          {showPassword ? (
            <motion.div
              key="eye-off"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="absolute right-2 top-2"
            >
              <EyeOff
                size={24}
                strokeWidth="1.3"
                className="text-havelockblue-500"
              />
            </motion.div>
          ) : (
            <motion.div
              key="eye"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="absolute right-2 top-2"
            >
              <Eye
                size={24}
                strokeWidth="1.3"
                className="text-havelockblue-500"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {!validation.isValid && (
          <motion.div
            key={"error"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", delay: 0.5 }}
            layout
          >
            {isFocused && (
              <ul className="text-xs font-thin  text-patina-600">
                <li className="flex items-center">
                  {validation.minLength ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <BadgeCheck
                        size={18}
                        strokeWidth="1.3"
                        className="text-seaGreen-dark ml-3 mr-1"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="non-Check"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <BadgeAlert
                        size={18}
                        strokeWidth="1.3"
                        className="text-rose-400 ml-3 mr-1"
                      />
                    </motion.div>
                  )}
                  Debe tener al menos 6 caracteres
                </li>
                <li className="flex items-center">
                  {validation.hasSymbol ? (
                    <motion.div
                      key="check-Syn"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <BadgeCheck
                        size={18}
                        strokeWidth="1.3"
                        className="text-seaGreen-dark ml-3 mr-1"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="non-check-syn"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    >
                      <BadgeAlert
                        size={18}
                        strokeWidth="1.3"
                        className="text-rose-400 ml-3 mr-1"
                      />
                    </motion.div>
                  )}
                  Debe tener al menos un símbolo
                </li>
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}