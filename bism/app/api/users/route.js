// app/api/users/route.js
import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDatabase();

        const { name, email, } = await request.json();

        // Ensure all fields are passed to the new User instance
        const newUser = new User({ name, email,});
        await newUser.save();

        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Error saving user' }, { status: 500 });
    }
}
