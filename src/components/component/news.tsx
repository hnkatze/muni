import { Image } from "@nextui-org/react";


interface props{
  title:string;
  content:string;
  imgurl:string;
}

export const News: React.FC<props> = ({title, content, imgurl}) => {
  return (
          <div className="flex flex-col gap-2">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                alt={title}
                className="rounded-lg object-cover"
                height={250}
                src={imgurl}
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight leading-6">
                {title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
               {content}
              </p>
            </div>
          </div>
      
  )
}
