"use server"

import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { Cloud } from "lucide-react";

export const Weather = async () => {
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    "нижневартовск"
  )}&count=1&language=ru&format=json`;

  try {
    const geoResp = await fetch(geoUrl, {
      next: { revalidate: 3600 },
      cache: "force-cache"
    });

    const geoData = await geoResp.json();
    const results = geoData.results;

    if (!results || results.length === 0) {
      return <div>Location not found</div>;
    }

    const { latitude, longitude } = results[0];

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const weatherResp = await fetch(weatherUrl, {
      next: { revalidate: 3600 },
    });

    const weatherData = await weatherResp.json();
    const { temperature, windspeed, weathercode } = weatherData.current_weather;
    const { name } = geoData.results[0];
    return (
      <PlatfomSection className="flex flex-col !bg-[#6F4C3E] items-center p-4 h-[442px] w-[300px]">
        <h2 className="text-2xl font-bold mb-2">Weather</h2>
        <Cloud className="w-full h-full"/>
        <p className="text-lg">
          City Name: <span className="font-semibold">{name}</span>
        </p>
        <p className="text-lg">
          Temperature: <span className="font-semibold">{temperature} °C</span>
        </p>
        <p className="text-lg">
          Wind Speed: <span className="font-semibold">{windspeed} m/s</span>
        </p>
        <p className="text-lg">
          Weather Code: <span className="font-semibold">{weathercode}</span>
        </p>
      </PlatfomSection>
    );
  } catch (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }
};
