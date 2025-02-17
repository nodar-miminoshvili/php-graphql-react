import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function RootLayout() {
  return (
    <div className="px-12 xl:px-0 max-w-7xl mx-auto text-primary">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
