import { staticAssets } from "@/assets/staticAssets";
import IndexCard from "@/components/cards/indexCard";
import Header from "@/components/menus/header";
import Footer from "@/components/navbars/footer";

export default function Index() {
  const actions = [
    { label: "Ver más", color: "bg-blue-500 text-white" },
    { label: "Donar", color: "bg-green-500 text-white" },
  ];
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center my-6">
          Bienvenidos a la Plataforma de Donaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndexCard
            title="Beneficio 1"
            content="Descripción detallada del beneficio 1."
            image={staticAssets.images.KidMexican}
            actions={actions}
          />
          <IndexCard
            title="Beneficio 2"
            content="Descripción detallada del beneficio 2."
            image={staticAssets.images.KidMexican}
            actions={actions}
          />
          <IndexCard
            title="Beneficio 3"
            content="Descripción detallada del beneficio 3."
            image={staticAssets.images.KidMexican}
            actions={actions}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
