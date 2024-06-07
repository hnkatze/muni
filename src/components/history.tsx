import Image from "next/image";
import BonitoMap from "@/assets/Bonitomap.svg";
import { Button } from "@nextui-org/react";
import { ArrowDownOutlined } from "@ant-design/icons";

export function History() {
  return (
    <>
      <div className="bg-gray-50/90 w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_200px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">
                Sobre Nosotros
              </h1>
              <p className="max-w-screen-md text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Aprende mas sobre nuestro viaje, nuestros valores y nuestras
                aspiraciones
              </p>
            </div>
            <Image
              alt="About"
              className="mx-auto  overflow-hidden aspect-auto object-contain object-center   w-2/4 md:w-[200px]"
              height="150"
              src={BonitoMap}
              width="150"
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col md:flex-row md:pl-4 md:text-justify  md:pb-10 md:pr-4 gap-8">
          <div className="space-y-2 flex-1">
            <h2 className="text-3xl font-bold text-center md:text-start tracking-tighter">Mision</h2>
            <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl text-center dark:text-gray-400">
              Ser una institución pública líder en la prestación de servicios de
              calidad con eficiencia, eficacia y transparencia a la población
              del municipio, promoviendo el bienestar individual y colectivo, el
              desarrollo integral y sostenible en el ámbito social, económico,
              cultural y ambiental, con un enfoque participativo e inclusivo que
              fomente la corresponsabilidad entre la ciudadanía y las
              autoridades.
            </p>
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-3xl font-bold tracking-tighter text-center md:text-start">Vision</h2>
            <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400 text-center">
              Ser un municipio modelo de participación ciudadana y desarrollo
              comunal, reconocido por la excelencia en la gestión pública, con
              un personal altamente calificado, comprometido, amable y eficiente
              que trabaja en equipo para atender las necesidades de las personas
              y brindar soluciones innovadoras a la comunidad, construyendo un
              futuro próspero, sostenible y equitativo para todos.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  md:w-full md:flex-row justify-center items-center pt-5 gap-10 ">
        <a href="/doc/Mision Y Vision.pdf" download>
          <Button
            color="primary"
            variant="ghost"
            startContent={<ArrowDownOutlined />}
          >
            <span className="ml-2">Descargar Misión y Visión</span>
          </Button>
        </a>
        <a href="/doc/HISTORIA.pdf" download>
          <Button
            color="primary"
            variant="ghost"
            startContent={<ArrowDownOutlined />}
          >
            <span className="ml-2">Descargar Historia</span>
          </Button>
        </a>
      </div>
    </>
  );
}
