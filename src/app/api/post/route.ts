import prisma from "@/config/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
  try {
    const existingData = await prisma.iPost.findMany();
    return new Response(JSON.stringify(existingData));
  } catch (error) {
    return new Response("error reading data file");
  }
}

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const newData:IPostId = await req.json();
     const data = await prisma.iPost.create({
        data: {
          id: newData.id,
          titulo: newData.titulo,
          descripcion: newData.descripcion,
          enlace: newData.enlace,
          zonas: newData.zonas,
        },
      });
      return new NextResponse(JSON.stringify(data.id), { status: 201 });
    } catch (error) {
      console.log("Error writing data file: " + error);
      return new Response("Error writing data file: " + error, { status: 500 });
    }
  } else {
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 }); 
  }
}

export async function DELETE(req: NextRequest) {
  if (req.method === "DELETE") {
    try {
      const newData = await req.json();
      await prisma.iPost.delete({
        where: {
          id: newData.id,
        },
      });
      return new NextResponse(
        JSON.stringify({ message: "Data deleted successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.log("Error deleting data file: " + error);
      return new Response("Error deleting data file: " + error, {
        status: 500,
      });
    }
  } else {
    return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
  }
}
