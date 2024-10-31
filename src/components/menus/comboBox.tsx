import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { comboBoxProps } from "@/utils/interfaces";

export default function ComboBox({
  items,
  placeholder,
  selectedItem,
  setSelectedItem,
  attendants,
}: comboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState<boolean>(false);
  const itemList = items ? (Array.isArray(items) ? items : [items]) : [];
  const attendantsList = attendants? Array.isArray(attendants) ? attendants: [attendants]: [];
  return (
    <div className="relative mt-1">
      <input
        type="text"
        value={selectedItem}
        placeholder={placeholder}
        readOnly
        onFocus={() => setIsOpen(!isOpen)}
        onBlur={() => {
          setIsOpen(!isOpen);
          setOptionSelected(selectedItem ? false : true);
        }}
        className={`p-2 w-full rounded-xl border text-patina-500 mb-1 border-patina-300 ${
          optionSelected && "border-pink-400"
        } focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm`}
      />
      {!isOpen ? (
        <motion.div
          key="chevron-down"
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          exit={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute right-2 top-2"
        >
          <ChevronDown
            size={24}
            strokeWidth="1.3"
            onClick={() => setIsOpen(!isOpen)}
            className="text-havelockblue-500"
          />
        </motion.div>
      ) : (
        <motion.div
          key="chevron-right"
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute right-2 top-2"
        >
          <ChevronDown
            size={24}
            strokeWidth="1.3"
            onClick={() => setIsOpen(!isOpen)}
            className="text-havelockblue-500"
          />
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute z-10 w-full bg-white border border-patina-300 rounded-xl shadow-lg overflow-x-hidden 
              ${itemList.length >= 5 ? "overflow-y-scroll" : ""}
              ${attendantsList.length >= 3 ? "overflow-y-scroll" : ""} max-h-56`}
            transition={{ ease: "easeInOut" }}
          >
            {itemList &&
              itemList.map((item, index) => (
                <motion.li
                  key={`item-${index}`}
                  onClick={() => {
                    setSelectedItem(item);
                    setIsOpen(false);
                    setOptionSelected(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-sm select-none py-2 px-4 hover:bg-gray-100"
                >
                  <span>{item}</span>
                </motion.li>
              ))}
            {attendantsList &&
              attendantsList.map((branch) => (
                <div key={branch.branchID} className="flex flex-col p-1 pl-2">
                  <span className="font-bold text-sm text-gray-700 mb-1">
                    {branch.branchName}
                  </span>
                  {branch.attendants.map((attendant, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedItem(attendant.name);
                        setIsOpen(false);
                        setOptionSelected(false);
                      }}
                      className="cursor-pointer flex text-xs font-light text-patina-400 ml-4 hover:bg-gray-100"
                    >
                      <span>{attendant.name}</span>
                      <span className="ml-2">{attendant.shift}</span>
                    </div>
                  ))}
                </div>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
