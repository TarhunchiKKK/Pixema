import { FC } from "react";
import { Logo } from "../../Logo";
import { NavigationList } from "@/components/NavigationList";

export const NavigationSidebar: FC = () => {
    return (
        <aside className="sticky top-0 min-w-[306px] min-h-screen pt-12 pb-16 flex flex-col justify-between items-start">
            <div>
                <div className="mb-16">
                    <Logo />
                </div>

                <NavigationList />
            </div>

            <span>© All Rights Reserved</span>
        </aside>
    );
};
