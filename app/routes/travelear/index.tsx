import { Bread } from "~/components/bread";
import Player from "~/components/audioplayer";

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
              <div className="flex flex-col justify-between mt-6">
                <div>
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
                <div className="mt-8">
                  <a href="https://medium.com/travelear/streaming-audio-player-in-ios-892601c0cbfd">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Technical Writing - Streaming Audio in iOS
                    </p>
                  </a>
                  <a href="https://medium.com/travelear/how-to-perform-cross-platform-receipt-verification-using-firebase-cloud-functions-230511a0b007">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Technical Writing - Cross platform receipt verification
                    </p>
                  </a>
                  <a href="https://github.com/njculpin/Travelear">
                    <p className="text-sm leading-6 text-gray-500 underline">
                      Code - Travelear iOS
                    </p>
                  </a>
                </div>
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
                    <p className="text-sm leading-6 text-gray-500 underline">
                      https://www.thetravelear.com
                    </p>
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
                    <p className="text-sm leading-6 text-gray-500 underline">
                      https://www.thetravelear.com
                    </p>
                  </a>
                </div>
                <a href="https://apps.apple.com/us/app/dreamear-sleep-relax-focus/id1473473909">
                  <img alt={`travelear`} src={"/appstore.svg"} />
                </a>
              </div>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex w-full transform text-center text-base transition">
                <div className="h-full flex flex-col w-full justify-center items-center bg-white px-4 pt-8 pb-8 sm:px-6 sm:pt-8 md:p-6 md:rounded-lg lg:p-8">
                  <div className="aspect-w-3 aspect-h-2 mb-8">
                    <img
                      className="rounded-lg object-cover shadow-lg"
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Fimages%2FWaikiki-Beach-Section_Honolulu-Hawaii_192_01132016.jpg?alt=media&token=be9c6aa7-24f7-4e52-be2b-e88449d0ba91"
                      }
                      alt=""
                    />
                  </div>
                  <div className="mb-2">
                    <p className="text-md text-primary font-bold truncate">
                      Waikiki Beach
                    </p>
                    <p className="text-xs text-primary text-gray-500">
                      By Garett Martocello
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-primary">Waikiki Beach</p>
                    <p className="text-xs text-primary truncate">
                      21.275331, 157.825562
                    </p>
                    <p className="text-xs text-primary">January 12, 2016</p>
                  </div>
                  <div className="w-full">
                    <Player
                      file={
                        "https://firebasestorage.googleapis.com/v0/b/travelear-fc8b2.appspot.com/o/users%2FEVwm7DMBdFPXAE0wn41ijYErSjW2%2Faudio%2FWaikiki-Beach-Section_Honolulu-Hawaii_192_01132016.mp3?alt=media&token=ce62c14d-9d38-4fc5-94e4-e8c6c12bcf10"
                      }
                      duration={"15:36"}
                      isSleep={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
