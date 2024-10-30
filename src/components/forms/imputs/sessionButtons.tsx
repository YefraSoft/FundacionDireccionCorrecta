import { staticAssets } from "@/assets/staticAssets";
import Image from "next/image";

export default function SessionButtons() {
  return (
    <div className="flex flex-col w-full mt-1">
      <button
        className="flex w-full py-2 rounded-full transition ease-in-out justify-center items-center bg-patina-100
        duration-300 shadow-sm hover:shadow-lg font-semibold text-patina-500 gap-2"
      >
        <Image alt="goo" width={26} height={26} src={staticAssets.icons.google} />
        Google
      </button>
      <div className="flex mt-1 gap-1">
        <button
          className="flex w-1/2 py-2 rounded-full transition ease-in-out bg-patina-100 justify-center items-center
        duration-300 shadow-sm hover:shadow-lg font-semibold text-patina-500 gap-1"
        >
          <Image alt="mic" width={26} height={26} src={staticAssets.icons.micros} />
          Microsoft
        </button>
        <button
          className="flex w-1/2 py-2 rounded-full transition ease-in-out bg-patina-100
        duration-300 shadow-sm hover:shadow-lg justify-center items-center font-semibold text-patina-500 gap-1"
        >
          <Image alt="mac" width={26} height={26} src={staticAssets.icons.mac} />
          Icloud
        </button>
      </div>
    </div>
  );
}