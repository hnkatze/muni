// Code: ModalCreateIPost Component
"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { v4 as uuid } from "uuid";

export default function ModalCreateIPost() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [form, setForm] = useState<IPost>({
    titulo: "",
    descripcion: "",
    zonas: "",
    enlace: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const id = uuid();
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          titulo: form.titulo,
          descripcion: form.descripcion,
          zonas: form.zonas,
          enlace: form.enlace,
        }),
      });
      const result = await response.json();

      if (!result.ok) {
        onClose();
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Agregar Proyecto
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Nuevo Proyecto
              </ModalHeader>
              <ModalBody>
                <Input
                  placeholder="Nombre del proyecto"
                  className="h-11 bg-gray-700 text-white"
                  onChange={handleChange}
                  name="titulo"
                />
                <Textarea
                  placeholder="Descripcion... "
                  className=" bg-gray-700 text-white"
                  onChange={(e) =>
                    setForm({ ...form, descripcion: e.target.value })
                  }
                  name="descripcion"
                />
                <Input
                  placeholder="Zonas Ejem.... carbonales,la jua.."
                  className="h-11 bg-gray-700 text-white"
                  onChange={handleChange}
                  name="zonas"
                />
                <Input
                  placeholder="Enlace de la carpeta"
                  className="h-11 bg-gray-700 text-white"
                  onChange={handleChange}
                  name="enlace"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" type="submit">
                  Agregar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
