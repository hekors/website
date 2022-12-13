// Basic Imports
import Link from "next/link";

// Components Imports
import Callout from "@/common/components/Callout";
import Button from "@/common/components/ui-patterns/Button";

export default function OrganizeWithUs() {
    return (
        <section className="organize-with-us-section checks-container">
            <div className="organize-with-us__cta-content-wrapper mt-12 w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
                <Callout>{"Collaborate with us"}</Callout>
                <h1 className="font-product-bungee text-6xl flex flex-col items-center justify-start gap-4 mt-6">
                    <span>{"Organize an event"}</span>
                    <span>{"with hekors"}</span>
                </h1>
                <div className="cta-buttons-layer-wrapper mt-12 flex flex-row items-center justify-center gap-8 w-fit h-auto">
                    <Button type="primary" shade="product-red">{"Reach us out"}</Button>
                    <Link href="https://twitter.com/hekorscommunity" target="_blank" rel="noreferrer">
                        <Button type="secondary" shade="product-blue">{"Follow us on Twitter"}</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}