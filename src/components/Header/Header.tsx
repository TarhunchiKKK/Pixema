import { FC } from "react";
import { BURGER_VISIBILITY_BREAKPOINT, LOGO_VISIBILITY_BREAKPOINT } from "./constans";
import { Logo } from "../Logo";
import { Search } from "./Search";
import { Burger } from "./Burger";
import { UserInfo } from "./UserInfo";
import { useMediaQUery } from "@/utils";

export const Header: FC = () => {
    const isBurgerVisible = useMediaQUery(BURGER_VISIBILITY_BREAKPOINT);
    const isLogoVisible = useMediaQUery(LOGO_VISIBILITY_BREAKPOINT);

    return (
        <header className="pt-8 md:pt-10">
            <div className="flex justify-between items-center flex-wrap">
                {isLogoVisible && <Logo />}

                <Search />

                {isBurgerVisible ? <Burger /> : <UserInfo />}
            </div>
        </header>
    );
};
