import { Bread } from "~/components/bread";
import { Link } from "@remix-run/react";

const config = {
  title: "Sunset City Racers",
  href: "/sunset-city-racers",
};

export default function Index() {
  return (
    <div className="p-8 bg-slate-100">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">
                  Game Designer, Engineering Lead, Artist
                </h1>
              </div>
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500">
                    Sunset City Racers is a re-imagination of the game Vector
                    City Racers. It is still a work in progress however you may
                    view some experimentation in ThreeJS. It features a vehicle
                    editor and level editor for players to interact and purchase
                    in game assets with.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="https://learn.sunsetcityracers.com/">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Blog
                    </p>
                  </a>
                  <a href="https://www.sunsetcityracers.com/vehicles/create">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Vehicle Editor
                    </p>
                  </a>
                  <Link to={"/vector-city-racers"}>
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Vector City Racers
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt={`sunset`}
              src={"/sunsetcity_vehicle_1.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`sunset`}
              src={"/sunsetcity_vehicle_2.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`sunset`}
              src={"/sunsetcity_vehicle_3.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`sunset`}
              src={"/sunsetcity_level.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
