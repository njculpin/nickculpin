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
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              alt={`vector_gm_car`}
              src={"/vector_gm_car.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_hs_car`}
              src={"/vector_hs_car.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_mb_car`}
              src={"/vector_mb_car.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_od_car`}
              src={"/vector_od_car.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_ol_car`}
              src={"/vector_ol_car.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8">
            <img
              alt={`vector_levels`}
              src={"/vector_levels.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_misc`}
              src={"/vector_misc.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_gridmotors`}
              src={"/vector_gridmotors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_massballistic`}
              src={"/vector_massballistic.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_odonataswift`}
              src={"/vector_odonataswift.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_switchblade`}
              src={"/vector_switchblade.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_opterloco`}
              src={"/vector_opterloco.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              alt={`vector_1`}
              src={"/vector_GM_Colors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_2`}
              src={"/vector_MB_Colors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_3`}
              src={"/vector_OL_Colors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_4`}
              src={"/vector_OS_Colors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`vector_4`}
              src={"/vector_SS_Colors.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
