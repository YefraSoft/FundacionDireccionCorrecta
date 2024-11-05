import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSubmitReg } from "@/services/handlers";
import InputTypeButton from "../imputs/imputTypeButton";
import InputTypeEmail from "../imputs/imputTypeEmail";
import InputTypePass from "../imputs/inputTypePass";
import Combobox from "@/components/menus/comboBox";
import { attendantsBranchs } from "@/utils/fakeData";

export default function RegisterBranch() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form
      className="flex flex-col my-2 w-64"
      onSubmit={(e: React.FormEvent) =>
        handleSubmitReg(e, user, password, email, "branch", router)
      }
    >
      {/*ROL*/}
      <Combobox
        placeholder="Seleccione el tipo de cuenta"
        selectedItem={user}
        setSelectedItem={setUser}
        attendants={attendantsBranchs}
      />
      {/*PASSWORD */}
      <InputTypePass password={password} setPassword={setPassword} />
      {/*EMAIL*/}
      <InputTypeEmail email={email} setEmail={setEmail} />
      {/*BOTTON */}
      <InputTypeButton
        user={user}
        password={password}
        email={email}
        rol={"branch"}
        lavel="Registrar"
      />
    </form>
  );
}
