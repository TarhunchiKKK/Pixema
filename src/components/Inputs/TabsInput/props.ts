export interface ITabsInputProps {
    label: string;
    tabs: string[];
    value: string;
    onChange: (_: string) => void;
}
