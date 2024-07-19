import { ROUTES } from "@/constants";
import { activateUser } from "@/redux";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const ActivationPage: FC = () => {
    const { uid, token } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (uid && token) {
            dispatch(activateUser({ uid, token }));
        }
        navigate(ROUTES.SIGN_IN);
    });

    return <></>;
};
