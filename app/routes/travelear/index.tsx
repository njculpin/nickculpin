import { Bread } from "~/components/bread";

const config = {
  title: "Travelear",
  href: "/travelear",
};

export default function Index() {
  return (
    <div className="p-8">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="font-sans p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl">{config.title}</h1>
        <div className="mt-8 w-full md:w-1/2">
          <img
            alt={`travelear`}
            src={"/travelear_1.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8 w-full md:w-1/2">
          <img
            alt={`dreamear`}
            src={"/dreamear_1.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
      </div>
    </div>
  );
}
