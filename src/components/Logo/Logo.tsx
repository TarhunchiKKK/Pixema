import { FC } from "react";
import { LogoDarkIcon, LogoLightIcon } from "@/assets";
import { useSelector } from "react-redux";
import { IRootState, THEMES } from "@/types";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";

export const Logo: FC = () => {
    const { colorTheme } = useSelector((state: IRootState) => state.ui);

    return (
        <Link to={ROUTES.HOME}>
            <img
                key="Logo"
                src={colorTheme === THEMES.LIGHT ? LogoLightIcon : LogoDarkIcon}
                alt="Logo"
                data-testid="Logo"
            />
        </Link>
    );
};
