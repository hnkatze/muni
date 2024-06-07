import Image from 'next/image'
import Muni from '@/assets/Muni.png'
interface PrincipalProps {

  title: string;

}

const Principal: React.FC<PrincipalProps> = ({ title}) => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center ">
    <Image src={Muni} alt="Muni" width={550} height={650}  />
    <p className='text-4xl font-semibold lg:text-6xl text-center -translate-y-10 uppercase'>{title}</p>
    </div>
  )
}

export default Principal;


