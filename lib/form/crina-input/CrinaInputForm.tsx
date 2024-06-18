import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import CrinaLabelForm from "../label-form/CrinaLabeLForm";
import { IconEye } from "../../generics/icons/IconEye";
import { IconEyeOff } from "../../generics/icons/IconEyeOff";
import CrinaSwitch from "../label-form-with-switch/CrinaLabeLFormWithSwitch";

type InputType = "text" | "password" | "email" | "number";


export interface PropsInput {
    className?: string;
    tooltipClassName?: string;
    icon?: JSX.Element;
    suffixIcon?: JSX.Element;
    type:InputType;
    name: string;
    id?: string;
    value?: string | number;
    placeholder?: string;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    registerValidate?: any;
    maxLength?: number | string;
    minLength?: number | string;
    disabled?: boolean;
    errorMessage?: string;
    required?: boolean;
    label?: string;
    testId?: string;
    tooltip?: string;
    children?: React.ReactNode;
    withSwitch?: boolean;
    switchClassName?: string;
    onChangeSwitch?: (enabled: boolean) => void;
    enabled?: boolean;
}

const CrinaInputForm: React.FC<PropsInput> =
    ({
         errorMessage,
         type,
         name,
         id,
         value,
         placeholder,
         onChange,
         onFocus,
         onBlur,
         registerValidate,
         maxLength,
         minLength,
         disabled,
         tooltipClassName,
         defaultValue,
         className,
         icon,
         label,
         required,
         tooltip,
         children,
         withSwitch,
         enabled = false,
         switchClassName ="",
        testId='',
         onChangeSwitch = () => null,
     }): JSX.Element => {
        const [showPassword, setShowPassword] = useState(false);
        type Props = Record<string, any>;
        const propsInput: Props = {
            name: name,
            id: id,
            placeholder: placeholder,
            disabled: disabled,
            onFocus: onFocus,
            onBlur: onBlur,
            max: maxLength,
            min: minLength,
        };
        if (value) {
            propsInput.value = value;
        }

        if (defaultValue) {
            propsInput.defaultValue = defaultValue;
        }
        const handleShowPassword = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div className="w-full flex flex-wrap space-y-1 h-fit">
                {" "}
                {(label && !withSwitch ) && (
                    <CrinaLabelForm 
                        name={name}
                        tooltip={tooltip}
                        required={required}
                        label={label}
                        tooltipClassName={tooltipClassName}
                    >{children}</CrinaLabelForm>
                )}
                {label && withSwitch && (<div className={"w-full flex justify-between"}>

                    <CrinaSwitch
                        labelText={label}
                        name={"name"}
                        enabled={enabled}
                        className={switchClassName}
                        onChange={onChangeSwitch}
                        children={children ?? tooltip}
                    />

                </div>)}
                <div
                    className={`relative  w-full h-fit`}
                >
                    {icon && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                            type="submit"
                            className="p-1 focus:outline-none focus:shadow-outline"
                        >
                            {icon}
                        </button>
                    </span>
                    )}
                    <input
                        {...(registerValidate
                            ? registerValidate(name ?? "", {
                                onChange: onChange,
                            })
                            : {
                                onChange: onChange,
                                value: value,
                            })}
                        name={name}
                        data-testid={testId}
                        type={showPassword ? "text" : type ?? "text"}
                        className={twMerge(
                            "w-full h-10 text-[14px] font-meduim bg-white",
                           " border-[2px] text-epim-black rounded-[10px]",
                            "focus:border-epim-green",
                    "disabled:bg-[#E6EAEF] disabled:text-epim-black disabled:placeholder-epim-black",
                    "disabled:placeholder:font-regular",
                    "focus:outline-none",
                      "text-sm  placeholder:text-textColor/50",
                      "placeholder:font-regular placeholder:text-sm",
                                icon ? "pl-10" : "pl-4",
                                type==="password" ? "pr-10" : "pr-5"
                ,className
                        )}
                        placeholder={placeholder}
                        {...propsInput}
                    />
                    {type === "password" && (
                        <span className={twMerge("absolute inset-y-0 right-9 flex items-center ",
                            showPassword ? "bottom-0" : ""
                        )}>
                        <button
                            className="absolute  focus:outline-none"
                            onClick={handleShowPassword}
                            type="button"
                        >
                            {showPassword ? <IconEye/> : <IconEyeOff/>}
                        </button>
                    </span>
                    )}
                </div>
                {errorMessage && <div className="w-full">
                    <span className=" text-xs text-red">{errorMessage}</span>
                </div>}
            </div>
        );
};

export default CrinaInputForm