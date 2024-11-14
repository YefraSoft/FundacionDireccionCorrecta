"use client";
import { linkProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Links(props: linkProps) {
  return (
    <div
      className={`ml-10 flex items-baseline space-x-4 ${
        props.hoverColor && props.hoverColor
      }`}
    >
      {props.menuItems.map((item, index) => (
        <motion.div
          key={item.url}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={item.url}
            className="text-patina-50 hover:text-patina-500 px-3 py-2 
            rounded-md text-sm font-medium transition-colors duration-300"
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
