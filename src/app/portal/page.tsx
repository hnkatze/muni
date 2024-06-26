import CardProyectos from "@/components/CardProyectos";

export default function Page() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-scenter ">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl md:text-5xl uppercase pb-5 my-7">
          proyectos desarrollados En 2024
        </h1>
      </div>
      <div className="w-full h-full   ">
        <CardProyectos />
      </div>
    </div>
  );
}
