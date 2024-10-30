"use client";
import { UserRoundCheck, UserRoundPen, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import ForgotForm from "./type/forgot";
import LoginFom from "./type/login";
import RegisterForm from "./type/register";
import { handleSelectComponent } from "@/services/handlers";

export default function MainForm() {
  const [activeComp, setActiveComp] = useState<string>("login");
  return (
    <div className="flex flex-col px-5 mt-4 shadow-xl rounded-xl justify-center items-center w-3/4 bg-patina-50 pt-2 z-10">
      <h2 className="text-2xl font-bold text-patina-600">
        Apoya a México con el corazón
      </h2>
      <p className="text-patina-400 text-justify px-3 text-sm mt-1">
        <span className="pl-3 font-bold">Conectamos</span> donaciones con
        instituciones Méxicanas que brindan apoyo a
        <span className="font-bold"> personas</span> de bajos recursos.
        Contribuye a través de donaciones
        <span className="font-bold"> seguras y transparentes.</span> <br />
        <span className="block italic font-bold w-full text-center">
          ¡Juntos podemos hacer la diferencia!
        </span>
      </p>

      <div className="mt-3">
        {activeComp === "login" && <LoginFom />}
        {activeComp === "regis" && <RegisterForm />}
        {activeComp === "forg" && <ForgotForm />}
      </div>

      <div className="flex gap-3 p-5 divide-x-2 divide-patina-400">
        <button
          className="flex flex-col justify-center items-center text-havelockblue-600 text-xs lg:text-base px-2 transition-all 
          ease-in-out duration-300 hover:shadow-md hover:rounded-sm text-center"
          onClick={() => handleSelectComponent(setActiveComp, "login")}
        >
          <UserRoundCheck size={26} strokeWidth="1.3" />
          Iniciar sesion
        </button>

        <button
          className="flex flex-col justify-center items-center text-havelockblue-600 text-xs lg:text-base px-2 transition-all 
          ease-in-out duration-300 hover:shadow-md hover:rounded-sm text-center"
          onClick={() => handleSelectComponent(setActiveComp, "forg")}
        >
          <UserRoundPen size={26} strokeWidth="1.3" />
          ¿Olvidó su contraseña?
        </button>

        <button
          className="flex flex-col justify-center items-center text-havelockblue-600 text-xs lg:text-base px-2 transition-all 
          ease-in-out duration-300 hover:shadow-md hover:rounded-sm text-center"
          onClick={() => handleSelectComponent(setActiveComp, "regis")}
        >
          <UserRoundPlus size={26} strokeWidth="1.3" />
          Crear cuenta
        </button>
      </div>
    </div>
  );
}