import { validateNewPassword, vEmal, vPass, vUsr } from "@/utils/funtions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createCredentials, loggin } from "./credentialsService";
import { userCredentials } from "@/utils/interfaces";
const emailDomains = ["hotmail.com", "gmail.com", "yahoo.com", "outlook.com"];

// EMAIL
export const handleEmailChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setSuggestedEmail: React.Dispatch<React.SetStateAction<string>>
) => {
  const value = e.target.value;
  setEmail(value);
  const atIndex = value.indexOf("@");
  if (atIndex > -1 && !value.includes(".", atIndex)) {
    const typedDomain = value.slice(atIndex + 1).toLowerCase();
    const domainSuggestion = emailDomains.find((domain) =>
      domain.startsWith(typedDomain)
    );
    setSuggestedEmail(`${value.split("@")[0]}@${domainSuggestion || ""}`);
  }
};
export const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  suggestedEmail: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (e.key === "Tab" && suggestedEmail) {
    e.preventDefault();
    setIsValid(vEmal(suggestedEmail));
    setEmail(suggestedEmail);
  }
};
export const handleEmailVerify = (
  email: string,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsValid(vEmal(email));
};

// PASSWORD
export const handlePasswordChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setValidation: React.Dispatch<
    React.SetStateAction<{
      minLength: boolean;
      isValid: boolean;
      hasSymbol: boolean;
    }>
  >
) => {
  const value = e.target.value;
  setPassword(value);
  validateNewPassword(value, setValidation);
};

// SELECT COMPONENT
export const handleSelectComponent = (
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>,
  component: string
) => {
  setActiveComponent(component);
};

// SUMITS
export const unlockButtonReg = (
  user: string,
  password: string,
  email: string,
  rol?: string
) => {
  return !(
    vEmal(email) &&
    vUsr(user) &&
    vPass(password) &&
    (!rol || vUsr(rol))
  );
};
export const unlockButtonLog = (userOrEmail: string, password: string) => {
  return !(vUsr(userOrEmail) && vPass(password));
};
export const unlockButtonForg = (userOrEmail: string) => {
  return !vEmal(userOrEmail);
};

// REGISTRATION SUBMIT
export async function handleSubmitReg(
  e: React.FormEvent,
  user: string,
  password: string,
  email: string,
  rol: string,
  router: AppRouterInstance
) {
  e.preventDefault();
  try {
    const newReg: userCredentials = { user, password, email, role: rol };
    const status = await createCredentials(newReg);
    if (status === 201) {
      router.push(`/dashboard/${rol.toLocaleLowerCase()}`);
    } else {
      alert("Error al crear la cuenta");
    }
  } catch (e) {
    console.error("Error en el registro:", e);
  }
}

// FORGOT PASSWORD SUBMIT
export const handleSubmitForg = (e: React.FormEvent, email: string) => {
  e.preventDefault();
  alert(`Usuario ${email} no existe`);
};

// LOGIN SUBMIT
export const handleSubmitLog = async (
  e: React.FormEvent,
  indety: string,
  password: string,
  router: AppRouterInstance
) => {
  e.preventDefault();
  try {
    const isEmail = vEmal(indety);
    const log: userCredentials = isEmail
      ? { user: "", email: indety, password } // Proporcionamos `user` vacío cuando se usa `email`.
      : { user: indety, password };
    const response = await loggin(log);
    router.push(`/dashboard/${response.role.toLowerCase}`);
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    alert("Error al iniciar sesión");
  }
};
