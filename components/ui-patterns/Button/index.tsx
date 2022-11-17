import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonType from "./button-type";

export default function Button({ children, type, size, hasLink, link, onClick, className, id}: ButtonType) {
    const [buttonType, setButtonType] = useState("hkrs-button-default");
    const [buttonSize, setButtonSize] = useState("hkrs-button-medium");

    useEffect(() => {
        switch (type) {
            case "solid": setButtonType("hkrs-button-solid"); break;
            case "default": setButtonType("hkrs-button-default");
            default: setButtonType("hkrs-button-default"); break;
        }
    });

    useEffect(() => {
        switch (size) {
            case "small": setButtonSize("hkrs-button-small"); break;
            case "large": setButtonSize("hkrs-button-large"); break;
            case "medium": setButtonSize("hkrs-button-medium"); break;
            default: setButtonSize("hkrs-button-medium"); break;
        }
    });

    return (
        !hasLink
            ? <button className={`hkrs-button ${buttonType} ${buttonSize} ${className || ""}`}
                onClick={onClick}
                id={id}
            >
                {children || "Button"}
            </button>
            : <Link href={link || ""}>
                <button className={`hkrs-button ${buttonType} ${buttonSize} ${className || ""}`}
                    onClick={onClick}
                    id={id}
                >
                    {children || "Button"}
                </button>
            </Link>
    )
}