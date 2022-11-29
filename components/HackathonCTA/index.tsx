import Image from "next/image";
import Button from "../ui-patterns/Button";

export default function HackathonCTA() {
    return (
        <section className="hackathon-cta-section checks-container">
            <div className="hackathon-cta-section-content-wrapper wrapped-view mt-12 h-auto flex flex-row items-center justify-evenly mb-16">
                <div className="cta-illustration-wrapper">
                    <Image src="/skills-illustration.svg" 
                        width="366" 
                        height="380" 
                        alt="skills-illustration" 
                    />
                </div>
                <div className="cta-section-content-wrapper w-fit">
                    <h1 className="cta-title font-product-bungee text-black text-4xl flex flex-col items-start justify-start w-fit h-fit gap-1">
                        <span className="flex flex-row items-center justify-start gap-2 w-fit h-fit">
                            <span>{"Attend a"}</span>
                            <span className="text-product-purple-light">{"Hackathon"}</span>
                        </span>
                        <span>{"Create a team."}</span>
                        <span>{"Build Projects."}</span>
                        <span>{"Upgrade your portfolio."}</span>
                    </h1>
                    <div className="my-8" />
                    <Button type="secondary" shade="product-purple-light">
                        {"See upcoming Hackathons"}
                    </Button>
                </div>
            </div>
        </section>
    )
}