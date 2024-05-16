import React from 'react';

interface ButtonProps {
    variant?: "default" | "rounded" | "next" | "prev" | "inline";
    onClick?: () => void;
    buttonMargin?: number;
    style?: string;
    children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const { variant = "default", onClick, buttonMargin, style } = props;

    let className = "";
    let buttonStyle = {};

    switch (variant) {
        case "rounded":
            className = `border-2 border-red-600 rounded-full ${style}`;
            break;
        case "next":
            className = `border-2 bg-white py-6 px-1 absolute top-1/2 z-10 ${style}`;
            buttonStyle = { right: `${buttonMargin}px` };
            break;
        case "prev":
            className = `border-2 bg-white py-6 px-1 absolute top-1/2 z-10 ${style}`;
            buttonStyle = { left: `${buttonMargin}px` };
            break;
        case "inline":
            className = `flex flex-row ${style}`;
            break;
        case "default":
            className = `${style}`;
    }

    return (
        <button className={`${className}`} style={buttonStyle} onClick={onClick}>
            {props.children}
        </button>
    );
}

export default Button;
