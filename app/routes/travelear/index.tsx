import { Bread } from "~/components/bread";

const config = {
  title: "Travelear",
  href: "/travelear",
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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">
                  Founder, Engineering Lead
                </h1>
              </div>
              <div className="mt-4">
                <p className="text-sm leading-6 text-gray-500">
                  Travelear is a company I started with a friend from college
                  who had worked as an Audio Engineer for various television
                  productions. Together we built two applications to showcase
                  professional field recordings from all over the world.
                  Listeners and contributors could visit different real world
                  locations as a means to travel without needing to ever leave
                  your home.
                </p>
                <p className="text-sm leading-6 text-gray-500">
                  Tools - Swift, iOS, React, Typescript, NextJs, Firebase,
                  Stripe
                </p>
              </div>
            </div>
            <div>
              <img
                alt={`travelear`}
                src={"/travelear_1.jpg"}
                sizes="(max-width: 500px) 100px, 600px"
              />
              <div className="mt-6 flex flex-row space-x-4">
                <div className="flex flex-col">
                  <p>Travelear: Listen to the World</p>
                  <a href="https://www.thetravelear.com/">
                    <p>https://www.thetravelear.com</p>
                  </a>
                </div>
                <a href="https://apps.apple.com/us/app/travelear-listen-to-the-world/id1159408401">
                  <img alt={`travelear`} src={"/appstore.svg"} />
                </a>
              </div>
            </div>
            <div>
              <img
                alt={`dreamear`}
                src={"/dreamear_1.jpg"}
                sizes="(max-width: 500px) 100px, 600px"
              />
              <div className="mt-6 flex flex-row space-x-4">
                <div className="flex flex-col">
                  <p>Dreamear: Sleep, Relax, Focus</p>
                  <a href="https://www.thetravelear.com/">
                    <p>https://www.thetravelear.com</p>
                  </a>
                </div>
                <a href="https://apps.apple.com/us/app/dreamear-sleep-relax-focus/id1473473909">
                  <img alt={`travelear`} src={"/appstore.svg"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
