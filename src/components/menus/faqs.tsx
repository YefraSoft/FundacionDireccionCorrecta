import { privacyPolicyMarkdown } from "@/utils/funtions";
import ButtonIcon from "./buttonIcon";
import DetailWindow from "./detailWindow";
import { useState } from "react";
import Link from "next/link";

export default function Faqs() {
  const [showPolise, setPolise] = useState<boolean>(false);
  return (
    <section className="mb-8 space-y-4 px-5">
      <h3 className="text-2xl font-semibold text-cello-800 mb-4 text-center">
        Preguntas frecuentes
      </h3>
      <section>
        <h4 className="text-lg font-semibold text-center text-cello-600 mb-4">
          Informacion General
        </h4>
        <ul className="space-y-4">
          <li className="text-patina-700">
            <strong>¿Cuál es el nombre oficial de la plataforma?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3">Direccion Correcta</span>
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Desde cuando opera la plataforma?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3">
                Iniciaremos operaciones en abril de 2025
              </span>
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Cuál es el objetivo principal de la plataforma?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span> Ofrecer un apollo de manera
              constante a todas las personas en mexico que esten pasando por una
              advesidad finaciera. Con un enfoque principal sobre la
              alimentacion de los niños en educacin basica.
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Cómo puedo registrarme?</strong>
            <p className="text-justify text-sm">
              <span className="pl-3" />
              Puedes registrarte
              <Link href="/landing" className="text-blue-500">
                AQUÍ
              </Link>
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="text-lg font-semibold text-center text-cello-600 mb-4">
          Transparecia y Rendicion de cuentas
        </h4>
        <ul className="space-y-4">
          <li className="text-patina-700">
            <strong>¿Cómo se utilizaran las donaciones recibidas?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span> Un 65% de los fondos estaran
              destinados a las copeerativas de las escuelas afiliadas, para
              intentar subsidiar los comedores estudiantiles. Un 20% a los
              restaurantes afiliados y un 15% a tiendas de abarrotes afiliadas.
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Existe algun informe el cual se pueda consultar?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span> Nuestra plataforma muesta las
              donaciones realizadas por dia, las puedes consultar en nuestra
              seccion{" "}
              <Link href="/blog" className="text-blue-500">
                blog.
              </Link>
            </p>
          </li>
          <li className="text-patina-700">
            <strong>
              ¿Cuáles son los gastos administrativos de la plataforma?
            </strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span> Actualmente se cuenta con un gasto
              operativo que ronda los $500.00 MXN mensuales.
            </p>
          </li>
          <li className="text-patina-700">
            <strong>
              ¿Cómo se garantiza la transparencia y rendicion de cuentas en la
              gestion de donaciones?
            </strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span> Nustros procesos son completamnete
              transparentes, ya que se puede ver los gastos realizdos en nuestro
              blog, y si estas registado, puedes acudir a cualquiera de nuestros
              afiliados y observar la efectividad de las donaciones. Asi como
              reportar insidencias.
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Cómo se evita la malversación?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3">Direccion Correcta</span>, depende en un
              100% de la moralidad de las personas afiliadas. Confiamos en las
              personas que quieren de verdad hacer un cambio en mexico. Sin
              embargo, ponemos a disposicion un modelo de auditorias donde las
              personas pueden registarse y recibir beneficios especiales.
            </p>
            <Link href="/landing" className="pl-1 text-blue-500 text-sm">
              Registrate.
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="text-lg text-center font-semibold text-cello-600 mb-4">
          Seguridad y privacidad
        </h4>
        <ul className="space-y-4">
          <li className="text-patina-700">
            <strong>¿Cómo se utilizan mis datos?</strong>
            <p className="text-justify text-sm items-center">
              <span className="pl-1" />
              Puedes revisar nuestro aviso de privacidad, los datos son unica y
              exclusivamente para facturaciones.
              <ButtonIcon
                icon="find"
                onClick={() => setPolise(true)}
                label="Ver"
              />
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Cómo se manejan las donaciones?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span>Todas las transacciones son mediante
              el procesador de pagos de Mercado Pago, y no manejamos sistema de
              suscripciones cada donacion es de manera unica y voluntaria.
            </p>
          </li>
          <li>
            <strong>¿Cuales son los metodos de seguridad en la pagina?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span>Nuestro sitio cuenta con proteccion
              SSL, los datos se envian de manera cifrada.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h4 className="text-lg text-center font-semibold text-cello-600 mb-4">
          Impacto y donaciones
        </h4>
        <ul className="space-y-4">
          <li className="text-patina-700">
            <strong>¿Cómo se miden los resultados?</strong>
            <p className="text-justify text-sm items-center text-cello-300">
              <span className="pl-1" />
              Se pretende un sistema de encuestas...
            </p>
          </li>
          <li className="text-patina-700">
            <strong>¿Se emiten comprobantes para fines fiscales?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span>Todo usuario resgitrado que realize
              una donacion, puede exigir su factura con maximo 2 semanas de
              proroga.
            </p>
          </li>
          <li>
            <strong>¿Existe algun boletin de noticias?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span>Puedes visitar nuestro blog, donde
              se publican noticias y actualizaciones en el proyecto.
            </p>
          </li>
          <li>
            <strong>¿Como puedo contactar o reportar insidencias?</strong>
            <p className="text-sm text-justify">
              <span className="pl-3"></span>Puedes hacerlo en el siguiente
              <Link href="/support/#ReporForm" className="text-blue-500">
                {" "}
                formulario.
              </Link>
            </p>
          </li>
        </ul>
      </section>
      {showPolise && (
        <DetailWindow
          button={{ onClick: () => setPolise(false) }}
          description={privacyPolicyMarkdown}
        />
      )}
    </section>
  );
}
