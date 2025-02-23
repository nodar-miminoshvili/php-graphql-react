import { NavLink as RouterLink, useParams } from "react-router-dom";

export default function NavLink({ linkTo }: { linkTo: string }) {
  const params = useParams();
  const isActive =
    linkTo === params.category ||
    (Object.keys(params).length === 0 && linkTo === "all");

  return (
    <li className="h-full flex flex-col">
      <div
        className={`flex-grow flex items-center px-4 ${
          isActive ? "text-accent" : "text-primary"
        }`}
      >
        <RouterLink
          to={linkTo}
          data-testid={isActive ? "active-category-link" : "category-link"}
        >
          {linkTo.toUpperCase()}
        </RouterLink>
      </div>
      <div
        className={`w-full h-0.5 ${isActive ? "bg-accent" : "bg-transparent"}`}
      ></div>
    </li>
  );
}
