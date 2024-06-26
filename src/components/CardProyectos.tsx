"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function CardProyectos() {
  const [proyectos, setProyectos] = useState<IPostId[]>([]);

  useEffect(() => {
    async function getProyectos() {
      const data: IPostId[] = await fetch("/api/post", { method: "GET" })
        .then((res) => res.json())
        .then((data) => data);  
      setProyectos(data);
    }
    getProyectos();

  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 ">
      {proyectos.map((proyecto: Proyecto, index: number) => (
        <Card className="w-full h-[240px]" key={index}>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{proyecto.titulo}</p>
              <p className="text-small text-default-500">{proyecto.zonas}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-hidden">
            <p>{proyecto.descripcion}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={proyecto.enlace}>
              Ver Aqui!!
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
