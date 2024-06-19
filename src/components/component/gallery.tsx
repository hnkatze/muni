
import { Card, CardContent } from "@/components/ui/card"
import { Button, Image } from "@nextui-org/react";
import { DownloadOutlined } from "@ant-design/icons";
import Link from "next/link";


export function Gallery() {
  const heroes = [
    { id: 1, name: 'Dionisio de Herrera' },
    { id: 2, name: 'Jose Trinidad Cabañas' },
    { id: 3, name: 'Cacique Lempira' },
    { id: 4, name: 'Gral. Francisco Morazan' },
    { id: 5, name: 'Jose Trinidad Reyes' },
    { id: 6, name: 'Jose Cecilio del Valle' },
    { id: 7, name: 'Bandera Nacional' },
    { id: 8, name: 'Venado Cola Blanca' },
    { id: 9, name: 'Escudo Nacional' },
    { id: 10, name: 'Guacamaya' },
    { id: 11, name: 'Orquidea Brassavola' },
    { id: 12, name: 'Pino' },
    { id: 13, name: 'Guacamaya Animada' },
    { id: 14, name: 'Peque. Guacamaya' },
];
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 py-8 px-6">
        <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Proceres Y Simbolos Patrios</h1>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {heroes.map((product) => (
            <Card key={product.id} className="relative group">
               <Image
                src={`/proceres/Heroes/${product.id}.jpg`}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <Link href={`/proceres/Heroes/${product.id}.jpg`} download>
            <Button color="primary" variant="faded" className="w-full mt-4"  startContent={<DownloadOutlined />}>
                Descargar
            </Button>

                <Button size="sm" className="w-full mt-4">
                  Descargar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
    </div>
  )
}


function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
