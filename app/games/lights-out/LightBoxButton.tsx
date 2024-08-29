import { Vector3, Mesh, Color } from "three";
import { useRef } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { FakeGlowMaterial } from "../shaders/FakeGlowMaterial";

export function LightBoxButton({
  position,
  on,
  setOnOff,
}: {
  position: Vector3;
  on: boolean;
  setOnOff: () => void;
}) {
  const meshRef = useRef<Mesh>(null!);
  return (
    <group>
      <mesh
        position={position}
        ref={meshRef}
        onClick={() => setOnOff()}
        scale={1}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial
          transmissionSampler={false}
          backside={false}
          samples={10}
          resolution={56}
          transmission={1}
          roughness={0.3}
          thickness={1.5}
          ior={1.5}
          chromaticAberration={0.01}
          anisotropy={1}
          distortion={1}
          distortionScale={5}
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor={on ? "darkred" : "black"}
          background={new Color(on ? "hotpink" : "darkgray")}
          reflectivity={0.1}
        />
      </mesh>
      <mesh position={new Vector3(position.x, -0.6, position.z)}>
        <sphereGeometry args={[1, 1, 1]} />
        <FakeGlowMaterial
          glowColor={"hotpink"}
          falloff={on ? 1 : 100}
          glowInternalRadius={10}
          glowSharpness={0.1}
        />
      </mesh>
      <pointLight
        color="hotpink"
        intensity={on ? 1000 : 0}
        position={new Vector3(position.x, -0.1, position.z)}
      />
      <pointLight
        color="hotpink"
        intensity={on ? 50 : 0}
        position={new Vector3(position.x, 1.4, position.z)}
      />
    </group>
  );
}
