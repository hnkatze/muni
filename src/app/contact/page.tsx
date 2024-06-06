'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Component() {
    const [name,setName] = useState<string>("")
    const [mail,setMail] = useState<string>("")
    const [sub,setSub] = useState<string>("")
    const [mess,setMess] = useState<string>("")

    const handleHelp = () =>{
        alert(`Hola, Muy Pronto Nos Pondremos En Contacto Con Usted`);
    }
    return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Ponte en Contacto</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              ¿Tienes una pregunta o quieres trabajar juntos? Completa el formulario a continuación o contáctanos
              directamente.
            </p>
          </div>
          <form className="space-y-4" action={handleHelp} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa tu nombre" />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" required value={mail} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Ingresa tu correo electrónico" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Asunto</Label>
              <Input id="subject" required value={sub} onChange={(e) => setSub(e.target.value)} placeholder="Ingresa el asunto" />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" required value={mess} onChange={(e) => setMess(e.target.value)} placeholder="Ingresa tu mensaje" className="min-h-[150px]" />
            </div>
            <Button type="submit">Enviar Mensaje</Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Información de Contacto</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Encuéntranos en la oficina o ponte en contacto a través de otros canales.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Dirección</h3>
              <p className="text-gray-500 dark:text-gray-400">Calle Centrar Este, 1 y 2 ave., Barrio Las Acacias</p>
            </div>
            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <p className="text-gray-500 dark:text-gray-400">+504 2438-9111</p>
            </div>
            <div>
              <h3 className="font-semibold">Correo Electrónico</h3>
              <p className="text-gray-500 dark:text-gray-400">municipalidadbonitoriental@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}