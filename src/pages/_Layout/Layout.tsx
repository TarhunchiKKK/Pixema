import { Header } from "@/components";
import { NavigationSidebar } from "@/components/NavigationSidebar/NavigationSidebar";
import { useMediaQUery } from "@/utils/hooks";
import { Outlet } from "react-router";
import { NAVIGATION_SIDEBAR_BREAKPOINT } from "./constants";

export const Layout = () => {
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
