import Image from "next/image";

export default function Headers() {
  return (
    <header className="bg-havelockblue-500 text-white p-4">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#section1" className="hover:text-havelockblue-200">
              Blog
            </a>
          </li>
          <li>
            <a href="#section2" className="hover:text-havelockblue-200">
              Opción 2
            </a>
          </li>
          <li>
            <a href="#section3" className="hover:text-havelockblue-200">
              Opción 3
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-4 text-center">
        <Image src="testIMS" alt="IMAGEN DE PRUEBA" className="mx-auto" />
        <h1 className="text-3xl font-bold">Título de la página</h1>
        <input
          type="text"
          placeholder="DONATE NOW"
          className="mt-2 p-2 rounded-md"
        />
      </div>
      <h2 className="mt-4 text-center">Descripción breve de la página</h2>
    </header>
  );
}
