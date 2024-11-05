"use client";
import { useState, useEffect } from "react";

const icons = [
  { icon: "1" },
  { icon: "2" },
  { icon: "3" },
  { icon: "4" },
  { icon: "5" },
  { icon: "6" },
  { icon: "7" },
  { icon: "8" },
  { icon: "9" },
  { icon: "10" },
];

export default function IconCards() {
  const [visibleIcons, setVisibleIcons] = useState(icons.slice(0, 5)); // Solo muestra los primeros 5
  const [animationClass, setAnimationClass] = useState("");

  // Función para desplazar el primer ícono y añadirlo al final
  const shiftIcons = () => {
    setAnimationClass("-translate-x-32 opacity-0"); // Añade clase de salida
    setTimeout(() => {
      setVisibleIcons((prevIcons) => {
        const firstIcon = prevIcons[0];
        const newIcons = [...prevIcons.slice(1), firstIcon]; // Cambia el orden
        return newIcons;
      });
      setAnimationClass("translate-x-0 opacity-100"); // Añade clase de entrada
    }, 500); // Duración de la animación de salida
  };

  // Iniciar el bucle de desplazamiento
  useEffect(() => {
    const interval = setInterval(shiftIcons, 2000); // Cambia cada 2 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte
  }, []);

  return (
    <div className="flex flex-col mx-5 items-center">
      <h1 className="text-center mb-4">Patrocinadores</h1>
      <div className="flex justify-between items-center space-x-4 overflow-hidden">
        {visibleIcons.map((icon, index) => (
          <div
            key={index}
            className={`w-24 h-24 bg-cello-${index}00 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ease-in-out transform ${animationClass}`}
          >
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
