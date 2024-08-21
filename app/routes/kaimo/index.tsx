import { Bread } from "~/components/bread";

const config = {
  title: "Kaimo",
  href: "/kaimo",
};

export default function Index() {
  return (
    <div className="p-8">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="font-sans p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl">{config.title}</h1>
      </div>
    </div>
  );
}