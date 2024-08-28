import { Vector3, Mesh } from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Center } from "@react-three/drei";

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
    <mesh
      position={position}
      ref={meshRef}
      onClick={() => setOnOff()}
      scale={on ? 1.1 : 1}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={on ? "hotpink" : "#2f74c0"} />
    </mesh>
  );
}

type ButtonType = {
  id: number;
  on: boolean;
  position: number[];
};

function Buttons() {
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

  return buttons.map(function (col, x) {
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
  });
}

export function LightsOut() {
  return (
    <Canvas shadows camera={{ position: [0, 25, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <Center>
        <Buttons />
      </Center>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      />
      <Environment preset="city" />
    </Canvas>
  );
}
