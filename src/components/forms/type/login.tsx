import { useState } from "react";
import { useRouter } from "next/navigation";
import SessionButtons from "../imputs/sessionButtons";
import InputTypeButton from "../imputs/imputTypeButton";
import InputTypePass from "../imputs/inputTypePass";
import InputTypeUser from "../imputs/inputTypeUser";
import { handleSubmitLog } from "@/services/handlers";

export default function LoginFom() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  return (
    <form
      className="flex flex-col my-2 w-64"
      onSubmit={(e: React.FormEvent) =>
        handleSubmitLog(e, user, password,setloading, router)
      }
    >
      {/*USER */}
      <InputTypeUser
        plaseHolder="Usuario o Email"
        user={user}
        setUser={setUser}
      />
      {/*PASSWORD */}
      <InputTypePass password={password} setPassword={setPassword} />

      {/*BOTTON */}
      <InputTypeButton email={user} password={password} lavel="Ingresar" loading={loading} />

      {/*BOTTON SESSIONES */}
      <SessionButtons />
    </form>
  );
}