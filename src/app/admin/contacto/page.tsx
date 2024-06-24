"use client";
import CardContacs from "@/components/CardContacs";
import ModalCreateIPost from "@/components/component/ModalCreateIPost";
import { useAuthStore } from "@/config/authStoreProvider";
import { deleteContact, getContacts } from "@/config/crude";
import { Modal } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Contacto() {
  const [contacts, setContacts] = useState<ContactDataWithId[]>([]);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    if (!user) {
      router.push("/admin");
    }
    async function getContactsss() {
      const data: ContactDataWithId[] = await getContacts();
      setContacts(data);
    }
    getContactsss();
  }, []);

  const handlerDelete = async (id: string) => {
    await deleteContact(id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    toast.success("Solicitud eliminada");
  };
  return (
    <main>
      <div className="text-center my-11 gap-1">
        <h1 className="text-3xl md:text-5xl uppercase ">
          Panel De Solicitudes Y Proyectos
        </h1>
        <ModalCreateIPost />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-9 gap-3 md:gap-0">
        {contacts.map((contact) => (
          <CardContacs
            key={contact.id}
            data={contact}
            handlerDelete={handlerDelete}
          />
        ))}
      </div>
    </main>
  );
}
