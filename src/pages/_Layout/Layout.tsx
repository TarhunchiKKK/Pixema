import { FC } from "react";
import { Outlet } from "react-router";
import { Header, NavigationSidebar } from "@/components";
import { useMediaQUery } from "@/utils";
import { NAVIGATION_SIDEBAR_BREAKPOINT } from "./constants";

export const Layout: FC = () => {
    const isSidebarVisible = useMediaQUery(NAVIGATION_SIDEBAR_BREAKPOINT);

    return (
        <div className="flex items-start">
            {isSidebarVisible && <NavigationSidebar />}

            <main key="main" className="grow">
                <Header />
                <Outlet />
            </main>
        </div>
    );
};
