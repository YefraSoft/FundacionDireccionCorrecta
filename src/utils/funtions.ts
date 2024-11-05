import { branchData, validatePass } from "./interfaces";

//Wildcard funtions
export const calcMonths: string[] = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString("es", { month: "long" }).toUpperCase()
);
export const calcDays: string[] = Array.from({ length: 31 }, (_, i) =>
  (i + 1).toString()
);
export function calcEarnings(branch: branchData): number {
  return branch.payRequest
    .filter((payRequest) => payRequest.status === "Aprobado") // Filtrar solo las solicitudes aprobadas
    .reduce((total, request) => total + request.amount, 0); // Sumar los montos de las solicitudes aprobadas
}
export function getVisibleIconsCount(containerWidth: number) {
  if (containerWidth < 640) return 5;
  if (containerWidth < 1024) return 7;
  return 9;
}

//VARIANTS
export function leftRighVariants(index: number) {
  return {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };
}
export const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Validations
export const validateNewPassword = (
  value: string,
  setValidation: validatePass
) => {
  setValidation({
    minLength: value.length >= 6,
    hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    isValid: value.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(value),
  });
};
export const vPass = (pass: string) => {
  if (pass.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    return true;
  } else {
    return false;
  }
};
export const vEmal = (Email: string) => {
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
    return true;
  } else {
    return false;
  }
};
export const vUsr = (Usr: string) => {
  if (Usr.length >= 6) {
    return true;
  } else {
    return false;
  }
};
