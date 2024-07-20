import { FC, useState } from "react";
import { IMultipleChooseInputProps } from "./props";
import { ChoiseOption } from "./ChoiseOption";

export const MultipleChooseInput: FC<IMultipleChooseInputProps> = ({
    label,
    options,
    values,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const unchoosedOptions = options.filter((option) => !values.includes(option));

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleAddOption = (option: string) => {
        onChange([...values, option]);
    };

    const handleRemoveOption = (option: string) => {
        onChange(values.filter((value) => value !== option));
    };

    return (
        <>
            <label className="font-semibold text-base text-white block mb-2">{label}</label>

            <div
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="min-h-[100px] relative flex flex-wrap gap-3 p-3 bg-white dark:bg-graphite rounded-[10px] border-2 border-context-light dark:border-transparent dark:focus:border-primary"
            >
                {values.map((value) => (
                    <ChoiseOption
                        key={value}
                        content={value}
                        isSelected={true}
                        onChoose={() => handleRemoveOption(value)}
                    />
                ))}

                {isFocused && (
                    <div className="absolute left-0 top-0 -translate-y-full w-full flex flex-wrap gap-3 p-3 bg-graphite">
                        {unchoosedOptions.map((value) => (
                            <ChoiseOption
                                key={value}
                                content={value}
                                isSelected={false}
                                onChoose={() => handleAddOption(value)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
