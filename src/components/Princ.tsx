import Image from "next/image";
import Princ from '@/components/muni.png'
interface PrincipalProps {
  title: string;

}

export const Principal: React.FC<PrincipalProps> = ({  title}) =>  {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
       <Image src={Princ} alt="Muni" width={550} height={650}  />
      <div className="flex w-full h-full items-center justify-center absolute inset-0 p-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-gray-50">
          {title}
        </h1>
      </div>
    </div>
  )
}
