
export default function ReportForm() {
  return (
    <section className="px-3 w-full">
      <form className="space-y-4">
        <div>
          <label htmlFor="reportedBy" className="block text-cello-700 text-lg">
            Tu nombre
          </label>
          <input
            type="text"
            id="reportedBy"
            name="reportedBy"
            className="w-full p-1 text-sm border items-center border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-cello-700 text-lg">
            Razón del reporte
          </label>
          <input
            type="text"
            id="reason"
            name="reason"
            className="w-full p-1 text-sm border items-center border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            required
          />
        </div>
        <div>
          <label htmlFor="details" className="block text-cello-700 text-lg">
            Detalles del reporte
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Especifica los detalles de tu reporte..."
            className="w-full p-1 text-sm border items-center border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="reportType" className="block text-cello-700 text-lg">
            Tipo de reporte
          </label>
          <select
            id="reportType"
            name="reportType"
            className="w-full p-1 text-sm border items-center border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
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
          className="w-full text-sm bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
        >
          Enviar Reporte
        </button>
      </form>
    </section>
  );
}
