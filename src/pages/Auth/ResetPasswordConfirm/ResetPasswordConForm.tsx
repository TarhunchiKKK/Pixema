import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@/constants";
import { Button, Input } from "@/components";
import { useDispatch } from "react-redux";
import { resetPasswordConfirm } from "@/redux";

export const ResetPasswordConfirmForm: FC = () => {
    const dispatch = useDispatch();

    const { uid, token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!uid || !token) {
            navigate(ROUTES.HOME);
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!password && !confirmPassword) {
            setError("Required fields");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            dispatch(
                resetPasswordConfirm({
                    uid: uid!,
                    token: token!,
                    new_password: password,
                }),
            );
            navigate(ROUTES.HOME);
        }
    };

    const changeHandlers = useMemo(() => {
        return {
            handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
            },
            handleConfimPasswordChange: (e: ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(e.target.value);
            },
        };
    }, []);

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">Sign Up</h1>

            <form onSubmit={handleSubmit} className="w-[225px] xs:w-[320px] md:w-[494px]">
                <div className="mb-5">
                    <Input
                        label="Password"
                        placeholder="Your password"
                        value={password}
                        onChange={changeHandlers.handlePasswordChange}
                        error={error || undefined}
                    />
                </div>

                <div className="mb-8">
                    <Input
                        label="Confirm password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={changeHandlers.handleConfimPasswordChange}
                        error={error || undefined}
                    />
                </div>

                <Button content="Sign up" isPrimary={true} />
            </form>
        </>
    );
};
