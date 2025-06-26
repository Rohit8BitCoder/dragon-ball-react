import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header"
import Footer from "./footer"

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex flex-1">

                {/* Sidebar */}

                <aside className="w-48  p-4 min-h-full">
                    <nav className="flex flex-col gap-4">
                        <NavLink to="/dashboard/characters" className={({ isActive }) =>
                            `py-2 px-3 rounded font-semibold ${isActive ? 'bg-orange-200 text-orange-700' : 'hover:bg-gray-300'}`
                        }>
                            Characters
                        </NavLink>
                        <NavLink to="/dashboard/planets" className={({ isActive }) =>
                            `py-2 px-3 rounded font-semibold ${isActive ? 'bg-orange-200 text-orange-700' : 'hover:bg-gray-300'}`
                        }>
                            Planets
                        </NavLink>
                    </nav>
                </aside>

                
                {/* Main Content */}
                <main className="flex-1 p-6">
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </div>
    );
}