import { buttonsVariantsExit, buttonsVariantsMP } from "@/utils/funtions";
import ButtonIcon from "./buttonIcon";

export default function DonationWindow() {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-30 px-16 py-20 w-dvw">
      <div className="flex flex-col items-center justify-center w-full md:h-full rounded-3xl shadow-lg">
        <div className="relative top-4 z-50 left-28 lg:left-64">
          <ButtonIcon
            icon="exit"
            variants={buttonsVariantsExit}
            onClick={() =>
              alert("¡Gracias seguiremos trabajando por resultados!")
            }
          />
        </div>
        <div className="bg-patina-50 p-8 rounded-3xl flex flex-col items-center z-40 lg:flex-row lg:space-x-10 lg:p-12">
          <div className="flex flex-col ">
            <span className="block w-full text-patina-500 text-xl font-semibold mb-2 ">
              Donacion a la Fundacion
            </span>
            <ul className="text-sm">
              <li>¿Como se distribuye mi donacion?</li>
              <ol className="pl-3 text-xs bg-patina-100 rounded-lg">
                <li>El 65% a alimentacion escolar</li>
                <li>El 20% a alimentacion general</li>
                <li>El 15% a abarrotes</li>
              </ol>
            </ul>
            <ButtonIcon
              icon="donate"
              variants={buttonsVariantsMP}
              label="Mercado Pago"
              onClick={() => alert("¡Gracias por tu aporte!")}
            />
          </div>
          <div className="flex flex-col mt-4 lg:mt-0">
            <span className="block text-center text-patina-500 text-xl font-semibold mb-2 w-full">
              Donacion al Proyecto
            </span>
            <ul className="text-sm">
              <li>¿Porque nesesitamos donaciones?</li>
              <ol className="pl-3 bg-patina-100 rounded-lg text-xs">
                <li>Costos de mantenimiento</li>
                <li>Apoyo para auditores</li>
                <li>LLegar cada dia a mas personas</li>
              </ol>
            </ul>
            <ButtonIcon
              icon="donate"
              variants={buttonsVariantsMP}
              label="Mercado Pago"
              onClick={() =>
                alert("¡Gracias seguiremos trabajando por resultados!")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
