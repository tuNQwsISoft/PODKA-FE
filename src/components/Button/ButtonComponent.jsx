import React from "react";
import "./styles.css";
import groupClass from "../../utils/ClassNameUtil";

/**
 * @typedef {{
 *  prefix?: any,
 *  suffix?: any,
 *  className?: string,
 *  onClick?: React.MouseEventHandler<HTMLButtonElement>,
 *  label?: string,
 * }  & React.ButtonHTMLAttributes<HTMLButtonElement>} ButtonProps
 */

/**
 *
 * @param {ButtonProps} buttonProps
 * @returns
 */

const ButtonComponent = ({
    prefix,
    suffix,
    label,
    onClick,
    className,
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            className={groupClass("button", className)}
            {...props}
        >
            {prefix}
            <span className="button-label flex-1 whitespace-nowrap text-nowrap text-left text-inherit">
                {label}
            </span>
            {suffix}
        </button>
    );
};

export default ButtonComponent;
