import { FC } from "react";
import { Outlet } from "react-router";
import { Header, NavigationSidebar } from "@/components";
import { useMediaQUery } from "@/utils";
import { NAVIGATION_SIDEBAR_BREAKPOINT } from "../constants";

export const MainLayout: FC = () => {
    const isSidebarVisible = !useMediaQUery(NAVIGATION_SIDEBAR_BREAKPOINT);

    return (
        <div className="flex items-start">
            {isSidebarVisible && <NavigationSidebar />}

            <div className="grow">
                <Header />

                <main key="main" className="pt-10 md:pt-12 xl:pt-14 pb-12 md:pb-14 xl:16">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
