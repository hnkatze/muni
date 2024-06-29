import CardH from "@/components/CardH";
import { billetes, heroes } from "@/lib/utils";

export default function Procer() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center'>
      <h2 className='p-9 md:p-14 text-2xl md:text-5xl text-center uppercase underline'>
        Descargables De Proceres Y Simbolos Patrios
      </h2>
      <div className='w-full flex flex-wrap justify-center gap-9 '>
        {heroes.map((hero) => (
          <div
            key={hero.name}
            className='w-[70%] h-auto lg:h-2/4 md:w-[300px] flex-shrink-0 justify-center items-center '>
            <CardH srcs={hero.src} alt={hero.name} name={hero.name} />
          </div>
        ))}
      </div>
      <h2 className='p-9 md:p-14 text-2xl md:text-5xl text-center uppercase underline'>
        Moneda Nacional
      </h2>
      <div className='w-full flex flex-wrap justify-center gap-9 '>
        {billetes.map((bille) => (
          <div
            key={bille.name}
            className='w-[70%] h-auto lg:h-2/4 md:w-[300px] flex-shrink-0 justify-center items-center '>
            <CardH srcs={bille.src} alt={bille.name} name={bille.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
