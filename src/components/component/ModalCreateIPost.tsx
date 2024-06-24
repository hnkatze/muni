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
import { toast } from "react-toastify";

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

  const createPost = async (form: IPost): Promise<void> => {
    try {
      console.log(form);
      await createPost(form).then(() => {
        toast.success("Proyecto agregado");
        setForm({ titulo: "", descripcion: "", zonas: "", enlace: "" });
        onClose();
      });
    } catch (error) {
      toast.error("Error adding document");
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
            <>
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
                <Button color="primary" onPress={() => createPost}>
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
