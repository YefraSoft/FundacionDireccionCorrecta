import { staticAssets } from "@/assets/staticAssets";
import { attendantsBranch, branchsProducts, dataPost } from "./interfaces";

export const branchesData = [
  {
    id: "1",
    sucursal: "Aviacion",
    payRequest: [
      {
        id: "1",
        date: "10/10/2024",
        title: "Donación de abarrotes",
        status: "Pendiente",
        amount: 1000,
      },
      {
        id: "2",
        date: "09/10/2024",
        title: "Donación de ropa",
        status: "Aprobado",
        amount: 1500,
      },
      {
        id: "3",
        date: "08/10/2024",
        title: "Donación de abarrotes",
        status: "Pendiente",
        amount: 2000,
      },
    ],
  },
  {
    id: "2",
    sucursal: "Centro",
    payRequest: [
      {
        id: "1",
        date: "07/10/2024",
        title: "Donación de ropa",
        status: "Aprobado",
        amount: 3000,
      },
      {
        id: "2",
        date: "06/10/2024",
        title: "Donación de juguetes",
        status: "Rechazado",
        amount: 500,
      },
      {
        id: "3",
        date: "05/10/2024",
        title: "Donación de abarrotes",
        status: "Pendiente",
        amount: 2500,
      },
    ],
  },
  {
    id: "3",
    sucursal: "Norte",
    payRequest: [
      {
        id: "1",
        date: "04/10/2024",
        title: "Donación de juguetes",
        status: "Rechazado",
        amount: 400,
      },
      {
        id: "2",
        date: "03/10/2024",
        title: "Donación de ropa",
        status: "Aprobado",
        amount: 1800,
      },
      {
        id: "3",
        date: "02/10/2024",
        title: "Donación de libros",
        status: "Pendiente",
        amount: 700,
      },
    ],
  },
  {
    id: "4",
    sucursal: "Sur",
    payRequest: [
      {
        id: "1",
        date: "01/10/2024",
        title: "Donación de libros",
        status: "Pendiente",
        amount: 900,
      },
      {
        id: "2",
        date: "30/09/2024",
        title: "Donación de juguetes",
        status: "Rechazado",
        amount: 500,
      },
      {
        id: "3",
        date: "29/09/2024",
        title: "Donación de medicinas",
        status: "Aprobado",
        amount: 3500,
      },
    ],
  },
  {
    id: "5",
    sucursal: "Este",
    payRequest: [
      {
        id: "1",
        date: "28/09/2024",
        title: "Donación de medicinas",
        status: "Aprobado",
        amount: 2700,
      },
      {
        id: "2",
        date: "27/09/2024",
        title: "Donación de abarrotes",
        status: "Pendiente",
        amount: 1200,
      },
      {
        id: "3",
        date: "26/09/2024",
        title: "Donación de juguetes",
        status: "Rechazado",
        amount: 600,
      },
    ],
  },
];

export const blogPosts: dataPost[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies shaping the web development landscape.",
    imageUrl: staticAssets.images.KidMexican,
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description:
      "A deep dive into React Hooks and how they can simplify your component logic.",
    imageUrl: staticAssets.images.colaborationHands,
  },
  {
    id: 3,
    title: "The Art of Responsive Design",
    description:
      "Techniques and best practices for creating truly responsive web experiences.",
    imageUrl: staticAssets.images.schoolKids,
  },
  {
    id: 4,
    title: "Optimizing Web Performance",
    description:
      "Strategies to boost your website's speed and overall performance.",
    imageUrl: staticAssets.images.blackWitheKids,
  },
];

export const ProductBranch: branchsProducts[] = [
  {
    branchID: 1,
    branchName: "Aviacion",
    branchProducts: [
      {
        id: 1,
        class: "Electrónica",
        productName: "Laptop X",
        productDescription: "Laptop de alto rendimiento con 16GB RAM",
        productPrice: 15000,
      },
      {
        id: 2,
        class: "Electrónica",
        productName: "Smartphone Y",
        productDescription: "Teléfono de última generación con cámara de 108MP",
        productPrice: 12000,
      },
      {
        id: 3,
        class: "Electrónica",
        productName: "Tablet Z",
        productDescription:
          "Tablet con pantalla de 10 pulgadas y 64GB de almacenamiento",
        productPrice: 8000,
      },
    ],
  },
  {
    branchID: 2,
    branchName: "Centro",
    branchProducts: [
      {
        id: 11,
        class: "Hogar",
        productName: "Aspiradora K",
        productDescription: "Aspiradora con filtro HEPA y tecnología ciclónica",
        productPrice: 2500,
      },
      {
        id: 12,
        class: "Hogar",
        productName: "Refrigerador L",
        productDescription:
          "Refrigerador de doble puerta con tecnología inverter",
        productPrice: 10000,
      },
      {
        id: 13,
        class: "Hogar",
        productName: "Lavadora M",
        productDescription: "Lavadora automática de carga superior",
        productPrice: 6000,
      },
    ],
  },
  {
    branchID: 3,
    branchName: "Norte",
    branchProducts: [
      {
        id: 21,
        class: "Deportes",
        productName: "Bicicleta N",
        productDescription: "Bicicleta de montaña con suspensión doble",
        productPrice: 7500,
      },
      {
        id: 22,
        class: "Deportes",
        productName: "Pelota de fútbol",
        productDescription:
          "Pelota de fútbol profesional con costura reforzada",
        productPrice: 1200,
      },
      {
        id: 23,
        class: "Deportes",
        productName: "Ruedas para patineta",
        productDescription: "Juego de ruedas para patineta de alta resistencia",
        productPrice: 400,
      },
    ],
  },
  {
    branchID: 4,
    branchName: "Sur",
    branchProducts: [
      {
        id: 31,
        class: "Ropa",
        productName: "Playera S",
        productDescription: "Playera de algodón 100% con estampado",
        productPrice: 250,
      },
      {
        id: 32,
        class: "Ropa",
        productName: "Pantalón T",
        productDescription: "Pantalón de mezclilla ajustado",
        productPrice: 500,
      },
      {
        id: 33,
        class: "Ropa",
        productName: "Chaqueta U",
        productDescription: "Chaqueta impermeable para invierno",
        productPrice: 1200,
      },
    ],
  },
  {
    branchID: 5,
    branchName: "Este",
    branchProducts: [
      {
        id: 41,
        class: "Juguetes",
        productName: "Rompecabezas X",
        productDescription: "Rompecabezas de 1000 piezas",
        productPrice: 300,
      },
      {
        id: 42,
        class: "Juguetes",
        productName: "Figura de acción Y",
        productDescription: "Figura de acción coleccionable con accesorios",
        productPrice: 800,
      },
      {
        id: 43,
        class: "Juguetes",
        productName: "Pelota Z",
        productDescription: "Pelota de goma para jugar en exteriores",
        productPrice: 100,
      },
    ],
  },
];

export const attendantsBranchs: attendantsBranch[] = [
  {
    branchID: "1",
    branchName: "Aviacion",
    attendants: [
      { name: "Carlos Martínez", shift: 1 },
      { name: "Ana González", shift: 2 },
    ],
  },
  {
    branchID: "2",
    branchName: "Centro",
    attendants: [
      { name: "Luis Hernández", shift: 1 },
      { name: "María López", shift: 2 },
    ],
  },
  {
    branchID: "3",
    branchName: "Norte",
    attendants: [
      { name: "Miguel Ríos", shift: 1 },
      { name: "Elena Gómez", shift: 2 },
    ],
  },
  {
    branchID: "4",
    branchName: "Sur",
    attendants: [
      { name: "José Sánchez", shift: 1 },
      { name: "Lucía Rivera", shift: 2 },
    ],
  },
  {
    branchID: "5",
    branchName: "Este",
    attendants: [
      { name: "Fernando Pérez", shift: 1 },
      { name: "Claudia Romero", shift: 2 },
    ],
  },
];

export const icons = [
  { icon: "http://localhost:3000/images/bkg.png" },
  { icon: "http://localhost:3000/images/coppel.png" },
  { icon: "http://localhost:3000/images/dominos.png" },
  { icon: "http://localhost:3000/images/flexy.png" },
  { icon: "http://localhost:3000/images/itka.jpg" },
  { icon: "http://localhost:3000/images/liverpool.png" },
  { icon: "http://localhost:3000/images/pizaHud.jpeg" },
  { icon: "http://localhost:3000/images/rpc.webp" },
  { icon: "http://localhost:3000/images/vvvW.png" },
];