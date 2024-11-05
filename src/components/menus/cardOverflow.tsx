"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardRight from "../cards/cardRight";
import { staticAssets } from "@/assets/staticAssets";
import { singleCardData, cardsData } from "@/utils/interfaces";

const simulateFetch = async (): Promise<cardsData> => {
  const content: cardsData = {
    content: [
      {
        id: 1,
        imageUrl: staticAssets.images.donationWoman,
        title: "¡LLegamos a hidalgo!",
        subtitle: "La fonda de pepe se suma al movimiento",
        description:
          "El restaurante la fonda de pepe se suma al movimiento, llegamos a hidalgo",
      },
      {
        id: 2,
        imageUrl: staticAssets.images.blackWitheKids,
        title: "¡La niñes es necesaria!",
        subtitle: "Donacion de jugetes para los peques",
        description: "Todos deben de tener derecho de jugar.",
      },
      {
        id: 3,
        imageUrl: staticAssets.images.schoolKids,
        title: "¡Lo logramos!",
        subtitle: "Conalep 085",
        description: "Coperativa totalmente subsidiada para los alumnos",
      },
      {
        id: 4,
        imageUrl: staticAssets.images.holeKids,
        title: "¡Si pasas eres uno de nosotros!",
        subtitle: "Pequeños hondureños buscando un mejor futuro",
        description: "Se ayudo en el ya largo viaje que llevan estos pequeños.",
      },
    ],
  };
  try {
    // Simula un retraso de 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Aquí lanzamos un error intencionalmente
    throw new Error("Error simulado: la consulta ha fallado");
  } catch (error) {
    console.log("Consulta fallida:", error);
    // Retorna el objeto simulado
    return content;
  }
};

export default function CardOverflow() {
  const [cardContents, setcardContents] = useState<singleCardData[]>([]); //Datos del blog
  const [isLoad, setLoad] = useState<boolean>(true); //Estado de carga
  const [currentCard, setCurrentCard] = useState<number>(0); //Indice de tarjeta
  //FUNCION DE TRANSICION DE ESTADOS

  //Al inicio cargar los datos del blog
  useEffect(() => {
    simulateFetch()
      .then((cardData: cardsData) => {
        setcardContents(cardData.content);
        setLoad(false);
      })
      .catch((cardData: cardsData) => {
        setcardContents(cardData.content);
        setLoad(false);
      });
  }, []);

  //Funcion de cambio de tarjeta
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardContents.length);
  };
  //Intervalo de tiempo
  useEffect(() => {
    const interval = setInterval(nextCard, 6500);
    return () => clearInterval(interval);
  });

  const content = cardContents[currentCard];
  return (
    <div className="absolute p-2 w-dvw md:w-9/12 md:ml-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-1/2 md:-top-10">
      <AnimatePresence mode="wait">
        {isLoad ? (
          <motion.div
            key={"content.id"}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex"
          >
            <Image
              alt="lgrafica"
              width={1280}
              height={920}
              className="md:transform md:-translate-y-32 md:-translate-x-20 lg:absolute lg:scale-75 lg:-left-64"
              src={staticAssets.background.bgGreenheight}
            />
          </motion.div>
        ) : (
          <motion.div
            key={content.id}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <CardRight {...content} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
