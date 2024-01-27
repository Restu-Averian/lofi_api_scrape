import { NextResponse } from "next/server";
import albumData from "../constants/albumData";

export async function GET(req: Request) {
  try {
    return NextResponse.json(
      {
        message: "success get album data",
        data: albumData,
        status: 200,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: `err : ${e}` }, { status: 400 });
  }
}
