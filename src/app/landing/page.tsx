import Image from "next/image";
import { staticAssets } from "@/assets/staticAssets";
import MainForm from "@/components/forms/mainForm";

export default function Page() {
  return (
    <div className="flex flex-col-reverse h-lvh lg:flex-row p-1 bg-gray-50">
      <div className="flex flex-col px-5 mt-2 md:mt-0 h-full md:px-5 lg:w-1/3 items-center justify-center lg:rounded-l-md border">
        <Image
          alt="landigIMG"
          width={1280}
          height={852}
          src={staticAssets.background.bgBlue}
          className="w-full h-full absolute blur-sm"
        />
        <h3 className="text-patina-400 text-lg font-semibold z-10">
          Bienvenido
        </h3>
        <MainForm />
      </div>
      <div className="h-1/3 lg:h-full lg:w-2/3 z-10">
        <Image
          alt="landigIMG"
          width={1280}
          height={852}
          src={staticAssets.images.KidMexican}
          className="w-full h-full object-cover lg:rounded-r-md"
        />
      </div>
    </div>
  );
}
