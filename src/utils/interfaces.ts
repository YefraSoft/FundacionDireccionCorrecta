/* DATA INTERFACES*/
export interface branchData {
  id: string;
  sucursal: string;
  payRequest: {
    id: string;
    date: string;
    title: string;
    status: string;
    amount: number;
  }[];
}
export interface cardsData {
  content: singleCardData[];
}
export interface singleCardData {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}
export interface dataPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
export interface products {
  id: number;
  productClass: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}
export interface branchsProducts {
  branchID: number;
  branchName: string;
  branchProducts: products[];
}

export interface Attendant {
  attendantId: number;
  name: string;
  lastName: string;
  shift: number;
}

export interface attendantsBranch {
  branchID: string;
  branchName: string;
  attendatsDTOs: Attendant[];
}

/* COMPONENT INTERFACES */
export interface comboProps {
  items: string[];
  name: string;
}
export interface overFlowProps {
  setOpen?: React.Dispatch<React.SetStateAction<string>>;
}
export interface dashboardProps {
  params: Promise<{
    rol: string;
  }>;
}
export interface navDashProps {
  rol: string;
}
export interface buttonProps {
  label?: string;
  icon: string;
  onClick?: () => void;
  setOpen?: React.Dispatch<React.SetStateAction<string>>;
  variants?: {
    bgColror?: string;
    textColror?: string;
    hoverColor?: string;
  };
}
export interface linkProps {
  menuItems: {
    title: string;
    url: string;
  }[];
  hoverColor?: string;
  linksColor?: string;
}
export interface blogProps {
  posts: dataPost[];
}
export interface disableButtonProps {
  user?: string;
  password?: string;
  lavel: string;
  email: string;
  rol?: string;
  variant?: {
    bgColror: string;
    textColror: string;
    icon: string;
  };
}
export interface InputTypeEmailProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
export interface InputTypePassProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
export interface InputTypeUserProps {
  plaseHolder?: string;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}
export interface comboBoxProps {
  items?: string | string[];
  attendants?: attendantsBranch[];
  placeholder?: string;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}
export interface ProductListProps {
  ProductBranch: branchsProducts | branchsProducts[] | [];
}
export interface registerFormProps {
  roles?: string | string[];
  placeholder?: string;
}
export interface dashBoarContext {
  userRol: string;
  setUserRol: (rol: string) => void;
}
export interface overFlowContext {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}
export interface openDonationOnverflow {
  setOpen?: (value: boolean) => void;
}
export interface benefitData {
  id: number;
  title: string;
  description: string;
  detail_description: string;
  image: string;
  style: string;
  for: "COMPANY" | "SPONSOR";
}
export interface IndexCardProps {
  title: string;
  description: string;
  image: string;
  bgImage?: string;
  button: { onClick: () => void };
}
export interface detailWindowProps {
  description: string;
  button: { onClick: () => void };
}

//Object Interfaces
export type validatePass = React.Dispatch<
  React.SetStateAction<{
    minLength: boolean;
    isValid: boolean;
    hasSymbol: boolean;
  }>
>;
export interface ValidationState {
  minLength: boolean;
  hasSymbol: boolean;
  isValid: boolean;
}
export interface userCredentials {
  user: string;
  email?: string;
  password: string;
  role?: string;
}
export interface dataAthResponse {
  isVerified: string;
  role: string;
}
export interface asideDonation {
  projectFunds: number; // Fondos acumulados para proyectos
  donationFunds: number; // Fondos acumulados para donaciones
  goalAmountDonation: number; // Meta mensual de donaciones
  goalAmountProject: number; // Meta mensual de proyectos
  currentAmountDonation: number; // Monto actual de donaciones para el mes
  currentAmountProject: number; // Monto actual de proyectos para el mes
}
