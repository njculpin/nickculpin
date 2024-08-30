import { Link } from "@remix-run/react";

const socials = [
  {
    href: "/",
    id: "lightsout",
    image: "/google.svg",
    color: "bg-pink-600",
  },
  {
    href: "/dwarven-dice",
    id: "dwarven-dice",
    image: "/google.svg",
    color: "bg-green-600",
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  return (
    <div className="flex flex-row space-x-4 p-4 justify-center">
      {socials.map(function (social) {
        return (
          <Link to={social.href}>
            <div
              className={classNames(
                "w-6 h-6 rounded-full shadow-lg",
                social.color
              )}
            />
          </Link>
        );
      })}
    </div>
  );
}
