import { NavLink as RouterLink, useParams } from "react-router-dom";

export default function NavLink({ linkTo }: { linkTo: string }) {
  const { category } = useParams();
  const isActive =
    linkTo === category || (typeof category === "undefined" && linkTo === "");

  return (
    <li className="h-full flex flex-col">
      <div
        className={`flex-grow flex items-center px-4 ${
          isActive ? "text-accent" : "text-primary"
        }`}
      >
        <RouterLink to={linkTo}>
          {linkTo !== "" ? linkTo.toUpperCase() : "ALL"}
        </RouterLink>
      </div>
      <div
        className={`w-full h-0.5 ${isActive ? "bg-accent" : "bg-transparent"}`}
      ></div>
    </li>
  );
}
