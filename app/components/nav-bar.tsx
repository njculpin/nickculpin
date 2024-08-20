import { Link } from "@remix-run/react";

export function NavBar() {
  return (
    <div className="font-sans p-4">
      <div className="flex flex-row space-x-4 items-baseline">
        <Link to={"/"}>
          <h1 className="text-3xl">Nick Culpin</h1>
        </Link>
        <p>Software Engineer, Game Designer, Artist</p>
      </div>
    </div>
  );
}
