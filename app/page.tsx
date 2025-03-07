"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
      .then((responce) => {
        setUsers(responce.data);
        setLoader(false);
      });
  }, []);

  if (loader) {
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div>
      <h1>Hello</h1>
      {users.name} <br />
      {users.email} <br />
      {users.address.city}
    </div>
  );
}
