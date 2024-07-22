import { FC } from "react";
import { ArrowDownIcon } from "@/assets";
import { useSelector } from "react-redux";
import { IRootState } from "@/types";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";

export const UserInfo: FC = () => {
    const { username } = useSelector((state: IRootState) => state.user);
    const initials = username
        ? username
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()
        : null;

    return (
        <div className="flex justify-between items-center">
            {username ? (
                <>
                    <div className="flex justify-between items-center mr-[51px]">
                        <div className="w-14 h-14 rounded-[10px] bg-primary text-center py-4 mr-5">
                            <span className="font-bold text-xl leading-6 text-white uppercase">
                                {initials}
                            </span>
                        </div>

                        <span className="font-semibold text-base">{username}</span>
                    </div>

                    <img src={ArrowDownIcon} className="cursor-pointer" alt="Arrow" />
                </>
            ) : (
                <Link to={ROUTES.SIGN_IN}>
                    <span className="text-primary font-semibold text-base">Sign In</span>
                </Link>
            )}
        </div>
    );
};
