import { NextResponse, NextRequest } from "next/server";
import fs from 'fs';
import path from 'path';
import dataJson from '@/data.json';



export async function GET() {
try {
   return NextResponse.json(dataJson);
} catch (error) {
    return NextResponse.json({ess:'Error reading data file'});
}
  
}

export async function POST(req:NextRequest) {
    if (req.method === 'POST') {
        const filePath = path.join(process.cwd(), 'public', 'data.json');
        const newData = req.body;
        
        try {
          fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf8');
          NextResponse.json("Data written successfully");
        } catch (error) {
            NextResponse.json( 'Error writing data file' + error);
        }
      } else {

        NextResponse.json(`Method ${req.method} Not Allowed`);
      }
}