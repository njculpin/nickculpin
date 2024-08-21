import { Bread } from "~/components/bread";

const config = {
  title: "Vector City Racers",
  href: "/vector-city-racers",
};

export default function Index() {
  return (
    <div className="p-8">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="font-sans p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl">{config.title}</h1>
        <div className="mt-8">
          <img
            alt={`vector_1`}
            src={"/vector_GM_Colors.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`vector_2`}
            src={"/vector_MB_Colors.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`vector_3`}
            src={"/vector_OL_Colors.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`vector_4`}
            src={"/vector_OS_Colors.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`vector_4`}
            src={"/vector_SS_Colors.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
      </div>
    </div>
  );
}
