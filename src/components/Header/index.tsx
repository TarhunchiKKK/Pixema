import { useMediaQUery } from "@/utils/hooks";
import { BURGER_VISIBILITY_BREAKPOINT, LOGO_VISIBILITY_BREAKPOINT } from "./constans";
import { Logo } from "../Logo";
import { Search } from "./Search";
import { Burger } from "./Burger";
import { UserInfo } from "./UserInfo";

export const Header = () => {
    const isBurgerVisible = useMediaQUery(BURGER_VISIBILITY_BREAKPOINT);
    const isLogoVisible = useMediaQUery(LOGO_VISIBILITY_BREAKPOINT);

    return (
        <header>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {isLogoVisible && <Logo />}

                    <Search />

                    {isBurgerVisible ? <Burger /> : <UserInfo />}
                </div>
            </div>
        </header>
    );
};
