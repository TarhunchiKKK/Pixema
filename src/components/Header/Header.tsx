import { FC } from "react";
import { BURGER_VISIBILITY_BREAKPOINT, LOGO_VISIBILITY_BREAKPOINT } from "./constans";
import { Logo } from "../Logo";
import { Search } from "./Search";
import { Burger } from "./Burger";
import { UserInfo } from "./UserInfo";
import { useMediaQUery } from "@/utils";
import { useSelector } from "react-redux";
import { IRootState } from "@/types";
import { NavigationList } from "../NavigationList";

export const Header: FC = () => {
    const isBurgerVisible = useMediaQUery(BURGER_VISIBILITY_BREAKPOINT);
    const isLogoVisible = useMediaQUery(LOGO_VISIBILITY_BREAKPOINT);
    const isBurgerOpen = useSelector((state: IRootState) => state.ui.isBurgerOpen);

    return (
        <header className="pt-8 md:pt-10 relative">
            <div className="flex justify-between items-center flex-wrap">
                {isLogoVisible && <Logo />}

                <Search />

                {isBurgerVisible ? <Burger /> : <UserInfo />}

                {isBurgerVisible && isBurgerOpen && (
                    <aside className="bg-black absolute top-full right-0 z-30 min-h-screen w-[196px] md:w-[248px] pt-6 pl-6 md:pl-8">
                        <NavigationList />
                    </aside>
                )}
            </div>
        </header>
    );
};
