import { NextResponse } from "next/server";
export function GET(){
    return NextResponse.json({
        "name" : "Shivam",
        "email" : "Shivay@gmail"
    })
};
export function POST(){
    return NextResponse.json({
        message : "Bro this is POST Request!"
    })
};
export function DELETE(){
    return NextResponse.json({
        message : "Bro this is Delete Request!"
    })
};
export function PUT(){
    return NextResponse.json({
        message : "Bro this is PUT request Bro!"
    })
};