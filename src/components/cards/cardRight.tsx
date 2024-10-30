import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { staticAssets } from "@/assets/staticAssets";
import { singleCardData } from "@/utils/interfaces";

export default function CardRight(content: singleCardData) {
  return (
    <div className="flex">
      <Image
        alt={content.title}
        className="absolute -z-10 -left-10 -top-10 md:-left-20 md:-top-20 lg:scale-75 lg:-left-72 lg:-top-72"
        width={1280}
        height={920}
        src={staticAssets.background.bgGreenheight}
      />
      <div
        className="transition ease-in-out duration-200 hover:scale-105 active:scale-90 
      focus:shadow-xl shadow-lg lg:w-full rounded-xl border bg-patina-50 text-sm"
      >
        <Link href={`blogentry/${content.id}`}>
          <Image
            alt={content.title}
            className="rounded-2xl sm:rounded-3xl p-2 lg:max-h-96 sm:p-4 w-96 sm:w-full object-cover"
            width={1280}
            height={920}
            src={content.imageUrl}
            priority
          />
        </Link>
        <div className="p-6 bg-patina-50 rounded-b-lg">
          <p className="text-xs text-patina-400 sm:text-sm">
            {content.description}
          </p>
        </div>
      </div>
      <div className="ml-1 md:ml-5 lg:w-full">
        <h2 className="text-xl sm:text-3xl font-semibold text-patina-50 mb-2">
          {content.title}
        </h2>
        <p className="text-xs md:text-sm text-patina-200">{content.subtitle}</p>
        <Link
          href={`blogentry/${content.id}`}
          className="flex sm:w-24 h-6 p-2 mt-1 text-sm justify-center items-center rounded-lg bg-patina-50 text-patina-500 transition 
          ease-in-out hover:shadow-lg active:scale-75 hover:bg-patina-100 duration-300"
        >
          Detalles <MoveRight size={24} strokeWidth="1.3" className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
