import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";
import { CityData, UserData } from '@/lib/data';

export async function GET() {
  // get: to get single value
  // mget: to get multiple values at once

  const value = await redis.mget(["users", "cities"]) as [] | null;
  //  const cities = await redis.get("cities") as string | null;

  return NextResponse.json({
    success: true,
    data: value,
    // cities: cities
  });
}

export async function POST() {
  const jsonStringUser = JSON.stringify(UserData);
  const jsonStringCity = JSON.stringify(CityData);

  await redis.set("users", jsonStringUser);
  await redis.set("cities", jsonStringCity);

  return NextResponse.json({
    success: true,
    message: "UserData saved in Redis",
  });
}