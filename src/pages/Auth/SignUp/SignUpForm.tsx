import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import { Button, Input } from "@/components";

export const SignUpForm: FC = () => {
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const handleConfimPasswordchange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">Sign Up</h1>

            <form className="w-[225px] xs:w-[320px] md:w-[494px]">
                <div className="mb-5">
                    <Input
                        label="Name"
                        placeholder="Your name"
                        value={""}
                        onChange={handleNameChange}
                    />
                </div>

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

                <div className="mb-8">
                    <Input
                        label="Confirm password"
                        placeholder="Confirm password"
                        value={""}
                        onChange={handleConfimPasswordchange}
                    />
                </div>

                <Button content="Sign up" isPrimary={true} />
            </form>

            <p className="mt-6 font-medium text-base text-center text-secondary">
                Already have an account?{" "}
                <Link to={ROUTES.SIGN_IN} className="text-primary">
                    Sign In
                </Link>
            </p>
        </>
    );
};
