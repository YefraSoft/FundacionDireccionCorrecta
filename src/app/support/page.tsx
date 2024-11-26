"use client";
import ReportForm from "@/components/forms/reportForm";
import ButtonIcon from "@/components/menus/buttonIcon";
import Faqs from "@/components/menus/faqs";
import { handleSubmitComment } from "@/services/handlers";
import { contactForm } from "@/utils/interfaces";
import { useState, ChangeEvent } from "react";

export default function Support() {
  const [loading, setLoading] = useState<boolean>(false);
  const [contact, setContactData] = useState<contactForm>({
    name: "",
    email: "",
    message: "",
  });
  const contactDataOnchage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setContactData({ ...contact, [name]: value });
  };
  const buttonsVariants = {
    bgColror: "bg-cello-500 border border-cello-300",
    textColror: "text-cello-50 px-6 py-2 rounded-lg transition",
    hoverColor: "hover:bg-cello-600",
  };
  return (
    <div className="min-h-screen bg-patina-50 flex flex-col justify-center items-center pt-20">
      <div className="bg-cello-50 shadow-lg rounded-lg p-6 w-full max-w-5xl">
        <Faqs />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-cello-800 mb-4">
            Conatactanos
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) =>
              handleSubmitComment(e, setLoading, setContactData, contact)
            }
          >
            <input
              type="text"
              name="name"
              placeholder="* Motivo"
              value={contact.name}
              onChange={contactDataOnchage}
              className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email de respuesta"
              value={contact.email}
              onChange={contactDataOnchage}
              className="w-full p-2 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
            />
            <textarea
              placeholder="* Escribe tus sugerencias, quejas o comentarios..."
              className="w-full p-4 border border-cello-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cello-500"
              rows={4}
              value={contact.message}
              onChange={contactDataOnchage}
              name="message"
            ></textarea>
            <ButtonIcon
              icon="send"
              label="Enviar"
              loading={loading}
              variants={buttonsVariants}
            />
          </form>
        </section>
        <ReportForm />
      </div>
    </div>
  );
}
