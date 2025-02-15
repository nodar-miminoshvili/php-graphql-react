import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
        <>
        <header className="text-indigo-400">
            HEADER
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}