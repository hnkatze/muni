import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Fotter } from "@/components/Fotter";
import Nav from "@/components/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bontio Oriental",
  description: "Municipalidad de Bonito Oriental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
      <Nav />
        <Providers>{children}</Providers>
      <br />
      <ToastContainer />
        <Fotter/>
      </body>
    </html>
  );
}
