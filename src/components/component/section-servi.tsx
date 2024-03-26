import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";

interface ButtonProp {
  title: string;
  linkDes: string;
}

interface SectionProps {
  imageUrl: string;
  title: string;
  content: string;
  buttonProps: ButtonProp[];
}

export const SectionServi: React.FC<SectionProps> = ({
  imageUrl,
  title,
  content,
  buttonProps,
}) => {


  return (
    <section className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center px-4 space-y-4 md:px-6">
        <div className="grid max-w-[1300px] mx-auto items-center w-full gap-4 px-4 sm:px-6 md:gap-16 md:grid-cols-2">
          <img
            alt="Productivity Image"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-lg object-contain"
            height="200"
            src={imageUrl}
            width="300"
          />
          <div className="flex flex-col items-center space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
            <p className="max-w-[700px] text-gray-500 md:text-base/relaxed">
              {content}
            </p>
            <div className="flex flex-col max-w-sm items-center w-full gap-2 min-[400px]:max-w-md grid-cols-1 md:gap-4 md:grid-cols-2">
              <div><h2 className="text-xl font-bold">Descargue Requisitos De:</h2></div>
              <div className="flex gap-5">
              {buttonProps.map((button, index) => ( 
                <a key={index} href={button.linkDes} download> 
               
                  <Button color="primary" variant="ghost" startContent={<ArrowDownOutlined />}>
                    <span className="ml-2">{button.title}</span>
                  </Button>
                </a>
              ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
