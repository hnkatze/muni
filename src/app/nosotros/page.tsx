function Nosotros() {
  return (
    <>
    <div className="w-full h-full flex flex-col items-center">
  <div className="mx-auto">
    <h1 className="text-justify text-gray-700 font-sans text-5xl dark:text-gray-400 pb-5">Misión</h1>
  </div>
  <div className="items-center w-2/5">
    <p className="text-justify text-gray-500  font-sans dark:text-gray-400  ">
      Ser una institución pública líder en la prestación de servicios de calidad con eficiencia, eficacia y transparencia a la población del municipio, promoviendo el bienestar individual y colectivo, el desarrollo integral y sostenible en el ámbito social, económico, cultural y ambiental, con un enfoque participativo e inclusivo que fomente la corresponsabilidad entre la ciudadanía y las autoridades.
    </p>
  </div>
  <div className="mx-auto pt-10">
    <h1 className="text-justify text-gray-700 font-sans text-5xl dark:text-gray-400 pb-5">Visión</h1>
  </div>
  <div className="items-center w-2/5">
    <p className="text-justify text-gray-500  font-sans dark:text-gray-400 ">
    Ser un municipio modelo de participación ciudadana y desarrollo comunal, reconocido por la excelencia en la gestión pública, con un personal altamente calificado, comprometido, amable y eficiente que trabaja en equipo para atender las necesidades de las personas y brindar soluciones innovadoras a la comunidad, construyendo un futuro próspero, sostenible y equitativo para todos.
     </p>
  </div>
  <div className="flex justify-left pt-10">
  <a href="/doc/Mision Y Vision.pdf" download>
    <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg shadow-blue-500/50 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l2 2m0-2l-2-2" />
      </svg>
      <span className="ml-2">Descargar Misión y Visión</span>
    </button>
  </a>
</div>

</div>


    </>
  );
}

export default Nosotros;
