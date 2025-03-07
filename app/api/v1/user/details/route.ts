import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { name, email } = await req.json();

    await Prisma.user.create({
        data : {
            name,
            email
        }
    });

    return NextResponse.json({
        message: "Signup Done!",
    });
};


export function GET() {
    return NextResponse.json({
        "name": "Shivam",
        "email": "Shivay@gmail"
    })
};


export function DELETE() {
    return NextResponse.json({
        message: "Bro this is Delete Request!"
    })
};
export function PUT() {
    return NextResponse.json({
        message: "Bro this is PUT request Bro!"
    })
};