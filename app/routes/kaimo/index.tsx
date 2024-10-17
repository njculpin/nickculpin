import { Bread } from "~/components/bread";

const config = {
  title: "Kaimo",
  href: "/kaimo",
};

export default function Index() {
  return (
    <div className="p-8 bg-zinc-100">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">
                  Founder, Engineering Lead
                </h1>
              </div>
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500">
                    Kaimo provides print on demand business design automation
                    tools to visualize and list product previews, printfiles,
                    licensing documents, and more. Kaimo provides public and
                    private APIs to interact with various tools and full stack
                    web app applications for business specific needs.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a href="https://mykaimo.com">
                  <p className="text-sm leading-6 text-gray-500 underline">
                    Kaimo
                  </p>
                </a>
                <a href="https://art2cart.com">
                  <p className="text-sm leading-6 text-gray-500 underline">
                    Art2Cart
                  </p>
                </a>
              </div>
            </div>
            <img
              alt={`kaimo`}
              src={"/kaimo_greekhouse.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`kaimo`}
              src={"/kaimo_pghramdunn.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`kaimo`}
              src={"/kaimo_poggers.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
