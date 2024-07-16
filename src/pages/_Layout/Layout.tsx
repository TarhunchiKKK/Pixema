import { FC } from "react";
import { Outlet } from "react-router";
import { Header, NavigationSidebar } from "@/components";
import { useMediaQUery } from "@/utils";
import { NAVIGATION_SIDEBAR_BREAKPOINT } from "./constants";

export const Layout: FC = () => {
    const isSidebarVisible = useMediaQUery(NAVIGATION_SIDEBAR_BREAKPOINT);

    return (
        <div className="flex justify-between items-start">
            {isSidebarVisible && <NavigationSidebar />}

            <div key="main" className="grow">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};
