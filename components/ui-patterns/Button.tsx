import { useEffect, useRef, useState } from "react";

type ButtonType = {
    children?: any,
    type?: string,
    shade?: string,
    isActive?: boolean
};

export default function Button({ children, type, shade="product-orange", isActive=true }: ButtonType, props: any) {
    const [buttonType, setButtonType] = useState("product-button-secondary");
    const [buttonShade, setButtonShade] = useState("product-orange");
    const [buttonShadowSize, setButtonShadowSize] = useState("5px 5px");
    const isButtonActive = useRef(isActive ? true : false);

    useEffect(() => {
        switch (type) {
            case "primary": setButtonType("product-button-primary"); break;
            default: setButtonType("product-button-secondary"); break;
        }
    }, [type]);

    useEffect(() => {
        switch (shade) {
            case "product-red": setButtonShade("#FF4E4E"); break;
            case "product-pink": setButtonShade("#FF008A"); break;
            case "product-orange": setButtonShade("#FF833E"); break;
            case "product-purple-dark": setButtonShade("#5B23FA"); break;
            case "product-purple-light": setButtonShade("#7C4EFF"); break;
            case "product-teal": setButtonShade("#12C0AB"); break;
            case "product-yellow": setButtonShade("#FFB800"); break;
            case "product-blue": setButtonShade("#4E95FF"); break;
            case "product-brown": setButtonShade("#231C18"); break;
            default: setButtonShade(shade); break;
        }
    }, [shade]);



    return (
        <button className={`product-button ${isButtonActive ? `${buttonType}` : "button-deactivated"}`} {...props}
            onMouseEnter={() => setButtonShadowSize("3px 3px")}
            onMouseLeave={() => setButtonShadowSize("5px 5px")}
            style={{
                boxShadow: buttonShadowSize + buttonShade
            }}
        >
            {children || "DemoButton"}
        </button>
    )
}