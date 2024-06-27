import {
  REQUISITOS_PARA_CONSTANCIAS_CATASTRALES,
  REQUISITOS_PARA_DECLARACION_JURADA,
  REQUISITOS_PARA_DOMINIO_PLENO,
  REQUISITOS_PARA_LOTIFICACION,
  REQUISITOS_PARA_MEDIDAS_Y_CROQUIS,
  REQUISITOS_PARA_PERMISOS_DE_CONSTRUCCION,
  REQUISITOS_PARA_URBANIZACION,
} from "@/lib/Catastro";
import {
  PERMISOS_DE_OPERACION,
  PERMISOS_PARA_ROTULOS_PUBLICITARIOS,
  SERVICIO_DE_TREN_DE_ASEO,
  SOLICITUD_DE_SOLVENCIA_MUNICIPAL,
} from "@/lib/Tributacion";
import {
  BOLETA_DE_DESTAZO,
  CANCELACION_DE_HERRAR,
  CARTAS_DE_VENTA,
  FORJAR_FIERRO,
  GUIA_DE_TRASLADO_DE_GANADO,
  LICENCIA_DE_DESTAZO,
  MATRICULA_DE_HERRAR,
  MATRICULA_DE_MOTOSIERRA,
  PERMISO_PARA_CARPA,
  PERMISO_PARA_MARATON,
  TRANSPORTE_DE_CARNE,
  TRANSPORTE_DE_QUESO,
  TRASPASO_DE_HERRAR,
} from "@/lib/Justicia";
import {
  REQUISITOS_PARA_MATRIMONIO,
  REQUISITOS_PARA_PATRONATO_Y_JUNTAS_DE_AGUA,
} from "@/lib/Secretaria";
import {
  REQUISITO_SOLICITAR_CARNET_AUXILIAR,
  SOLICITUD_DE_AYUDAS,
} from "@/lib/Desarrollo";
export const Catastro = [
  {
    title: "Constancias Catastrales",
    Requisitos: REQUISITOS_PARA_CONSTANCIAS_CATASTRALES,
  },
  {
    title: "Lotificacion",
    Requisitos: REQUISITOS_PARA_LOTIFICACION,
  },
  {
    title: "Urbanizacion",
    Requisitos: REQUISITOS_PARA_URBANIZACION,
  },
  {
    title: "Dominio Pleno",
    Requisitos: REQUISITOS_PARA_DOMINIO_PLENO,
  },
  {
    title: "Declaracion Jurada",
    Requisitos: REQUISITOS_PARA_DECLARACION_JURADA,
  },
  {
    title: "Medidas y Croquis",
    Requisitos: REQUISITOS_PARA_MEDIDAS_Y_CROQUIS,
  },
  {
    title: "Permisos de Construccion",
    Requisitos: REQUISITOS_PARA_PERMISOS_DE_CONSTRUCCION,
  },
];
export const Tributacion = [
  {
    title: "Permisos de Operacion",
    Requisitos: PERMISOS_DE_OPERACION,
  },
  {
    title: "Solicitud de Solvencia Municipal",
    Requisitos: SOLICITUD_DE_SOLVENCIA_MUNICIPAL,
  },
  {
    title: "Permisos para Rotulos Publicitarios",
    Requisitos: PERMISOS_PARA_ROTULOS_PUBLICITARIOS,
  },
  {
    title: "Servicio de Tren de Aseo",
    Requisitos: SERVICIO_DE_TREN_DE_ASEO,
  },
];
export const Justicia = [
  {
    title: "Matricula de Motosierra",
    Requisitos: MATRICULA_DE_MOTOSIERRA,
  },
  {
    title: "Guia de Traslado de Ganado",
    Requisitos: GUIA_DE_TRASLADO_DE_GANADO,
  },
  {
    title: "Cancelacion de Herrar",
    Requisitos: CANCELACION_DE_HERRAR,
  },
  {
    title: "Transporte de Queso",
    Requisitos: TRANSPORTE_DE_QUESO,
  },
  {
    title: "Transporte de Carne",
    Requisitos: TRANSPORTE_DE_CARNE,
  },
  {
    title: "Permiso para Carpa",
    Requisitos: PERMISO_PARA_CARPA,
  },
  {
    title: "Permiso para Maraton",
    Requisitos: PERMISO_PARA_MARATON,
  },
  {
    title: "Carta de Venta",
    Requisitos: CARTAS_DE_VENTA,
  },
  {
    title: "Forjar Fierro",
    Requisitos: FORJAR_FIERRO,
  },
  {
    title: "Matricula de Herrar",
    Requisitos: MATRICULA_DE_HERRAR,
  },
  {
    title: "Traspaso de Herrar",
    Requisitos: TRASPASO_DE_HERRAR,
  },
  {
    title: "Boleta de Destazo",
    Requisitos: BOLETA_DE_DESTAZO,
  },
  {
    title: "Licencia de Destazo",
    Requisitos: LICENCIA_DE_DESTAZO,
  },
];
export const Secretaria = [
  {
    title: "Requisitos para Matrimonio",
    Requisitos: REQUISITOS_PARA_MATRIMONIO,
  },
  {
    title: "Requisitos para Patronato y Juntas de Agua",
    Requisitos: REQUISITOS_PARA_PATRONATO_Y_JUNTAS_DE_AGUA,
  },
];

export const Desarrollo = [
  {
    title: "Solicitud de Carnet de Auxiliar",
    Requisitos: REQUISITO_SOLICITAR_CARNET_AUXILIAR,
  },
  {
    title: "Solicitud de Ayudas",
    Requisitos: SOLICITUD_DE_AYUDAS,
  },
];
