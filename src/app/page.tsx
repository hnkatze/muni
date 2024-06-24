import { CardS } from "@/components/CardS";
import Principal from "@/components/Principal";
import { Section } from "@/components/section2";

export default function Home() {
  return (
    <>
      <Principal title="Municipalidad De Bonito Oriental" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5 w-full justify-center">
          <Section
            title="Sobre Nosotros"
            content="Somos una municipalidad comprometida fervientemente con el bienestar y progreso de nuestra amada comunidad. Nos dedicamos incansablemente a velar por cada uno de nuestros ciudadanos, buscando constantemente su prosperidad y calidad de vida. Nuestro compromiso es inquebrantable, enfocado en construir un futuro donde todos puedan sentirse seguros, escuchados y respaldados. ¡Porque juntos, creamos un lugar mejor para todos!"
            imageUrl="/image/central-park.png"
          />
        </div>
        <p className="w-full text-center text-5xl font-normal pb-10 underline decoration-sky-300 ">
          Servicios
        </p>
        <div className="flex flex-wrap gap-5 justify-center p-4 md:mx-0">
          <div className="w-3/4 p-2 md:w-1/4 lg:w-1/4">
            <CardS
              title="Tributación"
              content="Oficina encargada de la seguridad y que los derechos se respeten"
              imageUrl="/image/finance.jpg"
            />
          </div>
          <div className="w-3/4 p-2 md:w-1/4 lg:w-1/4">
            <CardS
              title="Justicia"
              content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
              imageUrl="/image/justice.png"
            />
          </div>
          <div className="w-3/4 p-2 md:w-1/4 lg:w-1/4">
            <CardS
              title="Catastro"
              content="Oficina encargada de la seguridad y que los derechos se respeten"
              imageUrl="/image/map.png"
            />
          </div>
          <div className="w-3/4 p-2 md:w-1/4 lg:w-1/4">
            <CardS
              title="Desarrollo Comunitario"
              content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
              imageUrl="/image/architecture.png"
            />
          </div>
          <div className="w-3/4 p-2 md:w-1/4 lg:w-1/4">
            <CardS
              title="Secretaría"
              content="Oficina encargada de llevar el progreso del municipio al siguiente nivel"
              imageUrl="/image/operator.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
