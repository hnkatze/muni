import architecture from "@/image/servicios/architecture.png";
import catas from "@/image/servicios/map.png";
import ope from "@/image/servicios/operator.png";
import tribu from "@/image/servicios/finance.jpg"
import justice from "@/image/servicios/justice.png";

import { SectionServi } from "@/components/component/section-servi";
import { Catastro, Justicia, Secretaria, Tributacion } from "./Indice";


function Servicios() {
  return (
    <>
    <SectionServi
        servicios={Secretaria}
        title='Secretaria'
        content='Esta oficina se encarga de las gestiones directas con el alcalde y todo lo relacionado con la administracion de la municipalidad.'
        imageUrl={ope}
      />
      <SectionServi
        servicios={Tributacion}
        title='Tributacion'
        content='Oficina encargada de la gestión de impuestos y tributos en el municipio.'
        imageUrl={tribu}
      />
      <SectionServi
        servicios={Catastro}
        title='Catastro'
        content='Oficina encargada con lo relacionado con los bienes y muebles(Pagos, gestiones de dominios plenos, impuestos).'
        imageUrl={catas}
      />
        {/* <SectionServi
        servicios={REQUISITOS_PARA_DESARROLLO_COMUNITARIO}
        title='Desarrollo Comunitario'
        content='Oficina encargada del desarrollo y bienestar comunitario en el municipio.'
        imageUrl={architecture}
      /> */}
       <SectionServi
        servicios={Justicia}
        title='Justicia'
        content='Oficina encargada de los trámites legales y judiciales dentro del municipio.'
        imageUrl={justice}
      />
    </>
  );
}

export default Servicios;
