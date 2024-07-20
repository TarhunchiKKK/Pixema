import { FC } from "react";
import { InputsGroup } from "./InputsGroup";
import { Button, Input } from "@/components";
import { ThemeSwitch } from "./ThemeSwitch";
import { useSettingsForm } from "./hooks";

export const SettingsPage: FC = () => {
    const [settings, handleSubmit, handleReset, changeHandlers] = useSettingsForm();

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-8 md:mb-10">
                <InputsGroup label="Profile">
                    <div className="w-full">
                        <Input
                            label="Name"
                            value={settings.username}
                            onChange={changeHandlers.handleUsernameChange}
                        />
                    </div>

                    <div className="w-full">
                        <Input
                            label="Email"
                            value={settings.email}
                            onChange={changeHandlers.handleEmailChange}
                        />
                    </div>
                </InputsGroup>
            </div>

            <div className="mb-8 md:mb-10">
                <InputsGroup label="Password">
                    <div className="w-full">
                        <Input
                            label="Password"
                            value={settings.password}
                            onChange={changeHandlers.handlePasswordChange}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <Input
                                label="New password"
                                value={settings.newPassword}
                                onChange={changeHandlers.handleNewPasswordChange}
                            />
                        </div>

                        <div>
                            <Input
                                label="Confirm password"
                                value={settings.confirmPassowrd}
                                onChange={changeHandlers.handleConfirmPasswordChange}
                            />
                        </div>
                    </div>
                </InputsGroup>
            </div>

            <div className="mb-10">
                <h3 className="font-semibold text-xl leading-8 mb-[18px]">Color mode</h3>

                <ThemeSwitch />
            </div>

            <div className="flex flex-col xs:flex-row justify-between items-center gap-4 md:gap-[33px] lg:gap-10 lg:max-w-[572px] lg:ml-auto">
                <Button content="Save" isPrimary={true} />
                <Button content="Cancel" isPrimary={false} onClick={handleReset} />
            </div>
        </form>
    );
};
