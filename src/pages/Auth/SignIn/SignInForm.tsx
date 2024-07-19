import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants";
import { Button, Input } from "@/components";
import { ISignInDto } from "@/types";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux";

export const SignInForm: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signInData, setSignInData] = useState<ISignInDto>({
        email: "",
        password: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(signIn({ ...signInData }));
        navigate(ROUTES.HOME);
    };

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignInData((prev) => ({ ...prev, email: e.target.value }));
    }, []);

    const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSignInData((prev) => ({ ...prev, password: e.target.value }));
    }, []);

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">Sign In</h1>

            <form onSubmit={handleSubmit} className="w-[225px] xs:w-[320px] md:w-[494px]">
                <div className="mb-5">
                    <Input
                        label="Email"
                        placeholder="Your email"
                        value={signInData.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="mb-5">
                    <Input
                        label="Password"
                        placeholder="Your password"
                        value={signInData.password}
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
