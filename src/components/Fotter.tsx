import { LinkedinOutlined } from "@ant-design/icons";
import { Link as Linkq } from "@nextui-org/react";
import Link from "next/link";

import { SVGProps } from "react";

export function Fotter() {
  return (
    <footer className='w-full border-t flex items-center justify-center  '>
      <div className='container  grid-inset  grid gap-6 py-12 md:grid-cols-2 md:py-16 lg:gap-10 lg:py-20 xl:gap-12'>
        <div className='flex  items-center justify-center space-x-4'>
          <Link className='flex items-center space-x-2 font-semibold' href='#'>
            <FlagIcon className='h-6 w-6' />
            <span className='text-lg font-bold tracking-tighter sm:text-xl md:text-2xl'>
              Municipalidad Bonito Oriental
            </span>
          </Link>
        </div>
        <div className='grid gap-2 text-sm mx-5 md:mx-0 '>
          <div className='space-y-1'>
            <Link className='font-medium' href='/'>
              Inicio
            </Link>
          </div>
          <div className='space-y-1'>
            <Link className='font-medium' href='/servicios'>
              Servicios
            </Link>
          </div>
          <div className='space-y-1'>
            <Link className='font-medium' href='/nosotros'>
              Nosotros
            </Link>
          </div>
          <div className='space-y-1'>
            <Link className='font-medium' href='/portal'>
              Portal
            </Link>
          </div>
          <div className='space-y-1'>
            <Link className='font-medium' href='/contact'>
              Contacto
            </Link>
          </div>
          <div className='space-y-1'>
            <Link className='font-medium' href='/recursos'>
              Recursos
            </Link>
          </div>
        </div>
        <div className='space-y-4 text-sm md:col-start-2 mx-5 md:mx-0 md:text-base lg:text-sm xl:text-base'>
          <div className='space-y-1'>
            <p className='inline font-medium'>
              Calle Central Este, Barrio Las Acasias
            </p>
          </div>
          <div className='space-y-1'>
            <p className='inline font-medium'>
              municipalidadbonitoriental@gmail.com
            </p>
          </div>
          <div className='space-y-1'>
            <p className='inline font-medium'>+504 2438-9111</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 justify-center text-xs tracking-wide md:text-sm lg:text-xs xl:text-sm'>
          <div>
            <p className='text-gray-500 text-center sm:text-left dark:text-gray-400'>
              © 2023 Municipalidad Bonito Oriental. All rights reserved .
            </p>
          </div>
          <div className='flex justify-center w-full md:w-fit'>
            <Linkq
              className='font-light text-sm hover:underline  underline-offset-4 transition-colors  hover:text-gray-900/80'
              isExternal
              showAnchorIcon
              href='https://www.linkedin.com/in/hnkatze/'
              anchorIcon={<LinkedinOutlined />}>
              By Camilo Henriquez
            </Linkq>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
      <line x1='4' x2='4' y1='22' y2='15' />
    </svg>
  );
}
