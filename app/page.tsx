import axios from "axios";
export default async function Home() {
   const responce = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
   const data = responce.data;
  
  return (
    <div>
      <h1>Hello</h1>
      {data.name} <br />
      {data.email} <br />
      {data.address.city}
    </div>
  );
}
