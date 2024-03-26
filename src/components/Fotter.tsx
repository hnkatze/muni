
import Link from "next/link"

export function Fotter() {
  return (
    <footer className="w-full border-t flex items-center justify-center">
      <div className="container grid-inset  grid gap-6 py-12 md:grid-cols-2 md:py-16 lg:gap-10 lg:py-20 xl:gap-12">
        <div className="flex items-center justify-center space-x-4">
          <Link className="flex items-center space-x-2 font-semibold" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">Municipalidad Bonito Oriental</span>
          </Link>
        </div>
        <div className="grid gap-2 text-sm">
          <div className="space-y-1">
            <Link className="font-medium" href="/">
              Inicio
            </Link>
          </div>
          <div className="space-y-1">
            <Link className="font-medium" href="/servicios">
              Servicios
            </Link>
          </div>
          <div className="space-y-1">
            <Link className="font-medium" href="/nosotros">
              Nosotros
            </Link>
          </div>
          <div className="space-y-1">
            <Link className="font-medium" href="/noticias">
              Noticias
            </Link>
          </div>
          <div className="space-y-1">
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-sm md:col-start-2 md:text-base lg:text-sm xl:text-base">
          <div className="space-y-1">
            <p className="inline font-medium">Calle Central Este, Barrio Las Acasias</p>
          </div>
          <div className="space-y-1">
            <p className="inline font-medium">municipalidadbonitoriental@gmail.com</p>
          </div>
          <div className="space-y-1">
            <p className="inline font-medium">+504 2438-9111</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end text-xs tracking-wide md:text-sm lg:text-xs xl:text-sm">
          <p className="text-gray-500 text-center sm:text-left dark:text-gray-400">
            © 2023 Municipalidad Bonito Oriental. All rights reserved.
          </p>
          <div className="flex items-center justify-end gap-2 min-[400px]:gap-4">
            <Link
              className="font-medium hover:underline underline-offset-4 transition-colors text-gray-900 hover:text-gray-900/80 dark:text-gray-50 dark:hover:text-gray-50/80"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-medium hover:underline underline-offset-4 transition-colors text-gray-900 hover:text-gray-900/80 dark:text-gray-50 dark:hover:text-gray-50/80"
              href="#"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
