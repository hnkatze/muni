import Image from "next/image"
import BonitoMap from '@/components/Bonitomap.svg'



export function History() {
  return (
    <>
      <div className="bg-gray-50/90 w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_200px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">Sobre Nosotros</h1>
              <p className="max-w-screen-md text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Aprende mas sobre nuestro viaje, nuestros valores y nuestras aspiraciones
              </p>
            </div>
            <Image
              alt="About"
              className="mx-auto  overflow-hidden aspect-auto object-contain object-center   w-full sm:w-[200px]"
              height="200"
              src={BonitoMap}
              width="200"
            />
          </div> 
        </div>
      </div>
      <div className="w-full ">
      <div className="flex flex-col md:flex-row gap-8">
  <div className="space-y-2 flex-1">
    <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
    <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
      We are on a mission to enable frontend developers to do their best work. We provide the platform and tools to help teams collaborate, iterate, and innovate, delivering the exceptional web experiences that users expect.
    </p>
  </div>
  <div className="space-y-2 flex-1">
    <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
    <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
      We envision a world where every website is a delightful experience. We believe in the power of the web to connect, inform, and inspire, and we are dedicated to making the frontend the most exciting and innovative part of the digital world.
    </p>
  </div>
</div>

        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4 lg:col-span-2 lg:pr-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our History</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Since our founding in 2015, we've been on a mission to empower developers and organizations to
                  innovate and build the best software. We started by creating a platform for deploying frontend code
                  and have since expanded to offer a complete workflow for frontend development.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                 
                  <div className="text-sm text-gray-500 dark:text-gray-400">2015: Vercel founded</div>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <div className="text-sm text-gray-500 dark:text-gray-400">2016: Next.js launched</div>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <div className="text-sm text-gray-500 dark:text-gray-400">2018: Now platform introduced</div>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <div className="text-sm text-gray-500 dark:text-gray-400">2020: Vercel for GitHub launched</div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

