import type { MetaFunction } from "@remix-run/node";
import { Vector3 } from "three";
import { MyCanvas } from "~/components/canvas";
import { MapControls } from "@react-three/drei";
import { LightsOut } from "~/games/LightsOut";

export const meta: MetaFunction = () => {
  return [
    { title: "Nick Culpin" },
    {
      name: "description",
      content: "Software Engineer, Game Designer, Artist",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen bg-zinc-100">
      <MyCanvas>
        <MapControls />
        <LightsOut position={new Vector3(0, 0, 0)} />
      </MyCanvas>
    </div>
  );
}
