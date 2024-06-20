import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import { proyectos } from "@/lib/proyectos";

export default function CardProyectos() {

  return (
    <div className=" flex  w-full h-full justify-center items-center gap-4 pt-7">
    {proyectos.map((proyecto:Proyecto, index:number) => (
      <Card className="max-w-[400px]" key={index}>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{proyecto.titulo}</p>
          <p className="text-small text-default-500">{proyecto.zonas}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{proyecto.descripcion }</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={proyecto.enlace}
        >
          Puedes Ver Las Imagenes Aqui
        </Link>
      </CardFooter>
    </Card>
  ))}
</div>
  );
    
}
 