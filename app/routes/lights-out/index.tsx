import { Bread } from "~/components/bread";
import { LightsOut } from "./LightsOut";

const config = {
  title: "Lights Out",
  href: "/lights-out",
};

export default function Index() {
  return (
    <div className="p-8 bg-zinc-100">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 gap-8">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500">
                    Lights Out was a hand held game I had when I was a kid.
                    Simply picking a cell will toggle it and its adjacent cells.
                    The objective of this game is to turn off all the lights.
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    This project was build in ThreeJs and developed to explore
                    shader systems within WebGL.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full">
                <div className="relative h-full" style={{ minHeight: "36rem" }}>
                  <LightsOut />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
