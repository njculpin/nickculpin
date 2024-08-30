import type { MetaFunction } from "@remix-run/node";
import LightsOut from "~/games/lights-out";
import { Socials } from "~/components/socials";
import { NavBar } from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Nick Culpin" },
    {
      name: "description",
      content: "Software Engineer, Game Designer, Artist",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen bg-zinc-950">
      <LightsOut />
      <div className="absolute z-10 left-4 bottom-4 right-4 flex justify-between">
        <NavBar />
        <Socials />
      </div>
    </div>
  );
}
