import Image from "next/image";
import secre from "@/assets/secretario.svg";
import { Button } from "@nextui-org/react";
import { ArrowDownOutlined } from "@ant-design/icons";

function Secretaria() {
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
    <main className="grid gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16">
      <div className=" flex flex-col md:flex-row md:gap-2">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-6xl/none xl:text-7xl/none">
            Secretaria Municipal.
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed md:text-justify md:pt-5">
            La oficina de secretaría en una municipalidad es esencial para el
            funcionamiento eficaz de la administración local, actuando como el
            corazón administrativo y de comunicaciones de la entidad. Es
            responsable de la gestión y archivo de documentos oficiales,
            facilitando la comunicación fluida entre el gobierno municipal,
            ciudadanos y otras entidades.
          </p>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-content"
          height="400"
          src={secre}
          width="600"
        />
      </div>
      <div className="mx-auto grid gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
            Soporte Administrativo
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Provee asistencia administrativa a las diversas áreas de la
            municipalidad, incluyendo la preparación de informes, manejo de
            agendas, y coordinación de eventos oficiales.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
            Gestion Documental
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Archiva y mantiene registros actualizados de todos los documentos
            oficiales, incluyendo actas de reuniones, ordenanzas municipales,
            decretos, y correspondencia oficial.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
            Atencion Al Ciudadano
          </h2>
          <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Atiende consultas del público, proporcionando información y
            orientación sobre trámites, servicios municipales, y actividades
            comunitarias.
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

export default Secretaria;
