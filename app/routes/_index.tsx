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
    image: "/vector.jpg",
    path: "/sunset-city-racers",
  },
  {
    id: 2,
    title: "Dwarven Dice",
    image: "/dwarvendice.png",
    path: "/dwarven-dice",
  },
];

export default function Index() {
  return (
    <div className="font-sans p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cards.map(function (card) {
          return (
            <Link key={card.id} to={card.path}>
              <div className="m-4 p-8 border rounded-lg shadow">
                <h1 className="text-xs font-bold">{card.title}</h1>
                <div>
                  <img
                    alt={`${card.title}`}
                    key={card.title}
                    src={card.image}
                    sizes="(max-width: 500px) 100px, 600px"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
