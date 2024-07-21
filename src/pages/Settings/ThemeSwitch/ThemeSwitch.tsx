import { toggleColorTheme } from "@/redux";
import { IRootState, THEMES } from "@/types";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSwitch: FC = () => {
    const dispatch = useDispatch();
    const colorTheme = useSelector((state: IRootState) => state.ui.colorTheme);

    const handleSwitch = () => {
        dispatch(toggleColorTheme());
    };

    return (
        <div className="flex justify-between items-center bg-context-white dark:bg-dark p-6 md:p-10 rounded-[10px]">
            <div>
                <h5 className="font-bold text-base mb-1">
                    {colorTheme === THEMES.LIGHT ? "Light" : "Dark"}
                </h5>
                <span className="font-medium text-base text-graphite dark:text-context-light">
                    Use {colorTheme} thema
                </span>
            </div>

            <label className="switch-label">
                <input
                    className="switch-checkbox"
                    type="checkbox"
                    defaultChecked={colorTheme === THEMES.DARK}
                    onChange={handleSwitch}
                />
                <span className="switch-span"></span>
            </label>
        </div>
    );
};
