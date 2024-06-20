import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const removeFileExtension = (filename: string): string => {
  return filename.split(".").slice(0, -1).join(".");
};
export const heroes = [
  { id: 1, name: "Dionisio de Herrera", src: "/proceres/Heroes/1.jpg" },
  { id: 2, name: "Gral. Francisco Morazan", src: "/proceres/Heroes/2.jpg" },
  { id: 3, name: "Jose Cecilio del Valle", src: "/proceres/Heroes/3.jpg" },
  { id: 4, name: "Jose Trinidad Cabañas", src: "/proceres/Heroes/4.jpg" },
  { id: 5, name: "Jose Trinidad Reyes", src: "/proceres/Heroes/5.jpg" },
  { id: 6, name: "Cacique Lempira", src: "/proceres/Heroes/6.jpg" },
  { id: 7, name: "Escudo Nacional", src: "/proceres/Heroes/7.jpg" },
  { id: 8, name: "Peque. Guacamaya", src: "/proceres/Heroes/8.jpg" },
  { id: 9, name: "Guacamaya Animada", src: "/proceres/Heroes/9.jpg" },
  { id: 10, name: "Guacamaya", src: "/proceres/Heroes/10.jpg" },
  { id: 11, name: "Orquidea Brassavola", src: "/proceres/Heroes/11.jpg" },
  { id: 12, name: "Pino", src: "/proceres/Heroes/12.jpg" },
  { id: 13, name: "Venado Cola Blanca", src: "/proceres/Heroes/13.jpg" },
  { id: 14, name: "Bandera Nacional", src: "/proceres/Heroes/14.jpg" },
];

export const billetes = [
  { id: 1, name: "1 Lempira Back", src: "/proceres/billetes/1.jpg" },
  { id: 2, name: "1 Lempira Front", src: "/proceres/billetes/2.jpg" },
  { id: 3, name: "2 Lempiras Back", src: "/proceres/billetes/3.jpg" },
  { id: 4, name: "2 Lempiras Front", src: "/proceres/billetes/4.jpg" },
  { id: 5, name: "5 Lempiras Back", src: "/proceres/billetes/5.jpg" },
  { id: 6, name: "5 Lempiras Front", src: "/proceres/billetes/6.jpg" },
  { id: 7, name: "10 Lempiras Back", src: "/proceres/billetes/7.jpg" },
  { id: 8, name: "10 Lempiras Front", src: "/proceres/billetes/8.jpg" },
  { id: 9, name: "20 Lempiras Back", src: "/proceres/billetes/9.jpg" },
  { id: 10, name: "20 Lempiras Front", src: "/proceres/billetes/10.jpg" },
  { id: 11, name: "50 Lempiras Back", src: "/proceres/billetes/11.jpg" },
  { id: 12, name: "50 Lempiras Front", src: "/proceres/billetes/12.jpg" },
  { id: 13, name: "100 Lempiras Back", src: "/proceres/billetes/13.jpg" },
  { id: 14, name: "100 Lempiras Front", src: "/proceres/billetes/14.jpg" },
  { id: 15, name: "200 Lempiras Back", src: "/proceres/billetes/15.jpg" },
  { id: 16, name: "200 Lempiras Front", src: "/proceres/billetes/16.jpg" },
  { id: 17, name: "500 Lempiras Back", src: "/proceres/billetes/17.jpg" },
  { id: 18, name: "500 Lempiras Front", src: "/proceres/billetes/18.jpg" },
];
