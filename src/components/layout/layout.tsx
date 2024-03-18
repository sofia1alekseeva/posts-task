import { FC } from "react";
import AppHeader from "../app/app-header/app-header";
import { Outlet } from "react-router-dom";

const Layout:FC =() => {
    return <div>
        <AppHeader/>
        <div>
            <Outlet/>
        </div>
    </div>
}

export default Layout;