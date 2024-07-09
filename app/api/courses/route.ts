import { db } from './../../../prisma/db';
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
      const { userId } = await auth();
      const { title } = await req.json();
  
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
      console.log("userrrrrrrrrrrrrrrrrrrrrrrrr", userId)
      const course = await db.course.create({
        data: {
            title
        },
      });
      return NextResponse.json(course);
    } catch (error) {
      console.log(error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }