import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  calles,
  centro,
  cerco,
  cuneta,
  deporte,
  electrificacion,
} from "@/lib/indexPicture";
import Image from "next/image";

export default function Component() {
  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-8 ">
      <h2 className="w-full h-24 text-center font-semibold uppercase text-4xl">Portal Informativo De Proyectos</h2>
      {/* Proyecto De Carrereteras*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {calles.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">Proyecto de Carreteras</h2>
        </div>
      </div>
      {/* Proyecto De Cerco*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {cerco.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">Cerco Perimetral,Corocito</h2>
        </div>
      </div>
      {/* Proyecto De Cerco*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {cuneta.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">Limpieza De Cunetas</h2>
        </div>
      </div>

      {/* Proyecto De Electrificacion*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {electrificacion.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">
            Proyecto De Electrificacion.
          </h2>
        </div>
      </div>
      {/* Proyecto De deporte*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {deporte.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">Apoyo a Deporte.</h2>
        </div>
      </div>

      {/* Proyecto De Centro Salud*/}
      <div className="w-[26%] h-1/2 flex flex-col mx-auto my-auto ">
        <div className="w-full">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              {centro.map((imagen, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64">
                    <Image
                      src={imagen.src}
                      alt={imagen.alt}
                      width={500}
                      height={450}
                      objectPosition="center top"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:hover:bg-gray-800/75 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-900 dark:text-gray-50" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-xl">Reparacion Centro De Salud.</h2>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}
function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
