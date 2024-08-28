import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

export function MyCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      dpr={[1, 2]}
      orthographic
      camera={{ position: [-30, 30, 30], zoom: 50 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[30, 30, 30]} angle={0.15} penumbra={1} />
      <Environment preset="city" />
      <Suspense>
        <Center>{children}</Center>
      </Suspense>
    </Canvas>
  );
}
