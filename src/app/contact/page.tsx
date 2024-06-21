"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import handlerMail from "@/api/contact";

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handlerMail(formData);

    if (success) {
      alert("Listo, Nos Pondremos En Contacto Contigo Pronto.");
    } else {
      alert("Parece que hubo un error, por favor intenta de nuevo más tarde.");
    }
  };
  return (
    <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16'>
        <div className='space-y-6'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Ponte en Contacto
            </h2>
            <p className='text-gray-500  mt-2'>
              ¿Tienes una pregunta o quieres trabajar juntos? Completa el
              formulario a continuación o contáctanos directamente.
            </p>
          </div>
          <form className='space-y-4 text-white' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white'>
              <div>
                <Label htmlFor='name'>Nombre</Label>
                <Input
                  id='name'
                  required
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Ingresa tu nombre'
                />
              </div>
              <div>
                <Label htmlFor='email'>Correo Electrónico</Label>
                <Input
                  id='email'
                  required
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  type='email'
                  placeholder='Ingresa tu correo electrónico'
                />
              </div>
            </div>
            <div>
              <Label htmlFor='subject'>Asunto</Label>
              <Input
                id='subject'
                required
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Ingresa el asunto'
              />
            </div>
            <div>
              <Label htmlFor='message'>Mensaje</Label>
              <Textarea
                id='message'
                required
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Ingresa tu mensaje'
                className='min-h-[150px]'
              />
            </div>
            <Button type='submit'>Enviar Mensaje</Button>
          </form>
        </div>
        <div className='space-y-6'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Información de Contacto
            </h2>
            <p className='text-gray-500 dark:text-gray-400 mt-2'>
              Encuéntranos en la oficina o ponte en contacto a través de otros
              canales.
            </p>
          </div>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold'>Dirección</h3>
              <p className='text-gray-500 dark:text-gray-400'>
                Calle Centrar Este, 1 y 2 ave., Barrio Las Acacias
              </p>
            </div>
            <div>
              <h3 className='font-semibold'>Teléfono</h3>
              <p className='text-gray-500 dark:text-gray-400'>+504 2438-9111</p>
            </div>
            <div>
              <h3 className='font-semibold'>Correo Electrónico</h3>
              <p className='text-gray-500 dark:text-gray-400'>
                municipalidadbonitoriental@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
