import Image from "next/image";
import ButtonIcon from "./buttonIcon";
import { staticAssets } from "@/assets/staticAssets";
import { buttonsVariantsMP } from "@/utils/funtions";

export default function Header() {
  const buttonsVariantsIndex = {
    bgColror: "bg-patina-200",
    textColror: "text-patina-800 mt-2",
    hoverColor: "hover:bg-patina-300",
  };
  return (
    <div className="flex flex-col items-center justify-center bg-patina-400 h-[80svh]">
      <Image
        width={300}
        height={300}
        src={staticAssets.icons.logo}
        alt="iconHeart"
        className="absolute top-24 animate-heartbeat"
      />
      <div className="absolute text-center w-full">
        <h1 className="text-4xl font-bold text-patina-50 z-10">
          Fundación
          <span className="pl-1 font-bold italic">Dirección Correcta</span>
        </h1>
      </div>
      <div className="flex flex-col absolute w-fit lg:w-1/2 top-1/2 items-center justify-center px-2 ">
        <p className="font-thin text-justify text-patina-100">
          <span className="pl-2" />
          Ayuda a mexico con un apoyo consante a quirnes mas lo necesiatn.
          Descubre cómo tú también puedes ser parte de este gran proyecto
          haciendo mas grande nuestra historias de éxito y construir un futuro
          mejor para la sociedad mexicana.
        </p>
        <div className="flex space-x-3 mt-2">
          <ButtonIcon
            icon="userAdd"
            variants={buttonsVariantsIndex}
            label="¡Unete ahora!"
          />
          <ButtonIcon
            icon="donate"
            variants={buttonsVariantsMP}
            label="¡Dona ahora!"
          />
          <ButtonIcon
            icon="find"
            variants={buttonsVariantsIndex}
            label="¡Descrube mas!"
          />
        </div>
      </div>
    </div>
  );
}
