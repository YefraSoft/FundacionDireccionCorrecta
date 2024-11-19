"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getVisibleIconsCount } from "@/utils/funtions";
import { icons } from "@/assets/staticAssets";

export default function IconCards() {
  const [currentIcons, setCurrentIcons] = useState(icons);
  const [visibleIconsCount, setVisibleIconsCount] = useState(7);

  const shiftIcons = () => {
    setCurrentIcons((prevIcons) => {
      const firstIcon = prevIcons[0];
      const newIcons = prevIcons.slice(1);
      return [...newIcons, firstIcon];
    });
  };

  const getScale = (index: number) => {
    const centerIndex = Math.floor(visibleIconsCount / 2);
    const distanceFromCenter = Math.abs(index - centerIndex);
    return 1.4 - distanceFromCenter * 0.2;
  };

  const getHeight = (scale: number) => 96 * scale;

  useEffect(() => {
    const updateVisibleIcons = () => {
      const containerWidth = window.innerWidth;
      setVisibleIconsCount(getVisibleIconsCount(containerWidth));
    };
    updateVisibleIcons();
    window.addEventListener("resize", updateVisibleIcons);
    return () => window.removeEventListener("resize", updateVisibleIcons);
  }, []);

  useEffect(() => {
    const interval = setInterval(shiftIcons, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col mx-5 py-2 overflow-hidden">
      <h1 className="text-center text-2xl font-bold text-patina-500">
        Patrocinadores
      </h1>
      <div className="flex m-1 space-x-9 lg:space-x-24 overflow-hiddn items-center justify-center">
        {currentIcons.slice(0, visibleIconsCount).map((icon, index) => (
          <motion.div
            key={icon.icon + "-" + index}
            initial={{ x: getHeight(getScale(index)) }}
            animate={{ x: 0 }}
            exit={{ x: -getHeight(getScale(index)) }}
            layout
            transition={{ ease: "easeInOut", duration: 0.5 }}
            style={{
              scale: getScale(index),
              width: getHeight(getScale(index)),
              height: getHeight(getScale(index)),
            }}
            className="flex items-center"
          >
            <Image
              width={300}
              height={300}
              alt="icon"
              src={icon.icon}
              className={`w-14 h-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
