import type { MetaFunction } from "@remix-run/node";
import { Socials } from "~/components/socials";
import DwarvenDice from "~/games/dwarven-dice";

export const meta: MetaFunction = () => {
  return [
    { title: "Dwarven Dice" },
    {
      name: "description",
      content: "A dice game for 3-5 players",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen bg-zinc-950">
      <DwarvenDice />
      <div className="absolute z-10 bottom-4 right-4">
        <Socials />
      </div>
    </div>
  );
}