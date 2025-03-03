import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/queries";
import NavLink from "./NavLink";

export default function Navbar() {
  const { data, error, loading } = useQuery<Categories>(GET_CATEGORIES);

  if (loading) return <p className="h-20">Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <nav className="h-20 font-semibold tracking-wide font-primary">
      <ul className="flex gap-12 h-full">
        <NavLink linkTo="all" />

        {data?.categories.map((category) => (
          <NavLink key={category.name} linkTo={category.name} />
        ))}
      </ul>
    </nav>
  );
}
