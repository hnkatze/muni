'use client'
import Donut from "@/components/Donut";



export default function Noticias(){
    const labels = ['En Proceso', 'Completado', 'Pendiente'];
const series = [10, 40, 50];

const labels2 = ['Aprobado', 'Rechazado', 'Pendiente'];
const series2 = [60, 25, 15];

const labels1 = ['Rojo', 'Azul', 'Verde'];
const series1 = [20, 30, 50];

    return(
        <>
        <div className="flex  justify-center gap-4 w-full">
<Donut series={series} labels={labels} title="Reparacion De Carreteras En Casco Urbano" />
<Donut series={series2} labels={labels2} title="Remodelacion de centro de salud aldea el plantel" />
<Donut series={series1} labels={labels1} title="Colores Mi Papa" />
</div>
</>

    );
}