import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";



export default function CardHeroes({srcs, alt} :{srcs:string, alt:string} ) {

    return (

        <div className="flex flex-col gap-2  justify-center items-center pb-7">
            <Image alt={alt} width={350} height={250} src={srcs} style={{
            aspectRatio: "120/120",
            objectFit: "cover",
          }}
          className="rounded-3xl " />
   <Button color="primary" variant="bordered" startContent={<DownloadOutlined />}>
        Descargar
      </Button>
        </div>
    );
}