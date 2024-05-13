import { nanoid } from "nanoid";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
export async function POST(req: Request) {
  try {
    console.log( req.body.url);
    const url = req.body.url ;
    if (!url) {
      return Response.json({ error: "URL is required" });
    }
    const shortid = nanoid(8);
    const res = await db.uRL.create({
      data: {
        shortId: shortid,
        redirectedURL: url,
        visitHistory: [],
      },
    });
    return Response.json({ message: "short url created successfully " });
  } catch (error) {
    console.log("server side error in getting nurl", error);
  }
}
