import { ArrowDownIcon } from "@/assets";

export const UserInfo = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center mr-[51px]">
                <div className="w-14 h-14 rounded-[10px] bg-primary p-4 mr-5">
                    <span className="font-bold text-xl leading-6 text-white uppercase">AL</span>
                </div>

                <span className="font-semibold text-base">Artem Lapitsky</span>
            </div>

            <img src={ArrowDownIcon} className="cursor-pointer" alt="Arrow" />
        </div>
    );
};
