
import { CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  content: string;
 
}

export const CardS:React.FC<ImageCardProps> = ({ imageUrl, title, content }) =>  {
  return (
    <Card className="w-full max-w-sm mx-auto ">
      <CardContent className="flex flex-col items-center">
        <img
          alt="Image"
          className="rounded-full"
          height="120"
          src={imageUrl}
          style={{
            aspectRatio: "120/120",
            objectFit: "cover",
          }}
          width="120"
        />
        <CardTitle className="text-xl font-bold mt-4">{title}</CardTitle>
        <CardDescription className="text-center my-2">
          {content}
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t justify-center">
        <Button><Link href="/servicios" > Ver Mas</Link></Button>
      </CardFooter>
    </Card>
  )
}
