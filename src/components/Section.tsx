import Image from "next/image";

interface SectionProps {
  imageUrl: string;
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ imageUrl, title, content }) => {
  return (
    <div className="flex flex-row justify-center gap-6">
      <div className="sm:hidden pr-20">
      
        <Image
          src={imageUrl}
          alt="Image Section"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="text-center w-[600px]">
        <p className="font-normal  text-3xl">{title}</p>
        <p className="pt-5  text-md text-justify">{content}</p>
      </div>
    </div>
  );
};

export default Section;
