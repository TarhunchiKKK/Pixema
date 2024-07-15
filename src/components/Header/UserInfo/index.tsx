import { ArrowDownIcon } from "@/assets";

export const UserInfo = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
                <div className="w-14 h-14 rounded-[10px] bg-primary p-4">
                    <span className="font-primary font-bold text-xl leading-6 text-white uppercase">
                        AL
                    </span>
                </div>

                <span className="font-primary font-semibold text-base text-white">
                    Artem Lapitsky
                </span>
            </div>

            <img src={ArrowDownIcon} className="cursor-pointer" alt="Arrow" />
        </div>
    );
};
