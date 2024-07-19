import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "@/components";
import { resetPassword } from "@/redux";

export const ResetPasswordForm: FC = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isSubmited, setIsSubmited] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            dispatch(resetPassword(email));
            setIsSubmited(true);
        } else {
            setError("Required field");
        }
    };

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    return (
        <>
            <h1 className="font-semibold text-2xl leading-9 capitalize mb-10">New password</h1>

            {isSubmited && (
                <p className="font-medium text-base my-10">
                    You will receive an email {email} with a link to reset your password!
                </p>
            )}

            <form
                key="form"
                onSubmit={handleSubmit}
                className="w-[225px] xs:w-[320px] md:w-[494px]"
            >
                <div className="mb-5">
                    <Input
                        label="Email"
                        placeholder="Your email"
                        value={email}
                        onChange={handleEmailChange}
                        error={error || undefined}
                    />
                </div>

                <Button content="Set password" isPrimary={true} />
            </form>
        </>
    );
};
