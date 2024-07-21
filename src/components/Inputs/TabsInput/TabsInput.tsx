import { FC } from "react";
import { ITabsInputProps } from "./props";

export const TabsInput: FC<ITabsInputProps> = ({ label, tabs, value, onChange }) => {
    return (
        <>
            <label className="font-semibold text-base text-white block mb-2">{label}</label>

            <div className="w-full flex border-2 border-graphite rounded-[10px] overflow-hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => onChange(tab.value)}
                        className={`grow text-base font-medium py-4 ${tab.value === value ? "bg-dark text-secondary" : "text-white bg-context-light dark:bg-graphite"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </>
    );
};
