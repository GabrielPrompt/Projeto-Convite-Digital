import Pagina from "@/components/template/Pagina";
import Evento from "@/core/evento/model/Evento";

export default function Home() {

const e: Partial<Evento> = {};

  return (
    <Pagina>
      <div>Inicio</div>
    </Pagina>
  );
}
