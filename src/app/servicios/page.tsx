

import { SectionServi } from '@/components/component/section-servi'
const buttonPropsExample = [
  {
    title: "Matrimonio",
    linkDes: "/doc/matri.pdf",
  },
  {
    title: "Download DOCX",
    linkDes: "https://example.com/document2.docx",
  },
  {
    title: "Download PPT",
    linkDes: "https://example.com/presentation.ppt",
  }
];
const buttonPropsExample2 = [
  {
    title: "Dominio Pleno",
    linkDes: "https://example.com/document1.pdf",
  },
  {
    title: "Escriturado",
    linkDes: "https://example.com/document2.docx",
  },
  {
    title: "Intereses",
    linkDes: "https://example.com/presentation.ppt",
  }
];

function Servicios() {
  return (
    <>
    <SectionServi buttonProps={buttonPropsExample} title='Secretaria' content='Esta oficina se encarga de las gestiones directas con el alcalde y todod lo relacionado con la administracion de la municipalidad.' imageUrl='./image/operator.png' />
    <SectionServi  buttonProps={buttonPropsExample2} title='Catastro' content='Oficina encargada con lo relacionado con los bienes y muebles(Pagos, gestiones de dominios plenos, impuestos).' imageUrl='./image/architecture.png' />
    
    </>
  )
}

export default Servicios