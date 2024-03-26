'use client'
import Donut from "@/components/Donut";
import { News } from "@/components/component/news";



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
        <section className="w-full py-6 md:py-12">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Seccion De Articulos</h2>
          <p className="text-gray-500 dark:text-gray-400">Ultimas Noticias</p>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 xl:grid-cols-2">

          <News title="Recreovia Semana Santa" imgurl="./image/recreo.JPG" content="Desde el sabado 23 de marzo, se realizo una actividad para los niños, con la finalidad de causar un impacto veraniego en ellos, compartir con ellos y con los demas"/>
           <News title="Entrega Ambulancia" imgurl="./image/ambu.jpg" content="Recibimiento de ambulancia, agradecer a la comunidad por el appollo que nos ha brindado para poder desarrollarnos de la mejor manera."/>
           <News title="Maraton" imgurl="./image/maraton.jpg" content="Realizando maratones, con el proposito de cultivar en nuestros colaboradores de los cuales tambien somos responsables"/>
           </div>
      </div>
    </section>
      
      </>
      

    );
}













  {/* <div className="flex justify-center gap-4 w-full">
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet1} title="Reparacion De Carreteras En Casco Urbano" />
          </div>
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet2} title="Remodelacion de centro de salud aldea el plantel" />
          </div>
          <div className="w-[25vw] flex flex-col items-center">
            <Donut datas={salesSet3} title="Colores Mi Papa" />
          </div>
        </div> */}