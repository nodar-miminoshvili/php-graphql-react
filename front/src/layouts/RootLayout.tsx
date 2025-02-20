import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function RootLayout() {
  return (
    <div className="relative text-primary font-primary min-h-svh">
      <Header />
      <main className="max-w-7xl mx-auto px-12 xl:px-0">
        <Outlet />
      </main>
    </div>
  );
}
