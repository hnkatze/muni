import { Button, Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";

interface ImageCardProps {
    imageUrl: string;
    title: string;
    content: string;
  }
  export const CardService: React.FC<ImageCardProps> = ({ imageUrl, title, content }) => {

    return(
   
    <Card className=" justify-center w-[250px] h-[290px] items-center sm:w-[180px] sm:h-[280px] sm:items-center">
      <CardHeader className="overflow-visible  w-[130px] sm:w-[100px]  sm:items-center ">
      <Image
          alt="Card background"
          isBlurred={true}
          className="object-cover rounded-xl "
          src={imageUrl}
          width={200}
        />
      </CardHeader>
      <CardBody className=" flex-col items-center ">
        <p className="text-sm uppercase font-bold">{title}</p>
        <small className="text-default-500 text-justify">{content}</small>
      </CardBody>
     
      <CardFooter>
      <Button radius="full" size="sm" className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-500 to-blue-600
      ">
         <Link className="text-slate-50">Visitar</Link>
        </Button>
      </CardFooter>
    </Card>

        
    );
}