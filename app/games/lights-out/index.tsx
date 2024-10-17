import { Vector3 } from "three";
import { MapControls, Loader, Center, Environment } from "@react-three/drei";
import { LightsOutGame } from "./LightsOutGame";
import { Socials } from "~/components/socials";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function LightsOut() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        orthographic
        camera={{ position: [-30, 30, 30], zoom: 50 }}
      >
        <Environment preset="forest" />
        <Center>
          <Suspense fallback={null}>
            <MapControls enableZoom={false} enableRotate={false} />
            <LightsOutGame position={new Vector3(0, 0, 0)} />
          </Suspense>
        </Center>
      </Canvas>
      <Loader />
    </>
  );
}
