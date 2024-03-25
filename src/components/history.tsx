import Image from "next/image"
import BonitoMap from '@/components/Bonitomap.svg'
import { Divider } from "@nextui-org/react"
import MunicipalidadInfo from "./Histori"
import Historia from "@/utilities/Historia.json";


export function History() {
  return (
    <>
      <div className="bg-gray-50/90 w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_200px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">Sobre Nosotros</h1>
              <p className="max-w-screen-md text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Aprende mas sobre nuestro viaje, nuestros valores y nuestras aspiraciones
              </p>
            </div>
            <Image
              alt="About"
              className="mx-auto  overflow-hidden aspect-auto object-contain object-center   w-full sm:w-[200px]"
              height="200"
              src={BonitoMap}
              width="200"
            />
          </div> 
        </div>
      </div>
      <div className="w-full ">
      <div className="flex flex-col md:flex-row md:pl-4 md:text-justify  md:pb-10 gap-8">
  <div className="space-y-2 flex-1">
    <h2 className="text-3xl font-bold tracking-tighter">Mision</h2>
    <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
    Ser una institución pública líder en la prestación de servicios de calidad con eficiencia, eficacia y transparencia a la población del municipio, promoviendo el bienestar individual y colectivo, el desarrollo integral y sostenible en el ámbito social, económico, cultural y ambiental, con un enfoque participativo e inclusivo que fomente la corresponsabilidad entre la ciudadanía y las autoridades.
    </p>
  </div>
  <div className="space-y-2 flex-1">
    <h2 className="text-3xl font-bold tracking-tighter">Vision</h2>
    <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
    Ser un municipio modelo de participación ciudadana y desarrollo comunal, reconocido por la excelencia en la gestión pública, con un personal altamente calificado, comprometido, amable y eficiente que trabaja en equipo para atender las necesidades de las personas y brindar soluciones innovadoras a la comunidad, construyendo un futuro próspero, sostenible y equitativo para todos.
    </p>
  </div>
</div>
<Divider/>
<div className="pb-20"></div>
        
                   <div className=" flex flex-col w-full justify-center items-center">
      <h1 className="text-3xl font-bold tracking-tighter">Historia de la Municipalidad</h1>
      <MunicipalidadInfo historia={Historia .historia_municipalidad} />
        </div>
      </div>
    </>
  )
}

