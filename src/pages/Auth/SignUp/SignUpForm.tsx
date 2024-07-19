import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";
import { Button, Input } from "@/components";
import { ISignUpDto } from "@/types";
import { useDispatch } from "react-redux";
import { signUp } from "@/redux";

export const SignUpForm: FC = () => {
    const dispatch = useDispatch();

    const [signUpData, setSignUpData] = useState<ISignUpDto & { confirmPassword: string }>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (signUpData.password === signUpData.confirmPassword) {
            dispatch(signUp({ ...signUpData }));
        } else {
            setPasswordsMatch(false);
        }
    };

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignUpData((prev) => ({ ...prev, username: e.target.value }));
    }, []);

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignUpData((prev) => ({ ...prev, email: e.target.value }));
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignUpData((prev) => ({ ...prev, password: e.target.value }));
    }, []);

    const handleConfimPasswordchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignUpData((prev) => ({ ...prev, confirmPassword: e.target.value }));
    }, []);

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">Sign Up</h1>

            <form onSubmit={handleSubmit} className="w-[225px] xs:w-[320px] md:w-[494px]">
                <div className="mb-5">
                    <Input
                        label="Name"
                        placeholder="Your name"
                        value={signUpData.username}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-5">
                    <Input
                        label="Email"
                        placeholder="Your email"
                        value={signUpData.email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="mb-5">
                    <Input
                        label="Password"
                        placeholder="Your password"
                        value={signUpData.password}
                        onChange={handlePasswordChange}
                        error={!passwordsMatch ? "Passwords not match" : undefined}
                    />
                </div>

                <div className="mb-8">
                    <Input
                        label="Confirm password"
                        placeholder="Confirm password"
                        value={signUpData.confirmPassword}
                        onChange={handleConfimPasswordchange}
                        error={!passwordsMatch ? "Passwords not match" : undefined}
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
