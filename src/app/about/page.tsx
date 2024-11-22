import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div className="pt-20 bg-gray-50 text-gray-800">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-center text-patina-600 mb-6">
          Direccion Correcta
        </h2>

        {/* Sección de introducción */}
        <section className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            Somos una organización sin fines de lucro comprometida con la lucha
            contra la vulnerabilidad social. Nuestra misión es facilitar la
            conexión entre empresas y cooperativas escolares, promoviendo la
            donación de alimentos, abarrotes y ropa para subsidiar las
            necesidades alimenticias de las comunidades más vulnerables. A
            través de nuestra plataforma, buscamos optimizar la distribución de
            recursos y generar un impacto positivo en las vidas de quienes más
            lo necesitan, contribuyendo al bienestar y la estabilidad de las
            familias en situación de crisis.
          </p>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Misión */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-patina-600 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-justify">
              Nuestra misión es conectar a empresas con organizaciones que
              necesitan apoyo, facilitando la donación de alimentos, ropa y
              otros recursos esenciales. A través de nuestra plataforma,
              buscamos generar un impacto positivo al subsidiar las necesidades
              de las cooperativas escolares y comunidades vulnerables,
              asegurando que los recursos lleguen a quienes más lo necesitan de
              manera eficiente y transparente.
            </p>
          </div>

          {/* Visión */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-patina-600 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-lg text-justify">
              Ser la plataforma de referencia en la conexión de donantes con
              comunidades vulnerables, promoviendo un modelo de solidaridad y
              responsabilidad social que fomente un impacto continuo y positivo
              en las vidas de las personas. Queremos crear una red de apoyo
              sostenible donde las empresas y los individuos puedan contribuir
              activamente al bienestar de quienes enfrentan situaciones
              adversas.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-patina-600 mb-6 text-center">
            Nuestra Historia
          </h3>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Comenzamos operaciones en 2025, comenzamos con el objetivo de ayudar
            a las y los mexicanos a salir de advesidades finacieras. esperamos
            en un par de años mas poder llegar a las comunidades donde la ayuda
            es mas necesaria.
          </p>
        </section>

        {/* Equipo */}
        <section className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-patina-600 mb-6">
            Conoce a Nuestro Equipo
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-x-6">
            {/* Miembro 2 */}
            <div className="max-w-xs">
              <Image
                className="w-96 h-96 object-cover rounded-full mb-4 bg-patina-100"
                src="/team/member2.jpg"
                alt="Miembro del equipo"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-bold">Jose Luis Alvarado</h4>
              <p className="text-sm text-gray-500">
                Desarrollador Backend | Secure Ispector
              </p>
            </div>
            {/* Miembro 1 */}
            <div className="max-w-xs">
              <Image
                className="w-96 h-96 object-cover rounded-full mb-4 bg-patina-100"
                src="/team/member1.jpg"
                alt="Miembro del equipo"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-bold">Efrain Garcia</h4>
              <p className="text-sm text-gray-500">
                Lider de proyecto | Frontend Developer
              </p>
            </div>
            {/* Miembro 3 */}
            <div className="max-w-xs">
              <Image
                className="w-96 h-96 object-cover rounded-full mb-4 bg-patina-100"
                src="/team/member3.jpg"
                alt="Miembro del equipo"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-bold">Diego Sevilla</h4>
              <p className="text-sm text-gray-500">
                Desarrollador Backend | Tester
              </p>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="text-center">
          <p className="text-lg mb-6">
            Por favor, ayúdanos a conectar con comunidades vulnerables y generar
            un impacto positivo en las vidas de las personas. ¡No te
            arrepentiras! ¿Necesitas ayuda? Contacta con nosotros y te ayudamos
            en tu proceso de registro. ¡Gracias por tu apoyo!
          </p>
          <Link
            href="/contact"
            className="inline-block mb-6 px-6 py-3 text-white bg-patina-600 hover:bg-patina-700 rounded-lg transition duration-300"
          >
            Contáctanos
          </Link>
        </section>
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-patina-600 mb-6">
            Preguntas frecuentes
          </h3>
        </section>
        <section className="">
          <span>TEST</span>
          <form action="https://getform.io/f/bvrrmxyb" method="POST">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="message" />
            <input type="hidden" name="_gotcha" />
            <input type="checkbox" name="subscribe" value="yes" />
            <input type="hidden" name="subscribe" value="no" />
            <input type="radio" name="gender" value="male" />
            <input type="radio" name="gender" value="female" />
            <input type="radio" name="gender" value="other" />
            <select name="work-experience">
              <option value="one-year">0-1 years</option>
              <option value="one-five-years">1-5 years</option>
            </select>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}
