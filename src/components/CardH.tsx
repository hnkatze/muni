import React from "react";
import {Card, CardHeader, CardBody, Image, CardFooter, Button} from "@nextui-org/react";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";


export default function CardH({srcs, alt,name} :{srcs:string, alt:string, name:string} ) {
  return (
    <Card className="py-4 flex flex-col justify-center items-center">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-center">{name}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2 flex-col justify-center">
        <Image
            alt={alt}
            className="object-cover rounded-xl"
            src={srcs}
            width={270}
            height={270}
        />
    </CardBody>
    <CardFooter>
        <Link href={srcs} download>
            <Button color="primary" variant="faded"  startContent={<DownloadOutlined />}>
                Descargar
            </Button>
        </Link>
    </CardFooter>
</Card>
  );
}
