import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";

function Wall({
  height,
  width,
  depth,
  x,
  y,
  z,
}: {
  height: number;
  width: number;
  depth: number;
  x: number;
  y: number;
  z: number;
}) {
  return <CuboidCollider args={[width, height, depth]} position={[x, y, z]} />;
}

export function BoxContainer() {
  const { viewport } = useThree();
  const wallHeight = 25;
  return (
    <RigidBody type="fixed">
      {/* FRONT */}
      <Wall
        width={viewport.width / 2}
        height={wallHeight / 2}
        depth={2}
        x={0}
        y={wallHeight / 2}
        z={viewport.height / 2 - 2}
      />
      {/* BACK */}
      <Wall
        width={viewport.width / 2}
        height={wallHeight / 2}
        depth={2}
        x={0}
        y={wallHeight / 2}
        z={-viewport.height / 2}
      />
      {/* RIGHT */}
      <Wall
        width={2}
        height={wallHeight / 2}
        depth={viewport.height / 2}
        x={viewport.width / 2}
        y={wallHeight / 2}
        z={0}
      />
      {/* LEFT */}
      <Wall
        width={2}
        height={wallHeight / 2}
        depth={viewport.height / 2}
        x={-viewport.width / 2}
        y={wallHeight / 2}
        z={0}
      />
      {/* BOTTOM */}
      <Wall
        width={viewport.width / 2}
        height={2}
        depth={viewport.height / 2}
        x={0}
        y={-2}
        z={0}
      />
      {/* TOP */}
      <Wall
        width={viewport.width / 2}
        height={2}
        depth={viewport.height / 2}
        x={0}
        y={wallHeight}
        z={0}
      />
    </RigidBody>
  );
}
