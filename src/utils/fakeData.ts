import { staticAssets } from "@/assets/staticAssets";
import {
  asideDonation,
  attendantsBranch,
  benefitData,
  branchsProducts,
  dataPost,
} from "./interfaces";

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
  { icon: "/images/bkg.png" },
  { icon: "/images/coppel.png" },
  { icon: "/images/dominos.png" },
  { icon: "/images/flexy.png" },
  { icon: "/images/itka.jpg" },
  { icon: "/images/liverpool.png" },
  { icon: "/images/pizaHud.jpeg" },
  { icon: "/images/rpc.webp" },
  { icon: "/images/vvvW.png" },
];

export const asideDonationData: asideDonation = {
  projectFunds: 50000.0,
  donationFunds: 15000.75,
  goalAmountDonation: 20000.0,
  goalAmountProject: 60000.0,
  currentAmountDonation: 12000.5,
  currentAmountProject: 40000.0,
};

export const benefitsFakeData: benefitData[] = [
  {
    id: 1,
    title: "Consideraciones fiscales",
    description: "Puedes acceder a un 7% de deducción en el año fiscal.",
    detail_description: `
## Ley de Impuesto sobre la Renta

Las empresas en México pueden deducir hasta un 7% de sus donativos a organizaciones sin fines de lucro, lo que representa una reducción significativa en su carga tributaria.

- Los donativos pueden deducirse de la renta anual.
- Solo se puede deducir el 7% de las utilidades fiscales.
- Es importante que la organización receptora esté registrada como una asociación civil sin fines de lucro para que los donativos sean deducibles.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 2,
    title: "Beneficios fiscales adicionales",
    description: "Aprovecha más deducciones por donativos a causas sociales.",
    detail_description: `
## Beneficios adicionales por donativos

Si bien las deducciones fiscales son un gran atractivo, existen otros beneficios por realizar donativos a causas sociales:

- **Aumentar el límite de deducción**: En algunos casos, dependiendo del tipo de donativo y la organización, el límite de deducción puede ser mayor.
- **Reducción del Impuesto Empresarial a Tasa Única (IETU)**: Algunos donativos pueden ser considerados como deducibles del IETU.
- **Certificación de donativos**: Al hacer donativos a empresas sin fines de lucro, puedes obtener un certificado que te ayudará a validar tus deducciones.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 3,
    title: "Mejora la imagen de tu empresa",
    description:
      "Fortalece la imagen corporativa de tu empresa al apoyar causas sociales.",
    detail_description: `
## Beneficios de imagen corporativa

El apoyo a causas sociales tiene un impacto positivo en la percepción pública de tu empresa. Algunos beneficios incluyen:

- **Responsabilidad social empresarial (RSE)**: Asociarse con causas que benefician a la sociedad mejora la reputación y percepción de tu marca.
- **Aumento de la lealtad de los consumidores**: Los consumidores valoran cada vez más a las empresas que se alinean con sus valores y que contribuyen al bienestar social.
- **Posicionamiento como empresa ética y solidaria**: A través de las donaciones, tu empresa puede destacarse como una entidad ética, responsable y preocupada por el futuro de la comunidad.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 4,
    title: "Publicidad gratuita a través de nuestra plataforma",
    description:
      "Recibe visibilidad sin costo adicional en nuestra plataforma por realizar donaciones.",
    detail_description: `
## Publicidad gratuita

Al realizar una donación, tu empresa puede recibir visibilidad de forma gratuita en nuestra plataforma, lo cual incluye:

- **Exposición en la página de donantes**: Los logotipos y nombres de las empresas donantes aparecen en nuestras campañas y páginas de agradecimiento.
- **Resaltado en newsletters**: Mención especial de tu empresa en nuestros boletines informativos y comunicaciones con la comunidad.
- **Testimonios y entrevistas**: En algunos casos, podemos promover tu empresa a través de entrevistas o historias que resaltan el impacto de tu donación en la causa apoyada.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 5,
    title: "Ganancias por las donaciones realizadas",
    description: "Recibiras el pago equivante a la donacion realizada*",
    detail_description: `
## Solo para empresas registradas como donadoras

Al ser parte de la plataforma de donaciones, tu empresa sera remunerada de manera total sobre el precio registrado de los productos registrados:

- **Dobles Ganancias**: Ganaras no solo por las deducciones fiscales, sino como una venta mas.
- **Impacto de primera fila**: Podras ver de primera fila los resultados de tu ayuda.
- **Proyectos conjuntos de responsabilidad social**: Colaborar con otras empresas en proyectos de RSE que beneficien a la comunidad.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 6,
    title: "Cumplimiento con regulaciones gubernamentales",
    description:
      "Cumple con las regulaciones fiscales y de RSE al realizar donativos.",
    detail_description: `
## Cumplimiento legal

Al hacer donativos, tu empresa se asegura de cumplir con varias normativas legales:

- **Ley de Responsabilidad Social Empresarial**: Las empresas pueden cumplir con las regulaciones relacionadas con la RSE y mejorar su relación con los gobiernos.
- **Mejor cumplimiento tributario**: Al realizar donaciones correctamente registradas, tu empresa está en línea con las mejores prácticas fiscales y legales en México.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgGreen,
    for: "COMPANY",
  },
  {
    id: 7,
    title: "Descuentos exclusivos",
    description: "Accede a descuentos exclusivos por tus donaciones.",
    detail_description: `
## Descuentos por donación

Al realizar donativos a la plataforma, las personas con actividad empresarial o asalariadas pueden obtener descuentos en productos y servicios exclusivos de nuestras marcas asociadas:

- **Descuentos en servicios**: Descuentos en empresas que colaboran con la plataforma.
- **Ofertas de temporada**: Beneficios especiales en eventos y productos en fechas señaladas.
- **Acceso a promociones especiales**: Solo los donantes pueden aprovechar ciertas promociones limitadas.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgBlue,
    for: "SPONSOR",
  },
  {
    id: 8,
    title: "Remuneración por adición de la plataforma",
    description:
      "Gana una remuneración adicional al unirte a la plataforma y ayudar a expandir la comunidad.",
    detail_description: `
## Remuneración por recomendación

Si eres un patrocinador activo (persona con actividad empresarial o asalariada), puedes obtener remuneración adicional por cada nuevo miembro que se una a la plataforma gracias a tu recomendación. Algunas formas de ganar incluyen:

- **Comisiones por afiliados**: Obtén una comisión por cada persona o empresa que se registre y realice donativos gracias a tu referencia.
- **Bonificaciones por metas**: Al alcanzar ciertos objetivos de donación o recomendación, puedes obtener bonificaciones extras.
- **Pagos mensuales**: Recibe pagos periódicos por tu rol activo en la plataforma y tu capacidad para promover la causa.
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgBlue,
    for: "SPONSOR",
  },
  {
    id: 9,
    title: "Ventajas fiscales para personas asalariadas",
    description:
      "Accede a ventajas fiscales por tus donativos como persona asalariada.",
    detail_description: `
## Ley del Impuesto sobre la Renta para Personas Físicas

Las personas asalariadas también pueden beneficiarse de deducciones fiscales por sus donativos:

- **Deducción de hasta un 7%**: Al igual que las empresas, las personas asalariadas pueden deducir una parte de sus donativos de su base gravable.
- **Incentivos fiscales**: Las autoridades fiscales premian las donaciones a ONGs con descuentos y deducciones adicionales si se registran correctamente.
- **Certificados fiscales**: Obtén un certificado que respalde tu donativo y lo haga válido ante el SAT (Servicio de Administración Tributaria).
    `,
    image: staticAssets.images.KidMexican,
    style: staticAssets.background.bgBlue,
    for: "SPONSOR",
  },
];

export const newsData = [
  {
    title: "Nueva escuela en repertorio",
    description: "Escuela en Vallarta",
    location: "Vallarta, Jalisco",
    date: "20/24",
  },
  {
    title: "Nuevo centro de salud",
    description: "Centro médico en Puerto Vallarta",
    location: "Puerto Vallarta, Jalisco",
    date: "15/11",
  },
  {
    title: "Inauguración de biblioteca",
    description: "Biblioteca digital en la ciudad",
    location: "Ciudad de México",
    date: "12/12",
  },
];
export const companyData = [
  {
    logo: "/images/bkg.png",
    companyName: "Burger King",
    location: "Morelia, Zapopan",
    industry: "Alimentos",
    date: "23/11",
  },
  {
    logo: "/images/pizaHud.jpeg",
    companyName: "Pizza Hut",
    location: "Monterrey, Zapopan",
    industry: "Alimentos",
    date: "22/11",
  },
  {
    logo: "/images/vvvW.png",
    companyName: "Tecnologico Maorio Molina Pasquel y enriquez",
    location: "Zapopan, Jalisco",
    industry: "Educación",
    date: "Fundada en 2018",
  },
];
