import type { MetaFunction } from "@remix-run/node";
import { Vector3 } from "three";
import { MyCanvas } from "~/components/canvas";
import { MapControls, Loader } from "@react-three/drei";
import { LightsOutGame } from "./LightsOutGame";
import { Socials } from "~/components/socials";
import { Suspense } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nick Culpin" },
    {
      name: "description",
      content: "Software Engineer, Game Designer, Artist",
    },
  ];
};

export default function LightsOut() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <MyCanvas>
        <Suspense fallback={null}>
          <MapControls enableZoom={false} enableRotate={false} />
          <LightsOutGame position={new Vector3(0, 0, 0)} />
        </Suspense>
      </MyCanvas>
      <Loader />
      <div className="absolute z-10 bottom-4 right-4">
        <Socials />
      </div>
    </div>
  );
}
