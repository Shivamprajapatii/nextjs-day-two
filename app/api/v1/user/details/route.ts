import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    return NextResponse.json({
        message: "Bro this is POST Request!"
    })
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