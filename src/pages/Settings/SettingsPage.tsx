import { FC } from "react";
import { InputsGroup } from "./InputsGroup";
import { Button, Input } from "@/components";
import { ThemeSwitch } from "./ThemeSwitch";

export const SettingsPage: FC = () => {
    return (
        <>
            <div className="mb-8 md:mb-10">
                <InputsGroup label="Profile">
                    <div className="w-full">
                        <Input label="Name" value={""} onChange={() => {}} />
                    </div>

                    <div className="w-full">
                        <Input label="Email" value={""} onChange={() => {}} />
                    </div>
                </InputsGroup>
            </div>

            <div className="mb-8 md:mb-10">
                <InputsGroup label="Password">
                    <div className="w-full">
                        <Input label="Password" value={""} onChange={() => {}} />
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <Input label="New password" value={""} onChange={() => {}} />
                        </div>

                        <div>
                            <Input label="Confirm password" value={""} onChange={() => {}} />
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
                <Button content="Cancel" isPrimary={false} />
            </div>
        </>
    );
};
