import type { MetaFunction } from "@remix-run/node";
import LightsOut from "~/games/lights-out";
import { Socials } from "~/components/socials";

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
      <div className="absolute z-10 bottom-4 right-4">
        <Socials />
      </div>
    </div>
  );
}
