import Image from "next/image";
import secre from "@/assets/planificacion.png";
import { Button } from "@nextui-org/react";
import { ArrowDownOutlined } from "@ant-design/icons";

function Catastro() {
  const buttonPropsExample = [
    {
      title: "Matrimonio",
      linkDes: "/doc/matri.pdf",
    },
    {
      title: "Download DOCX",
      linkDes: "https://example.com/document2.docx",
    },
    {
      title: "Download PPT",
      linkDes: "https://example.com/presentation.ppt",
    },
  ];
  return (
    <main
      id="liz"
      className="grid gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16"
    >
      <div className=" flex flex-col md:flex-row md:pl-28 md:gap-2">
        <div className="space-y-2 md:pt-20">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-blue-400 md:not-italic md:text-6xl/none lg:text-6xl/none xl:text-7xl/none">
            Catastro
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed md:text-justify md:pt-5">
            La oficina de catastro en una municipalidad juega un papel
            fundamental en la gestión territorial, siendo la encargada de
            registrar y mantener actualizado el inventario de la propiedad
            inmueble urbana y rural dentro de su jurisdicción.
          </p>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-contain"
          height="400"
          src={secre}
          width="600"
        />
      </div>
      <div className="mx-auto flex  justify-center  gap-16 content-around">
        <div className="space-y-4 w-1/4">
          <h2 className="text-2xl font-bold md:text-blue-400 tracking-tighter sm:text-3xl md:text-4xl/none">
            Registro y Actualización Catastral
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed md:text-justify  lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Mantener un inventario actualizado de todas las propiedades
            inmuebles, incluyendo su identificación, delimitación, y
            características físicas y legales, para asegurar una base de datos
            precisa y confiable que soporte la gestión territorial.
          </p>
        </div>
        <div className="space-y-4 w-1/4">
          <h2 className="text-2xl font-bold md:text-blue-400 tracking-tighter sm:text-3xl md:text-4xl/none">
            Valoración Catastral
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed md:text-justify lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Determinar el valor de las propiedades inmuebles basándose en
            criterios objetivos y uniformes, que servirá como base para el
            cálculo de impuestos prediales y otras tasas relacionadas con la
            propiedad inmueble, promoviendo la equidad fiscal.
          </p>
        </div>
        <div className="space-y-4 w-1/4">
          <h2 className="text-2xl font-bold tracking-tighter md:text-blue-400 sm:text-3xl md:text-4xl/none">
            Soporte para la Planificación Urbana y Territorial
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed md:text-justify  xl:text-xl/relaxed dark:text-gray-400">
            Proveer información esencial para la planificación y desarrollo
            urbano, incluyendo proyectos de infraestructura, zonificación, y uso
            del suelo, facilitando la toma de decisiones estratégicas para el
            crecimiento sostenible y ordenado del municipio
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full  justify-center items-center  md:gap-10">
        <div className=" ">
          <h2 className="text-xl font-bold">Descargue Requisitos De:</h2>
        </div>
        <div className="flex gap-5 ">
          {buttonPropsExample.map((button, index) => (
            <a key={index} href={button.linkDes} download>
              <Button
                color="primary"
                variant="ghost"
                startContent={<ArrowDownOutlined />}
              >
                <span className="ml-2">{button.title}</span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Catastro;
