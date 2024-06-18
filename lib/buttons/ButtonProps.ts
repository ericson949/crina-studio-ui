import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset"
    disabled ?: boolean
    animateHover ?: boolean
    tooltip?:string |React.ReactNode;
    tooltipClassName ?: string,
    btnRef?:React.RefObject<HTMLButtonElement>
    textWhite?:string
    testId?:string
    loading?: boolean
};

export enum TYPE_OF_BUTTON {
    saveExit="btn-save-exit",
    saveContinue="btn-save-continue",
}