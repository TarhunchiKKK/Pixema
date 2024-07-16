import { FC } from "react";
import { ITabsInputProps } from "./props";

export const TabsInput: FC<ITabsInputProps> = ({ label, tabs, value, onChange }) => {
    return (
        <>
            <label className="font-semibold text-base block mb-2">{label}</label>

            <div className="w-full flex border-2 border-graphite rounded-[10px] overflow-hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onChange(tab)}
                        className={`text-base font-medium bg-graphite text-white ${tab === value ? "bg-dark text-secondary" : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </>
    );
};
