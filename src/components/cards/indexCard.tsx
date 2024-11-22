import { IndexCardProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";

export default function IndexCard({
  title,
  description,
  image,
  button,
}: IndexCardProps) {
  return (
    <div className="mb-5 md:mx-auto">
      <div
        className="absolute bg-patina-50 h-48 w-64 sm:h-52 sm:w-72 rounded-lg transform sm:-translate-x-1/4 translate-y-6 p-3 shadow-lg
      hover:shadow-xl transition-all duration-300 text-patina-800 overflow-hidden"
      >
        {/*<Image
          src={bgImage}
          alt={`image ${bgImage}`}
          width={200}
          height={100}
          className="absolute object-contain scale-125 h-48 w-full sm:h-52 sm:w-72 transform -translate-x-3 -translate-y-3 rotate-90 -z-10 overflow-hidden"
        />*/}
        <h3 className="md:text-xl font-semibold mt-2 ">{title}</h3>
        <p className="text-sm mt-2 ">{description}</p>
        <button
          className="mt-2 text-sm md:text-base p-2 rounded bg-patina-400 text-patina-100"
          onClick={button.onClick}
        >
          Ver mas
        </button>
      </div>
      <div className="flex h-60 sm:h-64 sm:w-[26rem] rounded-lg items-center justify-end p-3 overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-60 h-60 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
