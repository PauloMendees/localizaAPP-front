import React, { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import { When } from "../When";

type InputProps = {
    name?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    id?: string;
    error?: boolean;
    type?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    maxLength?: number;
    readonly?: boolean;
    className: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
    onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export default function OutlinedInput(props: InputProps) {
    return (
        <>
            <When value={props.label}>
                <label className="md:text-sm xl:text-sm 2xl:text-[14px]">{props.label}</label>
            </When>
            <input
                className={
                    " px-2 py-1 border border-gray-800 focus:border-cyan-600 focus:outline-1 bg-transparent focus:outline-none autofill:bg-transparent rounded-lg h-9 " + props.className
                }
                onChange={props.onChange}
                id={props.id ?? props.name}
                name={props.name}
                type={props.type}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                value={props.value}
                disabled={props.isDisabled}
                maxLength={props.maxLength}
                readOnly={props.readonly}
                required={props.isRequired}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
            />
        </>
    );
}