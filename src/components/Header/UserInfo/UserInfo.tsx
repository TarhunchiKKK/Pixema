import { FC } from "react";
import { ArrowDownIcon } from "@/assets";
import { useSelector } from "react-redux";
import { IRootState } from "@/types";

export const UserInfo: FC = () => {
    const { username } = useSelector((state: IRootState) => state.user);
    const initials = username
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center mr-[51px]">
                <div className="w-14 h-14 rounded-[10px] bg-primary text-center py-4 mr-5">
                    <span className="font-bold text-xl leading-6 text-white uppercase">
                        {initials}
                    </span>
                </div>

                <span className="font-semibold text-base">{username}</span>
            </div>

            <img src={ArrowDownIcon} className="cursor-pointer" alt="Arrow" />
        </div>
    );
};
