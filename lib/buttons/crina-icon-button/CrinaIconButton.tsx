import {twMerge} from "tailwind-merge";
import { ButtonProps } from "../ButtonProps";

const  CrinaIconButton = ({
    children,
    className,
    onClick,
    disabled,
    tooltip,
    tooltipClassName: tooltipCss,
    type
}: ButtonProps) => {
    return (
        <div className="w-fit relative group">
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={twMerge(`rounded-[4px] flex items-center justify-center cursor-pointer
            disabled:fill-title/50
            disabled:hover:fill-title/50
             tooltip
            `, className)}
            >
                {children}
            </button>
            <div
                id="tooltip-default"
                role="tooltip"
                className={
                twMerge(
                    "absolute z-[9999]",
                    "px-4 min-h-[32px] py-4 items-center flex text-sm font-medium -top-10 bg-white " +
                    " max-w-lg w-max  pr-2 " +
                    " left-[-40px] ",
                    " transition-opacity duration-300 rounded-lg shadow-sm ",
                    "  tooltip border-solid border ",
                    tooltipCss,
                    disabled ? "hidden" :
                        "opacity-0 invisible group-hover:visible group-hover:opacity-100"
                )
            }
            >
                {tooltip}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    );
};

export default CrinaIconButton