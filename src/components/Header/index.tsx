import { useMediaQUery } from "@/utils/hooks";
import { BURGER_VISIBILITY_BREAKPOINT, LOGO_VISIBILITY_BREAKPOINT } from "./constans";
import { Logo } from "../Logo";
import { Search } from "./Search";
import { Burger } from "./Burger";
import { UserInfo } from "./UserInfo";
import { setInitialColorTheme } from "@/utils/ui";

export const Header = () => {
    const isBurgerVisible = useMediaQUery(BURGER_VISIBILITY_BREAKPOINT);
    const isLogoVisible = useMediaQUery(LOGO_VISIBILITY_BREAKPOINT);

    setInitialColorTheme();

    return (
        <header className="pt-8 pb-10 md:pt-10 md:pb-12 3xl:pb-14">
            <div className="flex justify-between items-center flex-wrap">
                {isLogoVisible && <Logo />}

                <Search />

                {isBurgerVisible ? <Burger /> : <UserInfo />}
            </div>
        </header>
    );
};
