import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./footer"
export default function Layout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );

}