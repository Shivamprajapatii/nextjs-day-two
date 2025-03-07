import axios from "axios";
import Link from "next/link";
export default async function Home() {
  const responce = await axios.get("http://localhost:3000/api/v1/user/details")
  const data = responce.data;

  return (
    <div>
      <h1>Hello Home Page</h1>
      <Link href={"/signin"}>Signin</Link> <br />
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
}
