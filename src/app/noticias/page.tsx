'use client'
import Donut from "@/components/Donut";



export default function Noticias(){
    const salesSet1 = [
        { name: 'En Proceso', datos: 10 },
        { name: 'Completado', datos: 40 },
        { name: 'Pendiente', datos: 50 }
      ];
            const salesSet2 = [
        { name: 'Aprobado', datos: 60 },
        { name: 'Rechazado', datos: 25 },
        { name: 'Pendiente', datos: 15 }
      ];
            const salesSet3 = [
        { name: 'Rojo', datos: 20 },
        { name: 'Azul', datos: 30 },
        { name: 'Verde', datos: 50 }
      ];
      

    return(
        <>
        <div className="flex justify-center gap-4 w-full">
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet1} title="Reparacion De Carreteras En Casco Urbano" />
          </div>
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet2} title="Remodelacion de centro de salud aldea el plantel" />
          </div>
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet3} title="Colores Mi Papa" />
          </div>
        </div>
      </>
      

    );
}