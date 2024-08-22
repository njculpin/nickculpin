import { Bread } from "~/components/bread";

const config = {
  title: "Zazzle",
  href: "/zazzle",
};

export default function Index() {
  return (
    <div className="p-8 bg-slate-100">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <video
              src={"/zazzle_talus_video_1.MOV"}
              width="600"
              controls
              autoPlay
              loop
            />
            <video
              src={"/zazzle_talus_video_2.MOV"}
              width="600"
              controls
              autoPlay
              loop
            />
            <img
              alt={`zazzle`}
              src={"/zazzle_talus.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`zazzle`}
              src={"/zazzle_photogram.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">Product Systems Engineer</h1>
              </div>
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500">
                    At Zazzle, I worked as a Product Systems Engineer. I was a
                    participating member of the Product Visualization team,
                    responsible for new product onboarding, product
                    visualization research and development, as well as
                    production assets.
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    Tools - Agisoft PhotoScan, Autodesk Maya, Rhino 3D, KUKA
                    kR90 Robot, Python, Mel, Javascript, ThreeJs, Canon Camera
                    Systems, Rapsberry Pi, and Proprietary tooling.
                  </p>
                  <a href="https://github.com/njculpin/agisoft_photogrametry">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Code - Agisoft Processor
                    </p>
                  </a>
                  <a href="https://github.com/njculpin/maya_scripts">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Code - Maya Toolkit
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <img
              alt={`zazzle`}
              src={"/zazzle.png"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`zazzle`}
              src={"/zazzle_rig_hdr.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`zazzle`}
              src={"/zazzle_talus_hdr.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
