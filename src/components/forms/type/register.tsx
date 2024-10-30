import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSubmitReg } from "@/services/handlers";
import InputTypeButton from "../imputs/imputTypeButton";
import InputTypeEmail from "../imputs/imputTypeEmail";
import InputTypePass from "../imputs/inputTypePass";
import InputTypeUser from "../imputs/inputTypeUser";
import Combobox from "@/components/menus/comboBox";

export default function RegisterForm() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState<string>("");
  const rols = ["SPONSOR", "COMPANY"];
  return (
    <form
      className="flex flex-col my-2 w-64"
      onSubmit={(e: React.FormEvent) =>
        handleSubmitReg(e, user, password, email, rol, router)
      }
    >
      {/*USER */}
      <InputTypeUser user={user} setUser={setUser} />
      {/*PASSWORD */}
      <InputTypePass password={password} setPassword={setPassword} />
      {/*EMAIL*/}
      <InputTypeEmail email={email} setEmail={setEmail} />
      <Combobox
        items={rols}
        placeholder="Seleccione el tipo de cuenta"
        selectedItem={rol}
        setSelectedItem={setRol}
      />
      {/*BOTTON */}
      <InputTypeButton
        user={user}
        password={password}
        email={email}
        rol={rol}
        lavel="Registrar"
      />
    </form>
  );
}
