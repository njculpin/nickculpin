const socials = [
  {
    href: "mailto:njculpin@gmail.com",
    id: "google",
    image: "/google.svg",
  },
  {
    href: "https://www.linkedin.com/in/culpin/",
    id: "linkedin",
    image: "/linkedin.svg",
  },
  {
    href: "https://github.com/njculpin",
    id: "github",
    image: "/github.svg",
  },
  {
    href: "https://x.com/njculpin",
    id: "twitter",
    image: "/twitter.svg",
  },
  {
    href: "https://medium.com/@nickculpin",
    id: "medium",
    image: "/medium.svg",
  },
];
export function Socials() {
  return (
    <div className="flex flex-row space-x-4 p-4 justify-center">
      {socials.map(function (social) {
        return (
          <a key={social.id} href={social.href} target="_blank">
            <div className="w-6 h-6">
              <img alt={`${social.id}`} src={social.image} />
            </div>
          </a>
        );
      })}
    </div>
  );
}
