import { CardService } from "@/components/CardService";
import Principal from "@/components/Principal";
import Section from "@/components/Section";




export default function Home() {
  return (
  <>
    <Principal imageUrl="/image/muni.png" title="Municipalidad De Bonito Oriental"/>
    <div className="flex flex-col items-center justify-center">
     <div className="flex gap-5 w-full justify-center">
    <Section
      title="Sobre Nosotros"
      content="Somos una municipalidad comprometida fervientemente con el bienestar y progreso de nuestra amada comunidad. Nos dedicamos incansablemente a velar por cada uno de nuestros ciudadanos, buscando constantemente su prosperidad y calidad de vida. Nuestro compromiso es inquebrantable, enfocado en construir un futuro donde todos puedan sentirse seguros, escuchados y respaldados. ¡Porque juntos, creamos un lugar mejor para todos!"
      imageUrl="/image/central-park.png"
    />

  </div>
  <p className="w-full text-center text-5xl font-normal pb-10 underline decoration-sky-300 ">Servicios</p>
  <div className="flex gap-5 w-full justify-center">
    <CardService
      title="Tributacion"
      content="Oficina encargada de la seguridad y que los derechos se respeten"
      imageUrl="/image/finance.jpg"
    />
    <CardService
      title="Justicia"
      content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
      imageUrl="/image/justice.png"
    />
    <CardService
      title="Catastro"
      content="Oficina encargada de la seguridad y que los derechos se respeten"
      imageUrl="/image/map.png"
    />
    <CardService
      title="Desarrollo Comunitario"
      content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
      imageUrl="/image/architecture.png"
    />
    <CardService
      title="Secretaria"
      content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
      imageUrl="/image/operator.png"
    />
  </div>
  
</div>
</>
  );
}
