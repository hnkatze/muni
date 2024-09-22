"use client";
import CardContacs from "@/components/CardContacs";
import ModalCreateIPost from "@/components/component/ModalCreateIPost";
import { getUser } from "@/config/authStoreProvider";
import { deleteContact, getContacts } from "@/config/crude";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Link,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SVGProps, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Contacto() {
  const [contacts, setContacts] = useState<ContactDataWithId[]>([]);
  const [projects, setProjects] = useState<IPostId[]>([]);
  const router = useRouter();
  const user = getUser();

  const getPost = async () => {
    const data: IPostId[] = await fetch("/api/post", { method: "GET" })
      .then((res) => res.json())
      .then((data) => data);
    setProjects(data);
  };

  const deletePost = async (id: string) => {
    await fetch(`/api/post/`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  useEffect(() => {
    if (!user) {
      router.push("/admin");
    }
    async function getContactsss() {
      const data: ContactDataWithId[] = await getContacts();
      setContacts(data);
    }
    getPost();
    getContactsss();
  }, []);

  const handlerDelete = async (id: string) => {
    await deleteContact(id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    toast.success("Solicitud eliminada");
  };

  return (
    <main className='flex flex-col gap-10 w-full justify-center items-center'>
      <div className='text-center my-11 gap-1'>
        <h1 className='text-3xl md:text-5xl uppercase mb-10 '>
          Panel De Solicitudes Y Proyectos
        </h1>
        <ModalCreateIPost />
      </div>

      <div className='flex flex-col my-12 w-3/5'>
        <h2 className='uppercase  text-3xl text-center my-5'>Solicitudes</h2>
        <Table removeWrapper aria-label='Example static collection table'>
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Asunto</TableColumn>
            <TableColumn>Mensaje</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {contacts.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.email}</TableCell>
                <TableCell>{project.subject}</TableCell>
                <TableCell>{project.message}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handlerDelete(project.id)}
                    isIconOnly
                    color='danger'>
                    <DeleteIconss />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div></div>
      </div>
      <div className='flex flex-col my-12 w-3/5'>
        <h2 className='uppercase  text-3xl text-center my-5'>Proyectos</h2>
        <Table removeWrapper aria-label='Example static collection table'>
          <TableHeader>
            <TableColumn>Titulo</TableColumn>
            <TableColumn>Descripcion</TableColumn>
            <TableColumn>Zonas</TableColumn>
            <TableColumn>Enlace</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.titulo}</TableCell>
                <TableCell>{project.descripcion}</TableCell>
                <TableCell>{project.zonas}</TableCell>
                <TableCell>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.enlace}
                    className='text-blue-600 underline'>
                    Folder
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => deletePost(project.id)}
                    isIconOnly
                    color='danger'>
                    <DeleteIconss />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div></div>
      </div>
    </main>
  );
}

const DeleteIconss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 20 20'
    width='1em'
    {...props}>
    <path
      d='M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M8.60834 13.75H11.3833'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M7.91669 10.4167H12.0834'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);
