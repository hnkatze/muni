"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className='flex items-center h-14 px-4 w-full md:px-6 lg:justify-between lg:place-content-around lg:h-20'>
      <Link className='mr-6' href='/'>
        <span className='sr-only'>Bonito Oriental</span>
      </Link>
      <nav className='hidden space-x-4 lg:flex flex-1 min-w-0 items-center'>
        <Link className='font-medium' href='/'>
          Inicio
        </Link>
        <Link className='font-medium' href='/servicios'>
          Servicios{" "}
        </Link>
        <Link className='font-medium' href='/nosotros'>
          Nosotros
        </Link>
        <Link className='font-medium' href='/portal'>
          Portal
        </Link>
        <Link className='font-medium' href='/contact'>
          Contacto
        </Link>
        <Link className='font-medium' href='/recursos'>
          Recursos
        </Link>
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='ghost'>
            <MenuIcon />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='flex flex-col gap-2'>
            <Link className='font-medium' href='/' onClick={closeMenu}>
              Inicio
            </Link>
            <Link className='font-medium' href='/servicios' onClick={closeMenu}>
              Servicios
            </Link>
            <Link className='font-medium' href='/nosotros' onClick={closeMenu}>
              Nosotros
            </Link>
            <Link className='font-medium' href='/portal' onClick={closeMenu}>
              Portal
            </Link>
            <Link className='font-medium' href='/contact' onClick={closeMenu}>
              Contacto
            </Link>
            <Link className='font-medium' href='/recursos' onClick={closeMenu}>
              Recursos
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className='h-6 w-6'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}
