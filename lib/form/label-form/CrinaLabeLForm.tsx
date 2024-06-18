import React from "react";
import { twMerge } from "tailwind-merge";
import CrinaIconButton from "../../buttons/crina-icon-button/CrinaIconButton";
import { IconAlert } from "../../generics/icons/IconAlert";

interface LabelFromProps {
    name?: string;
    required?: boolean;
    label: string;
    tooltip?: string;
    children?: React.ReactNode;
    className?: string;
    tooltipClassName?:string
    labelClassName?: string
    tooltipCss?:string;
}

const CrinaLabelForm: React.FC<LabelFromProps> = ({
    name, 
    labelClassName,
    children,
    required,
    label,
    tooltip,
    className,
    tooltipClassName
}) => {
    return (
        <label
            htmlFor={name}
            className={twMerge(
                "w-full font-[Bold] text-sm text-epim-black relative ",
                " after:ml-0.5 ",
                tooltip ? " z-50 " : "",
                required ? " after:content-['*'] after:text-red" : "",
                className
            )}
        >
            <span className={
                twMerge(
                    "text-epim-black font-bold text-sm lg:text-[12px] xl:text-sm",
                    labelClassName,
                )
            }>{label}</span>
            {(tooltip || children) && (
                <span
                    className={
                        "absolute z-50 right-100 ml-4 bg-[#FCE0D7] p-1 rounded-full -mt-0  "
                    }
                >
                    <CrinaIconButton
                        type={"button"}
                        tooltip={tooltip ?? children}
                        tooltipClassName={tooltipClassName}
                    >
                        <IconAlert className="fill-red w-[13px] h-[13px]" />
                    </CrinaIconButton>
                </span>
            )}
        </label>
    );
};

export default CrinaLabelForm