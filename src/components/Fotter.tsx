import Link from "next/link";


export const Fotter = () =>{
    return(
        <footer className="bg-blue-100 py-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 ">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
              <ul>
                <li className="mb-2"><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li className="mb-2"><Link href="/servicios" className="text-blue-600 hover:text-blue-800">Servicios</Link></li>
                <li className="mb-2"><Link href="/nosotros" className="text-blue-600 hover:text-blue-800">Nosotros</Link></li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 px-4">
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="mb-2">Dirección: Barrio Las Acacias</p>
              <p className="mb-2">Teléfono: 2438-9111 </p>
              <p className="mb-2">Email: municipalidadbonitooriental@gmail.com</p>
            </div>
          </div>
        
          <div className="m-full text-center">
            <p className="text-gray-600">&copy; 2024 Ayuntamiento Municipal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      


    );
}