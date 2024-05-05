import { ConnectDb } from "@/ConnectDb/ConnectDb";
import { NextResponse } from "next/server";

export const POST = async req => {
  try {
    // await ConnectDb();
    const reqBody = await  req.json();
    const { name, age, marital_status } = reqBody;
    console.log(name);

    if (!reqBody) {
      return new NextResponse(JSON.stringify({ res: "not ok" }), {
        status: 400,
      });
    } else {
      return new NextResponse(JSON.stringify({ res: "ok" }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ res: error }), {
      status: 500,
    });
  }
};
