import { handleSubmitReport } from "@/services/handlers";
import ButtonIcon from "../menus/buttonIcon";
import { contactForm, reportForm } from "@/utils/interfaces";
import { useState, ChangeEvent } from "react";

export default function ReportForm() {
  const [loadingReport, setLoadingReport] = useState<boolean>(false);
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
  const buttonsVariants = {
    bgColror: "bg-cello-500 border border-cello-300 w-full",
    textColror: "text-cello-50 px-6 py-2 rounded-lg transition",
    hoverColor: "hover:bg-cello-600",
  };
  return (
    <section id="ReporForm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Formulario de Reportes
      </h2>
      <form
        className="space-y-4"
        onSubmit={(e) =>
          handleSubmitReport(e, setLoadingReport, setReportData, reportData)
        }
      >
        <div>
          <label htmlFor="reportedBy" className="block text-cello-700 mb-2">
            Tu nombre <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="reportedBy"
            name="reportedBy"
            value={reportData.reportedBy}
            onChange={reportDataOnchage}
            className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-cello-700 mb-2">
            Razón del reporte <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={reportData.reason}
            onChange={reportDataOnchage}
            className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            required
          />
        </div>
        <div>
          <label htmlFor="details" className="block text-cello-700 mb-2">
            Detalles del reporte <span className="text-rose-500">*</span>
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
          <label htmlFor="reportType" className="block text-cello-700 mb-2">
            Tipo de reporte <span className="text-rose-500">*</span>
          </label>
          <select
            id="reportType"
            name="reportType"
            value={reportData.reportType}
            onChange={reportDataOnchage}
            className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
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
        <ButtonIcon
          icon="send"
          label="Enviar reporte"
          loading={loadingReport}
          variants={buttonsVariants}
        />
      </form>
    </section>
  );
}
