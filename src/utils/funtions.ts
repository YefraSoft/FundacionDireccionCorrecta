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
export const buttonsVariantsMP = {
  bgColror: "bg-merPago",
  textColror: "text-merPago-light mt-2",
  hoverColor: "hover:bg-merPago-dark",
};
export const buttonsVariantsExit = {
  bgColror: "bg-rose-500",
  textColror: "text-merPago-light",
  hoverColor: "hover:bg-rose-600",
};
export const buttonsVariantsIndex = {
  bgColror: "bg-patina-200",
  textColror: "text-merPago-light mt-2",
  hoverColor: "hover:bg-merPago-dark",
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
export const privacyPolicyMarkdown = `
# Política de Privacidad y Manejo de Datos Personales

## 1. Información General

### 1.1 Datos Recolectados
En nuestra organización recolectamos los siguientes datos personales de nuestros usuarios:

- **Personas físicas**: Nombre, RFC, dirección completa, régimen fiscal.
- **Empresas**: Los datos anteriores más el acta constitutiva.
- **Datos fiscales**: Información necesaria para la facturación y cumplimiento de nuestras obligaciones fiscales.
- **Datos de sesión**: Información asociada al acceso a nuestra plataforma, como IP, cookies y otros identificadores.

### 1.2 Métodos de Recolección
Recopilamos estos datos de las siguientes formas:
- **Formulario web**: Los usuarios proporcionan estos datos al completar formularios en línea dentro de nuestro sitio web.

## 2. Uso de los Datos

### 2.1 Finalidad del Uso
Los datos personales que recolectamos son utilizados exclusivamente para los siguientes fines:

- **Fines fiscales**: Para realizar la facturación y cumplir con nuestras obligaciones fiscales.
- **Fines estadísticos**: Para generar estadísticas internas y mejorar nuestros procesos.

### 2.2 Limitación en el Uso
Los datos personales recolectados se utilizan únicamente dentro de nuestra organización y no con fines comerciales ni de distribución externa.

## 3. Compartir o Transferir Datos

### 3.1 Compartición de Datos
No compartimos ni vendemos los datos personales de nuestros usuarios a terceros. Los datos se mantienen confidenciales y son usados exclusivamente por nuestra organización para los fines descritos.

### 3.2 Almacenamiento de Datos
Los datos son almacenados en servidores web seguros y protegidos con acceso restringido.

## 4. Seguridad de los Datos

Para garantizar la protección de los datos personales que recolectamos, implementamos las siguientes medidas de seguridad:

- **Cifrado AES**: Todos los datos sensibles son cifrados utilizando algoritmos de cifrado avanzados (AES).
- **Tokens de acceso**: Utilizamos tokens para validar sesiones y proteger la integridad de los datos.
- **Acceso privado**: El acceso a los datos está restringido a personal autorizado únicamente.

## 5. Derechos de los Usuarios

### 5.1 Acceso y Control
Los usuarios tienen derecho a acceder, corregir o eliminar sus datos personales en cualquier momento a través de nuestra plataforma. Para ello, pueden realizar las acciones directamente desde su cuenta de usuario.

### 5.2 Revocación de Consentimiento
No contamos con un mecanismo específico para revocar el consentimiento, ya que el manejo de datos se limita a lo descrito en esta política.

## 6. Retención de Datos

Los datos personales se conservarán de manera indefinida, en la medida en que sean necesarios para cumplir con los fines establecidos en esta política.

## 7. Uso de Cookies y Tecnologías Similares

Nuestro sitio web utiliza **cookies** y tecnologías similares para gestionar la sesión de los usuarios y mejorar la experiencia de navegación. Las cookies se utilizan exclusivamente para fines de gestión de sesión y no recogen información personal adicional.

## 8. Modificaciones a la Política de Privacidad

Cualquier cambio o actualización en esta política de privacidad será comunicado a los usuarios a través de correo electrónico. Es responsabilidad de los usuarios revisar periódicamente esta política para estar informados de cualquier modificación.

## 9. Contacto

Si tienes preguntas sobre esta política o sobre el manejo de tus datos personales, puedes contactarnos a través de los siguientes medios:

- **Formulario de contacto**: Disponible en nuestro sitio web.
- **Teléfono**: 3334410687
- **Correo electrónico**: yefrasoft@hotmail.com
`;

// Función para formatear la dirección
export function formatAddress(address: string): string {
  const parts = address.split(",");
  return `${parts[0]} ${parts[2] || ""}`.trim();
}

// Función para formatear la fecha
export function formatDate(date: string): string {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}
