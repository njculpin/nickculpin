import { useState, useEffect } from "react";
import { Euler, Vector3 } from "three";
import { Dice } from "./components/Dice";
import { BoxContainer } from "./components/BoxContainer";
import { useEventListener } from "~/hooks/useEventListener";
import { Mine } from "./components/Mine";
import { Belt } from "./components/Belt";

export function GameTable({ position }: { position: Vector3 }) {
  const [reset, setReset] = useState(false);
  const [selectedDieId, setSelectedDieId] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [hovered, hover] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRolling(false);
    }, 2000);
  }, [rolling]);

  useEventListener("click", (e) => {
    if (e.detail === 2) {
      setRolling(true);
    }
  });

  function handlePickDie(face: string, dieId: number) {}
  function checkIfExploded(id: number) {
    return false;
  }

  return (
    <group position={position}>
      <Mine />
      <Belt />
      {/*       
      <group>
        {[
          { id: 1, position: new Vector3(-2.5, 1, -2.5) },
          { id: 2, position: new Vector3(-2.5, 1, 0) },
          { id: 3, position: new Vector3(-2.5, 1, 2.5) },
          { id: 4, position: new Vector3(0, 1, 2.5) },
          { id: 5, position: new Vector3(0, 1, -2.5) },
          { id: 6, position: new Vector3(2.5, 1, 0) },
          { id: 7, position: new Vector3(2.5, 1, 2.5) },
          { id: 8, position: new Vector3(2.5, 1, -2.5) },
        ].map(function (die) {
          return (
            <Dice
              key={die.id}
              dieId={die.id}
              exploded={checkIfExploded(die.id)}
              rolling={rolling}
              position={die.position}
              rotation={new Euler(0, 0, 0)}
              reset={reset}
              setReset={(e) => setReset(e)}
              selectedDieId={selectedDieId}
              setSelectedDieId={(face, dieId) => handlePickDie(face, dieId)}
            />
          );
        })}
      </group>
      <BoxContainer /> */}
    </group>
  );
}
