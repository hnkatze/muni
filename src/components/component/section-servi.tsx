"use client";
import { ArrowDownOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface SectionProps {
  imageUrl: StaticImageData;
  title: string;
  content: string;
  servicios: { title: string; Requisitos: string[] }[];
}

export const SectionServi: React.FC<SectionProps> = ({
  imageUrl,
  title,
  content,
  servicios,
}) => {
  const [ModalTitle, setModalTitle] = useState("");
  const [ModalContentA, setModalContent] = useState<string[]>([""]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openModal = (title: string, content: string[]) => {
    setModalTitle(title);
    setModalContent(content);
    onOpen();
  };
  return (
    <section className="flex w-full py-6 md:py-12 justify-center  ">
      <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
        <div className="w-[80%] flex flex-col md:flex-row ">
         <div className="w-full md:w-1/5"> <Image
            alt="Productivity Image"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-lg object-contain"
            height={200}
            src={imageUrl}
            width={300}
          />
          </div>
          <div className="w-full md:w-4/5 flex flex-col items-center space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-base/relaxed">
              {content}
            </p>
            <div className="w-[90%] flex flex-col justify-center items-center   ">
              <div>
                <h2 className="text-xl font-bold">Requisitos De:</h2>
              </div>
              <div className=" flex flex-col justify-center items-center md:grid md:grid-cols-2 ">
                {servicios.map((button, index) => (
                  <Button
                    key={index}
                    color="success"
                    variant="light"
                    className="w-fit flex justify-center text-sm md:text-base"
                    onPress={() => openModal(button.title, button.Requisitos)}
                  >
                    {button.title} <ArrowDownOutlined />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {ModalTitle}
                </ModalHeader>
                <ModalBody>
                  <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    {ModalContentA.map((content, index) => (
                      <li className="flex items-center" key={index}>
                        <svg
                          className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        {content}
                      </li>
                    ))}
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};
