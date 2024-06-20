import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CardH({
  srcs,
  alt,
  name,
}: {
  srcs: string;
  alt: string;
  name: string;
}) {
  console.log(srcs);
  return (
    <Card className="py-4 flex flex-col justify-center items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-center">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-col justify-center">
        <div className="relative w-[250px] h-[270px] flex justify-center items-center">
          <Image
            alt={alt}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="rounded-lg"
            src={srcs}
            width={200}
            height={240}
          />
        </div>
      </CardBody>
      <CardFooter>
        <Link href={srcs} download>
          <Button
            color="primary"
            variant="faded"
            startContent={<DownloadOutlined />}
          >
            Descargar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
