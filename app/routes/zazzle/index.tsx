import { Bread } from "~/components/bread";

const config = {
  title: "Zazzle",
  href: "/zazzle",
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
            alt={`zazzle`}
            src={"/zazzle_work.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`zazzle`}
            src={"/zazzle_talus.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8">
          <img
            alt={`zazzle`}
            src={"/zazzle_photogram.jpg"}
            sizes="(max-width: 500px) 100px, 600px"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <video src={"/zazzle_talus_video_1.MOV"} width="600" controls />
          <video src={"/zazzle_talus_video_2.MOV"} width="600" controls />
        </div>
      </div>
    </div>
  );
}
