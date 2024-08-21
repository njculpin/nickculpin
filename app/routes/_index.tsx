import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nick Culpin" },
    {
      name: "description",
      content: "Software Engineer, Game Designer, Artist",
    },
  ];
};

const cards = [
  {
    id: 1,
    title: "Sunset City Racers",
    image: "/sunsetcity.jpg",
    path: "/sunset-city-racers",
    tags: [
      "Typescript",
      "ThreeJs",
      "NodeJs",
      "Three-Fiber",
      "React",
      "Game Design",
    ],
  },
  {
    id: 2,
    title: "Dwarven Dice",
    image: "/dwarvendice.png",
    path: "/dwarven-dice",
    tags: [
      "Typescript",
      "ThreeJs",
      "NodeJs",
      "Three-Fiber",
      "React",
      "Game Design",
    ],
  },
  {
    id: 3,
    title: "Kaimo / Art2Cart",
    image: "/kaimo.png",
    path: "/kaimo",
    tags: ["Typescript", "Express", "NodeJs", "React"],
  },
  {
    id: 4,
    title: "MatchCo / Shiseido",
    image: "/matchco.jpg",
    path: "/matchco",
    tags: ["Swift", "iOS", "React-Native"],
  },
  {
    id: 5,
    title: "Travelear",
    image: "/travelear.jpg",
    path: "/travelear",
    tags: ["Swift", "iOS", "NodeJs"],
  },
  {
    id: 6,
    title: "Zazzle",
    image: "/zazzle.png",
    path: "/zazzle",
    tags: ["Python", "Maya", "Rhino", "Photoscan", "Kuka Robotics"],
  },
  {
    id: 7,
    title: "Vector Entertainment",
    image: "/vector.jpg",
    path: "/vector-city-racers",
    tags: ["Python", "Maya", "Game Design", "Flash"],
  },
];

export default function Index() {
  return (
    <div className="p-8 bg-slate-100">
      <div className="flex justify-center">
        <div className="font-sans p-4 grid grid-cols-1">
          <div className="max-w-7xl m-4 flex justify-center">
            <div className="flex flex-col text-center">
              <h1 className="text-4xl">Nick Culpin</h1>
              <p className="text-md italic">
                Software Engineer, Game Designer, Artist
              </p>
            </div>
          </div>
          <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cards.map(function (card) {
              return (
                <Link key={card.id} to={card.path}>
                  <div className="m-4 p-8 border border-gray-100 rounded-lg hover:shadow-md bg-white relative">
                    <div>
                      <img
                        alt={`${card.title}`}
                        key={card.title}
                        src={card.image}
                        sizes="(max-width: 500px) 100px, 600px"
                      />
                    </div>
                    <div className="inset-8 absolute opacity-0 hover:opacity-100 bg-slate-950 bg-opacity-85 rounded-lg">
                      <div className="h-full w-full flex flex-col justify-center items-center">
                        <h1 className="text-white text-centered text-lg font-bold">
                          {card.title}
                        </h1>
                        <p className="text-white text-center text-sm italic">
                          -
                        </p>
                        <div className="w-3/4">
                          <p className="text-white text-center text-sm italic">
                            {card.tags.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
