"use client";
import { AnimatePresence, motion } from "framer-motion";
import Links from "../menus/links";
import { pagesIndex, staticAssets } from "@/assets/staticAssets";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-svw bg-patina-400 shadow-md rounded-b-xl z-10">
      <div className="w-4/5 mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={staticAssets.icons.sun}
                alt="Logo"
                width={30}
                height={30}
              />
              <span className="text-2xl font-bold text-patina-50 hover:text-patina-500 transition-colors duration-300">
                Direccion Correcta
              </span>
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <Links menuItems={pagesIndex} />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-patina-50 hover:bg-patina-500 bg-transparent border-patina-600 md:hidden"
          >
            {isMenuOpen ? (
              <motion.div
                key="chevron-down"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronDown size={32} className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chevron-right"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronDown size={32} className="h-6 w-6" />
              </motion.div>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-patina-500 rounded-b-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {pagesIndex.map((item, index) => (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.url}
                    className="transition-colors duration-300 text-patina-50 
                    hover:bg-patina-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
