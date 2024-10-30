import { handleSubmitForg } from "@/services/handlers";
import { useState } from "react";
import InputTypeButton from "../imputs/imputTypeButton";
import InputTypeEmail from "../imputs/imputTypeEmail";

export default function ForgotForm() {
    const [email, setEmail] = useState("");
  return (
    <form
      className="flex flex-col my-2 w-64"
      onSubmit={(e: React.FormEvent) => handleSubmitForg(e, email)}
    >
      {/*EMAIL*/}
      <InputTypeEmail email={email} setEmail={setEmail} />

      {/*BOTTON */}
      <InputTypeButton email={email} lavel="Recuperar" />
    </form>
  );
}
