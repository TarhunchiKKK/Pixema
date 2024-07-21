import { FC } from "react";
import { LogoDarkIcon, LogoLightIcon } from "@/assets";
import { useSelector } from "react-redux";
import { IRootState, THEMES } from "@/types";

export const Logo: FC = () => {
    const { colorTheme } = useSelector((state: IRootState) => state.ui);

    return (
        <img
            key="Logo"
            src={colorTheme === THEMES.LIGHT ? LogoLightIcon : LogoDarkIcon}
            alt="Logo"
        />
    );
};
