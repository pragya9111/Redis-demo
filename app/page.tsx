"use client";

import { useState } from "react";
import "./globals.css";

type User = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const saveData = async () => {
    await fetch("/api/redis", { method: "POST" });
    alert("Users & Cities saved in Redis");
  };

  const getData = async () => {
    const res = await fetch("/api/redis");
    const json = await res.json();

    const [usersData, citiesData] = json.data;

    setUsers(usersData);
    setCities(citiesData);
  };

  return (
    <main style={{ padding: 40, maxWidth: 800 }}>
      <h2>Redis (Upstash) Demo</h2>

      <div style={{ marginTop: 20 }}>
        <button className="btn btn-outline" onClick={saveData}>
          Save to Redis
        </button>

        <button
          className="btn btn-fill"
          onClick={getData}
          style={{ marginLeft: 10 }}
        >
          Get from Redis
        </button>
      </div>

      {/* Users */}
      <h3 style={{ marginTop: 30 }}>Users:</h3>
      <ul className="list">
        {users.map((user, index) => (
          <li className="list-item" key={index}>
            {user.name} ({user.username}) — {user.email}
          </li>
        ))}
      </ul>

      {/* Cities */}
      <h3 style={{ marginTop: 30 }}>Cities:</h3>
      <ul className="list">
        {cities.map((city, index) => (
          <li className="list-item" key={index}>{city}</li>
        ))}
      </ul>
    </main>
  );
}
