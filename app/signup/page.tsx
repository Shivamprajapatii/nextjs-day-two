"use client"
import axios from "axios";
import { useState } from "react"

export default function signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function onSubmit() {
        const responce = await axios.post("/api/v1/user/details", {
            name,
            email
        })
    };
    return (
        <div className="h-96 border  border-red-500">
            <h1>Signup Page</h1>
            <input type="text" name="username" placeholder="please enter your email" onChange={(e) => {
                setName(e.target.value);
            }} /> <br />
            <input type="text" name="password" placeholder="please enter your password" onChange={(e) => {
                setEmail(e.target.value);
            }} /> <br /> <br />
            <button onClick={onSubmit} className=" bg-pink-400 cursor-pointer hover:border-amber-400">Signup</button>
        </div>
    )
};