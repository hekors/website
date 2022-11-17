import { useEffect, useState } from "react"

export default function Headline({children, size, className, id}: HeadlineType) {
    const [headlineSize, setHeadlineSize] = useState("hkrs-headline-lg");
    useEffect(() => {
        switch (size) {
            case "xl": setHeadlineSize("hkrs-headline-xl"); break;
            case "2xl": setHeadlineSize("hkrs-headline-2xl"); break;
            case "3xl": setHeadlineSize("hkrs-headline-3xl"); break;
            case "4xl": setHeadlineSize("hkrs-headline-4xl"); break;
            case "5xl": setHeadlineSize("hkrs-headline-5xl"); break;
            case "6xl": setHeadlineSize("hkrs-headline-6xl"); break;
            default: setHeadlineSize("hkrs-headline-lg"); break;
        }
    });
    return (
        <h1 className={`hkrs-headline ${headlineSize} ${className || ""}`} id={id}>
            {children || "HeadlineDemo"}
        </h1>
    )
}