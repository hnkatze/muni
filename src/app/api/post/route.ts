import fs from "fs-extra";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "post.json");
    let existingData = [];
    if (await fs.pathExists(filePath)) {
      existingData = await fs.readJson(filePath);
    }
    return new Response(JSON.stringify(existingData));
  } catch (error) {
    return new Response("error reading data file");
  }
}
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const newData = await req.json();
      const filePath = path.join(process.cwd(), "public", "post.json");

      let existingData = [];
      if (await fs.pathExists(filePath)) {
        existingData = await fs.readJson(filePath);
      }

      existingData.push(newData);

      await fs.writeJson(filePath, existingData, { spaces: 2 });

      return new NextResponse(
        JSON.stringify({ message: "Data written successfully" }),
        { status: 200 }
      );
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
      const filePath = path.join(process.cwd(), "public", "post.json");

      let existingData = [];
      if (await fs.pathExists(filePath)) {
        existingData = await fs.readJson(filePath);
      }

      const newDataArray = existingData.filter(
        (item: any) => item.id !== newData.id
      );

      await fs.writeJson(filePath, newDataArray, { spaces: 2 });

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
