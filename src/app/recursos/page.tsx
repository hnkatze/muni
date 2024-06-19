import CardH from "@/components/CardH";



export default function Procer(){
  const heroes = [
    { id: 1, name: 'Dionisio de Herrera' },
    { id: 2, name: 'Jose Trinidad Cabañas' },
    { id: 3, name: 'Cacique Lempira' },
    { id: 4, name: 'Gral. Francisco Morazan' },
    { id: 5, name: 'Jose Trinidad Reyes' },
    { id: 6, name: 'Jose Cecilio del Valle' },
    { id: 7, name: 'Bandera Nacional' },
    { id: 8, name: 'Venado Cola Blanca' },
    { id: 9, name: 'Escudo Nacional' },
    { id: 10, name: 'Guacamaya' },
    { id: 11, name: 'Orquidea Brassavola' },
    { id: 12, name: 'Pino' },
    { id: 13, name: 'Guacamaya Animada' },
    { id: 14, name: 'Peque. Guacamaya' },
];


  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
    <h2 className="p-9 md:p-14 text-2xl md:text-5xl text-center uppercase underline">
        Descargables De Proceres Y Simbolos Patrios
    </h2>
    <div className="w-full flex flex-wrap justify-center gap-9 ">
        {heroes.map((hero) => (
            <div key={hero.id} className="w-[70%] h-auto lg:h-2/4 md:w-[300px] flex-shrink-0 justify-center items-center ">
                <CardH srcs={`/proceres/Heroes/${hero.id}.jpg`} alt={hero.name} name={hero.name} />
            </div>
        ))}
    </div>
</div>
  )

}