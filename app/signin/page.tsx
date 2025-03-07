"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function onSubmit() {
        const responce = await axios.post("/api/v1/user/details", {
            username,
            password
        })

        router.push("/signup");
    };

    return (
        <div className="h-96 border  border-red-500">
            <h1>Signin Pgae</h1>
            <input type="text" name="username" placeholder="please enter your email" onChange={(e) => {
                setUsername(e.target.value);
            }} /> <br />
            <input type="text" name="password" placeholder="please enter your password" onChange={(e) => {
                setPassword(e.target.value);
            }} /> <br /> <br />
            <button onClick={onSubmit} className=" bg-pink-400 cursor-pointer hover:border-amber-400">Signin</button>

        </div>
    )
};