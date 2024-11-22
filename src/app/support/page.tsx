"use client";
import { handleSubmitReport } from "@/services/handlers";
import { reportForm } from "@/utils/interfaces";
import { useState, ChangeEvent } from "react";

export default function Support() {
  const [loading, setLoading] = useState<boolean>(false);
  const [reportData, setReportData] = useState<reportForm>({
    details: "",
    reason: "",
    reportType: "BLOG",
    reportedBy: "",
  });

  const reportDataOnchage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-patina-50 flex flex-col justify-center items-center pt-20">
      <span className="text-rose-500">
        BERSION BETA- Solo funcionan los comentarios
      </span>
      <div className="bg-cello-50 shadow-lg rounded-lg p-6 w-full max-w-5xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cello-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <ul className="space-y-4">
            <li className="text-patina-700">
              <strong>¿Cómo se utilizan mis datos?</strong>
              <p>Da clic para leer nuestro aviso de privacidad.</p>
            </li>
            <li className="text-patina-700">
              <strong>¿Cómo se evita la malversación?</strong>
              <p>
                Para eso, necesitamos personas como tú, que quieran ayudarnos
                levantando las manos como auditores voluntarios.
                <a href="#" className="text-blue-500">
                  REGÍSTRATE AQUÍ
                </a>
              </p>
            </li>
            <li className="text-patina-700">
              <strong>¿Cómo puedo registrarme?</strong>
              <p>
                Puedes registrarte
                <a href="#" className="text-blue-500">
                  AQUÍ
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cello-800 mb-4">
            Envíanos tu comentario
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) =>
              handleSubmitReport(e, setLoading, setReportData, reportData)
            }
          >
            <input
              placeholder="Motivo"
              className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
              required
            />
            <textarea
              placeholder="Escribe tus sugerencias, quejas o comentarios..."
              className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
              rows={4}
            ></textarea>
            <button className="bg-cello-500 text-cello-50 px-6 py-2 rounded-lg hover:bg-cello-600 transition">
              Enviar
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Formulario de Reportes
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) =>
              handleSubmitReport(e, setLoading, setReportData, reportData)
            }
          >
            <div>
              <label htmlFor="reportedBy" className="block text-cello-700">
                Tu nombre
              </label>
              <input
                type="text"
                id="reportedBy"
                name="reportedBy"
                value={reportData.reportedBy}
                onChange={reportDataOnchage}
                className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
                required
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-cello-700">
                Razón del reporte
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={reportData.reason}
                onChange={reportDataOnchage}
                className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
                required
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-cello-700">
                Detalles del reporte
              </label>
              <textarea
                id="details"
                name="details"
                value={reportData.details}
                onChange={reportDataOnchage}
                placeholder="Especifica los detalles de tu reporte..."
                className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="reportType" className="block text-cello-700">
                Tipo de reporte
              </label>
              <select
                id="reportType"
                name="reportType"
                value={reportData.reportType}
                onChange={reportDataOnchage}
                className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
                required
              >
                <option value="PRODUCT">Producto</option>
                <option value="DONATION">Donación</option>
                <option value="BLOG">Blog</option>
                <option value="OTHER">Otro</option>
                <option value="PLATFORM">Plataforma</option>
                <option value="PAYMENT">Pago</option>
                <option value="EMBEZZLEMENT">Malversación</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-2 rounded-lg bg-cello-500 text-cello-50
               hover:bg-sky-600 cursor-pointer transition duration-200 disabled:bg-cello-800 disabled:cursor-wait"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="none"
                      d="M4 12a8 8 0 0116 0"
                      strokeWidth="4"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar Reporte"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
