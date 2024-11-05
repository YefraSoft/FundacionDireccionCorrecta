import ButtonIcon from "./buttonIcon";

export default function Header() {
  return (
    <div className="absolute right-28 w-96 top-96 rounded-md p-2">
      <h1 className="block text-3xl text-patina-50 text-center w-full">
        Ayuda a mexico a que siga en{" "}
        <span className="font-bold italic">Direccion Correcta</span>
      </h1>
      <p className="font-thin text-patina-400 pt-6">
        <span className="pl-2" />
        Cada donación transforma vidas. Descubre cómo tú también puedes ser
        parte de nuestras historias de éxito y construir un futuro mejor para
        quienes más lo necesitan.
      </p>
      <ButtonIcon icon="pen" label="¡Descuble como!" />
    </div>
  );
}
