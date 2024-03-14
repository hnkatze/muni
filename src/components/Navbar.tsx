import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";



export function NavBar(){

    return(
        <Navbar>
        <NavbarBrand>
               <p className="font-normal text-inherit">BONITO ORIENTAL</p>
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" href="#">
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/nosotros" aria-current="page">
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Noticias
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}