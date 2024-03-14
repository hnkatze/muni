import Image from 'next/image'

interface PrincipalProps {
  imageUrl: string;
  title: string;

}

const Principal: React.FC<PrincipalProps> = ({ imageUrl, title}) => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center sm:-translate-y-20">
    <Image src={imageUrl} alt="Muni" width={550} height={650}  />
    <p className='text-4xl font-semibold lg:text-xl xl:text-2xl font-semibold -translate-y-10 uppercase'>{title}</p>
    </div>
  )
}

export default Principal;


