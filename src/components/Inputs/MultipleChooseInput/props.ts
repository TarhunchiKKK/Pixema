export interface IMultipleChooseInputProps {
    label: string;
    options: string[];
    values: string[];
    onChange: (_: string[]) => void;
}

export interface IChoiseOptionProps {
    content: string;
    isSelected: boolean;
    onChoose: (_: string) => void;
}
