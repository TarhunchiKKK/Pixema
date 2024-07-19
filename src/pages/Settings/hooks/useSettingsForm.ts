import { IRootState } from "@/types";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useSettingsForm() {
    const dispatch = useDispatch();
    const user = useSelector((state: IRootState) => state.user);
    const [settings, setSettings] = useState({
        username: user.username,
        email: user.email,
        password: "",
        newPassword: "",
        confirmPassowrd: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // dispatch(set)
        setSettings({
            username: user.username,
            email: user.email,
            password: "",
            newPassword: "",
            confirmPassowrd: "",
        });
    };

    const handleReset = () => {
        setSettings({
            username: user.username,
            email: user.email,
            password: "",
            newPassword: "",
            confirmPassowrd: "",
        });
    };

    const changeHandlers = useMemo(() => {
        return {
            handleNameChange: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings((prev) => ({ ...prev, username: e.target.value }));
            },
            handleemailChange: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings((prev) => ({ ...prev, email: e.target.value }));
            },
            handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings((prev) => ({ ...prev, password: e.target.value }));
            },
            handleNewPasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings((prev) => ({ ...prev, newPassword: e.target.value }));
            },
            handleConfirmPasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings((prev) => ({ ...prev, confirmPassowrd: e.target.value }));
            },
        };
    }, []);

    return [settings, handleSubmit, handleReset, changeHandlers];
}
