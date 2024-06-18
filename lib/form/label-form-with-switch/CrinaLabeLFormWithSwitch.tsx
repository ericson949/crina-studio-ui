import React from 'react';
import {Switch} from "@headlessui/react";
import CrinaLabelForm from '../label-form/CrinaLabeLForm';
import { twMerge } from 'tailwind-merge';

const CrinaSwitch = ({
    labelText, name, enabled, onChange,children, className
                      }:{
    labelText:string;
    name:string;
    enabled:boolean;
    children?:React.ReactNode;
    className:string;
    onChange:(enable:boolean)=>void
}) => {
    return (
        <div className={"flex items-center relative space-x-2 justify-between w-full"}>
            <CrinaLabelForm
                name={"label"+name}
                label={labelText}
                children={children}
            />
            <div className="">
                <Switch
                    checked={enabled}
                    onChange={onChange}
                    className={twMerge(

                        "bg-primary data-[checked]:bg-ternary",
          "relative inline-flex h-[24px] w-[48px]",
          "shrink-0 cursor-pointer rounded-full border-2",
          "border-transparent transition-colors duration-200",
           "ease-in-out focus:outline-none", className)}
                >
                    <span
                        aria-hidden="true"
                        className={`
                        translate-x-0 group-data-[checked]:translate-x-6
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-[#FCFCFD]
            ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
        </div>
    );
};

export default CrinaSwitch;