import { Vector3, Mesh, Color } from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Plane } from "@react-three/drei";
import { FakeGlowMaterial } from "./shaders/FakeGlowMaterial";

function Box({
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
          background={new Color(on ? "hotpink" : "black")}
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

type ButtonType = {
  id: number;
  on: boolean;
  position: number[];
};

export function LightsOut({ position }: { position: Vector3 }) {
  const [buttons, setButtons] = useState<ButtonType[][]>([]);
  const [clickedCell, setClickedCell] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (clicked) {
      let countOff = 0;
      let button = buttons[clickedCell.x][clickedCell.y];
      button.on = button.on ? false : true;
      const directions = [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
      ];
      for (let d = 0; d < directions.length; d++) {
        let direction = directions[d];
        let newX = clickedCell.x + direction[0];
        let newY = clickedCell.y + direction[1];
        if (
          newX >= 0 &&
          newX <= buttons.length - 1 &&
          newY >= 0 &&
          newY <= buttons.length - 1
        ) {
          let adj = buttons[newX][newY];
          adj.on = adj.on ? false : true;
        }
      }
      for (let i = 0; i < buttons.length; i++) {
        for (let j = 0; j < buttons[i].length; j++) {
          let button = buttons[i][j];
          if (button.on === false) {
            countOff++;
          }
        }
      }
      setButtons(buttons);
      setClicked(false);
    }
  });

  useEffect(() => {
    setUp();
  }, []);

  function setUp() {
    const newButtons: ButtonType[][] = [];
    let count = 0;
    for (let i = -4; i <= 4; i += 2) {
      let row = [];
      for (let j = -4; j <= 4; j += 2) {
        const onOff = Math.random() < 0.5;
        row.push({ id: count + 1, on: onOff, position: [i, 0, j] });
        count++;
      }
      newButtons.push(row);
    }
    setButtons(newButtons);
  }

  function handlePress({ x, y }: { x: number; y: number }) {
    setClickedCell({ x: x, y: y });
    setClicked(true);
  }

  return (
    <group position={position}>
      {buttons.map(function (col, x) {
        return col.map(function (box, y) {
          return (
            <Box
              key={box.id}
              setOnOff={() => handlePress({ x: x, y: y })}
              on={box.on}
              position={
                new Vector3(box.position[0], box.position[1], box.position[2])
              }
            />
          );
        });
      })}
    </group>
  );
}
