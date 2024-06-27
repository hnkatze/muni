import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ Hola: "Hola mundo" });
  } catch (error) {
    return NextResponse.json({ ess: "Error reading data file" });
  }
}
