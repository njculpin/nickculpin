import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Socials } from "~/components/socials";

export const meta: MetaFunction = () => {
  return [
    { title: "Nick Culpin" },
    {
      name: "description",
      content: "Software Engineer, Game Designer, Artist",
    },
  ];
};

export default function Index() {
  return (
    <div className="p-8 bg-zinc-100">
      <div className="flex justify-center">
        <div className="font-sans p-4 grid grid-cols-1">
          <div className="max-w-7xl m-4">
            <div className="flex flex-col text-left">
              <h1 className="text-4xl font-bold">Nick Culpin</h1>
              <p className="text-md italic mt-2">
                Software Engineer, Game Designer, Artist based in San Francisco,
                CA.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
                          className="rounded-lg"
                        />
                      </div>
                      <div className="inset-8 absolute opacity-0 hover:opacity-100 bg-zinc-950 bg-opacity-85 rounded-lg">
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
          <div className="mt-8 max-w-7xl grid grid-cols-1 gap-4">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col md:flex-row space-x-6 items-center">
                <img
                  alt={"me"}
                  src={"/me.jpg"}
                  sizes="(max-width: 500px) 100px, 600px"
                  className="rounded-full w-56 h-56 p-8"
                />
                <p className="italic text-center sm:text-left">
                  “My name is Nick, and I am a software engineer and artist
                  based in San Francisco, California. I have a specialized
                  background in product visualization tools, but I am passionate
                  about game design and development. I am actively seeking
                  design engineering opportunities.” - Nick
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">Experience</h1>
              </div>
              <ul role="list" className="space-y-6 mt-4">
                {experience.map((activityItem) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div className="flex-auto rounded-md p-3">
                      <div className="flex justify-between gap-x-4">
                        <div className="py-0.5 text-xs leading-5 text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activityItem.title}
                          </span>
                        </div>
                        <time
                          dateTime={activityItem.date}
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                        >
                          {activityItem.date}
                        </time>
                      </div>
                      <p className="text-sm leading-6 text-gray-500">
                        {activityItem.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div className="p-8 border border-gray-100 rounded-lg bg-white">
                <div className="flex flex-col text-center">
                  <h1 className="text-2xl font-bold">Education</h1>
                </div>
                <ul role="list" className="space-y-6 mt-4">
                  {education.map((activityItem) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                      <div className="flex-auto rounded-md p-3">
                        <div className="flex justify-between gap-x-4">
                          <div className="py-0.5 text-xs leading-5 text-gray-500">
                            <span className="font-medium text-gray-900">
                              {activityItem.title}
                            </span>
                          </div>
                          <time
                            dateTime={activityItem.date}
                            className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                          >
                            {activityItem.date}
                          </time>
                        </div>
                        <p className="text-sm leading-6 text-gray-500">
                          {activityItem.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-w-7xl p-8 border border-gray-100 rounded-lg bg-white">
                <div className="flex flex-col text-center">
                  <h1 className="text-2xl font-bold">Skills and Tools</h1>
                </div>
                <div className="mt-4">
                  <p className="text-sm leading-6 text-gray-500">
                    Typescript, Javascript, Swift, Python, HTML, CSS Express,
                    NodeJs, ThreeJs, Three Fiber, Serverless, DynamoDB,
                    PostGres, NestJs, NextJs, Astro, Remix, Vite, React, React
                    Native, iOS, Tailwind css, Photoshop, Illustrator, Blender,
                    Maya, Rhino, Unity, Affinity Designer, Google Cloud,
                    Firebase, AWS, Amplify, Supabase, Ethereum, Polgyon, Aptos,
                    IPFS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mt-16 m-4 flex justify-center">
            <Socials />
            <div className="flex flex-col text-center">
              <p className="text-md italic mt-4">
                nickculpin.com copyright {new Date().getFullYear()} all rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const cards = [
  {
    id: 0,
    title: "Lights Out",
    image: "/lightsout.png",
    path: "/lights-out",
    tags: ["Typescript", "ThreeJs", "Three-Fiber", "React", "Game Design"],
  },
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
      "Polygon",
      "Web3",
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
    tags: ["Typescript", "Express", "NodeJs", "React", "Polygon", "Web3"],
  },
  {
    id: 3,
    title: "Travelear",
    image: "/travelear.jpg",
    path: "/travelear",
    tags: ["Swift", "iOS", "NodeJs"],
  },
  {
    id: 4,
    title: "Zazzle",
    image: "/zazzle.png",
    path: "/zazzle",
    tags: [
      "Python",
      "ThreeJs",
      "Javascript",
      "Maya",
      "Rhino",
      "Photoscan",
      "Kuka Robotics",
    ],
  },
  {
    id: 5,
    title: "Vector Entertainment",
    image: "/vector.jpg",
    path: "/vector-city-racers",
    tags: ["Python", "Maya", "Game Design", "Flash"],
  },
];
const experience = [
  {
    id: 0,
    date: "2019 to current",
    type: "work",
    title: "Kaimo",
    description: "Founder, Engineering Lead",
  },
  {
    id: 1,
    date: "2015 to 2019",
    type: "work",
    title: "MatchCo Shiseido",
    description: "Software Engineer",
  },
  {
    id: 2,
    date: "2014-2019",
    type: "work",
    title: "Travelear",
    description: "Founder, Engineering Lead",
  },
  {
    id: 3,
    date: "2011-2015",
    type: "work",
    title: "Zazzle",
    description: "Product Systems Engineer",
  },
  {
    id: 4,
    date: "2010-2011",
    type: "work",
    title: "Vector Entertainment",
    description: "3D Artist, Designer",
  },
];
const education = [
  {
    id: 0,
    date: "2006-2010",
    type: "education",
    title: "Academy of Art University",
    description: "MFA - Animation & VFX, emphasis in 3D modeling",
  },
  {
    id: 1,
    date: "2002-2006",
    type: "education",
    title: "University of Hartford Art School",
    description: "BFA - Illustration",
  },
];
