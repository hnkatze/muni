import Image from "next/image";

interface SectionProps {
  imageUrl: string;
  title: string;
  content: string;
}

export const Section: React.FC<SectionProps> = ({ imageUrl, title, content }) =>{
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
          <div className="relative overflow-hidden rounded-xl md:h-3/4 lg:h-3/4">
            <Image
          src={imageUrl}
          alt="Image Section"
          width={400}
          height={400}
          className="object-contain w-full h-60"
        />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
