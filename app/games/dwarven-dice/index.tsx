import { Vector3 } from "three";
import { MapControls, Loader, Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { DwarvenDiceGame } from "./DwarvenDiceGame";
import { Socials } from "~/components/socials";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function DwarvenDice() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <Canvas
        dpr={[1, 2]}
        orthographic
        camera={{ position: [-30, 30, 30], zoom: 50 }}
      >
        <Environment preset="forest" />
        <Suspense fallback={null}>
          <Physics gravity={[0, -30, 0]}>
            <MapControls enableZoom={false} enableRotate={false} />
            <DwarvenDiceGame position={new Vector3(0, 0, 0)} />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
      <div className="absolute z-10 bottom-4 right-4">
        <Socials />
      </div>
    </div>
  );
}
