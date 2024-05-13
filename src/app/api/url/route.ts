import { nanoid } from "nanoid";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const db = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    const url = body.url;
    if (!url) {
      return Response.json({ error: "URL is required" });
    }
    const shortid = nanoid(8);
    const data = await db.uRL.create({
      data: {
        shortId: shortid,
        redirectedURL: url,
        visitHistory: [new Date()],
      },
    });
    return NextResponse.json({ message: "short url created successfully",data });
  } catch (error) {
    console.log("server side error in getting nurl", error);
  }
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams.get('id');
  console.log(params);
  const shortid = params;
  const data= await db.uRL.update({
    where: {shortId: shortid},
    data:{visitHistory: {
      push:new Date()
    }}
  })
  return NextResponse.redirect(data.redirectedURL);
};
