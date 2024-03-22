import MunicipalidadInfo from "@/components/Histori";
import { History } from "@/components/history";
import Historia from "@/utilities/Historia.json";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";

function Nosotros() {
  return (
    <>
    <History />
    {/* <div className="w-full h-full flex flex-col items-center">
  <div className="mx-auto">
    <h1 className="text-justify text-gray-700 font-sans text-5xl dark:text-gray-400 pb-5">Misión</h1>
  </div>
  <div className="items-center w-2/5">
    <p className="text-justify text-gray-500  font-sans dark:text-gray-400  ">
      Ser una institución pública líder en la prestación de servicios de calidad con eficiencia, eficacia y transparencia a la población del municipio, promoviendo el bienestar individual y colectivo, el desarrollo integral y sostenible en el ámbito social, económico, cultural y ambiental, con un enfoque participativo e inclusivo que fomente la corresponsabilidad entre la ciudadanía y las autoridades.
    </p>
  </div>
  <div className="mx-auto pt-10">
    <h1 className="text-justify text-gray-700 font-sans text-5xl dark:text-gray-400 pb-5">Visión</h1>
  </div>
  <div className="items-center w-2/5">
    <p className="text-justify text-gray-500  font-sans dark:text-gray-400 ">
    Ser un municipio modelo de participación ciudadana y desarrollo comunal, reconocido por la excelencia en la gestión pública, con un personal altamente calificado, comprometido, amable y eficiente que trabaja en equipo para atender las necesidades de las personas y brindar soluciones innovadoras a la comunidad, construyendo un futuro próspero, sostenible y equitativo para todos.
     </p>
  </div>
  <div className=" items-center p-0 ">
      <h1 className="text-center text-gray-700 font-sans text-5xl dark:text-gray-400 pb-8">Historia de la Municipalidad</h1>
      <MunicipalidadInfo historia={Historia .historia_municipalidad} />
    </div>
    <div className="flex justify-left gap-10 ">
    <a href="/doc/Mision Y Vision.pdf" download>
      
    <Button color="primary" variant="ghost" startContent={<ArrowDownOutlined />}>
                       <span className="ml-2">Descargar Misión y Visión</span>
        </Button>
    </a>
    <a href="/doc/HISTORIA.pdf" download>
    <Button color="primary" variant="ghost" startContent={<ArrowDownOutlined />}>
            <span className="ml-2">Descargar Historia</span>
        </Button>
    </a>
</div>
</div> */}

    </>
  );
}

export default Nosotros;
