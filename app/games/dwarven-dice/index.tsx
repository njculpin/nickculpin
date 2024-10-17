import { Vector3 } from "three";
import { Loader, Stage, MapControls, Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { GameTable } from "./GameTable";
import { Socials } from "~/components/socials";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function DwarvenDice() {
  return (
    <div className="h-screen w-screen bg-green-950">
      <Canvas
        flat
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{
          fov: 40,
          position: [35, 35, 35],
        }}
      >
        <Environment preset="sunset" />
        <ambientLight intensity={1.5 * Math.PI} />
        <Suspense fallback={null}>
          <Physics gravity={[0, -30, 0]}>
            <MapControls />
            <GameTable position={new Vector3(0, 0, 0)} />
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
