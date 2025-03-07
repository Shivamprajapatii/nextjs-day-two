import axios from "axios";
export default async function Home() {
  const responce = await axios.get("http://localhost:3000/api/v1/user/details")
  const data = responce.data;

  return (
    <div>
      <h1>Hello</h1>
      {data.name} <br />
      {data.email} <br />
      
    </div>
  );
}
