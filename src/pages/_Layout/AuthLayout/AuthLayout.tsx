import { Logo } from "@/components";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
    useEffect(() => {
        document.body.classList.add("auth-background");

        console.log("Effect");

        return () => document.body.classList.remove("auth-background");
    }, []);

    return (
        <>
            <header className="pt-8 mb-12">
                <div className="flex justify-center md:justify-start px-10 3xl:px-[62px]">
                    <Logo />
                </div>
            </header>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-[10px] w-max mx-auto bg-white dark:bg-dark">
                <Outlet />
            </div>

            <footer className="fixed left-0 bottom-0 w-full pb-12 md:pb-14 3xl:pb-[63px]">
                <div className="text-center">
                    <span className="font-medium text-base">© All Rights Reserved</span>
                </div>
            </footer>
        </>
    );
};
