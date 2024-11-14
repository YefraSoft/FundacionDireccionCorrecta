import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Links from "../menus/links";
import { pagesIndex } from "@/assets/staticAssets";

export default function Footer() {
  return (
    <footer className="bg-patina-800 text-white py-8 px-4 mt-8 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-rose-500">VERSION BETA- FUNCIONES LIMITADAS</div>
        <div className="mb-6">
          <span className="block text-sm font-medium mb-2">
            Visita nuestras redes sociales
          </span>
          <div className="flex justify-center space-x-6 text-2xl">
            <Link
              href="https://facebook.com"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              <Facebook />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              <Instagram />
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-12 text-sm mb-6">
          <div>
            <span className="block font-medium mb-2">Soporte</span>
            <ul>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-patina-500 transition duration-300"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-patina-500 transition duration-300"
                >
                  Crear reporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="block font-medium mb-2">Navegación</span>
            <Links
              menuItems={pagesIndex}
              hoverColor="flex-col ml-0 space-x-0"
            />
          </div>
        </div>
        <div className="text-sm text-patina-500">
          <p>&copy; 2024 Direccion Correcta. Todos los derechos reservados.</p>
          <div className="bg-merPago" />
          <div className="bg-rose-500" />
        </div>
      </div>
    </footer>
  );
}
