import type { MetaFunction } from "@remix-run/node";
import { Vector3 } from "three";
import { MyCanvas } from "~/components/canvas";
import { MapControls } from "@react-three/drei";
import { LightsOut } from "~/games/LightsOut";
import { Socials } from "~/components/socials";
import { Loading } from "~/components/loading";
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

export default function Index() {
  return (
    <div className="h-screen w-screen bg-zinc-950">
      <MyCanvas>
        <Suspense fallback={<Loading />}>
          <MapControls enableZoom={false} enableRotate={false} />
          <LightsOut position={new Vector3(0, 0, 0)} />
        </Suspense>
      </MyCanvas>
      <div className="absolute z-10 bottom-4 right-4">
        <Socials />
      </div>
    </div>
  );
}
