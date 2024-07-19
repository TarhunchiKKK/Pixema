import { FC } from "react";

export const ThemeSwitch: FC = () => {
    return (
        <div className="flex justify-between items-center bg-dark p-6 md:p-10 rounded-[10px]">
            <div>
                <h5 className="font-bold text-base text-white mb-1">Dark</h5>
                <span className="font-medium text-base text-context-light">Use dark thema</span>
            </div>

            <label className="switch-label">
                <input className="switch-checkbox" type="checkbox" defaultChecked={false} />
                <span className="switch-span"></span>
            </label>
        </div>
    );
};
