import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const filePath = "/mnt/data/mapvideo.mp4";
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "video/mp4",
    },
  });
}
