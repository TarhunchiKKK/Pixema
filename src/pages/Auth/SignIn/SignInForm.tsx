import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import { Button, Input } from "@/components";

export const SignInForm: FC = () => {
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">Sign Up</h1>

            <form className="w-[225px] xs:w-[320px] md:w-[494px]">
                <div className="mb-5">
                    <Input
                        label="Email"
                        placeholder="Your email"
                        value={""}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Password"
                        placeholder="Your password"
                        value={""}
                        onChange={handlePasswordChange}
                    />
                </div>
                <Button content="Sign in" isPrimary={true} />
            </form>

            <p className="mt-6 font-medium text-base text-center text-secondary">
                Already have an account?{" "}
                <Link to={ROUTES.SIGN_UP} className="text-primary">
                    Sign Up
                </Link>
            </p>
        </>
    );
};
