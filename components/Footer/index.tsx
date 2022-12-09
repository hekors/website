import Image from "next/image";
import Link from "next/link";
import { FooterOptionType, SocialLinkType } from "../../types/footer-option-type";
import Button from "../ui-patterns/Button";
import { communityLinks, socialLinks } from './footer-data';

export default function Footer() {
    return (
        <section className="footer-section my-24 py-12">
            <div className="footer-content-wrapper wrapped-view border-b pb-6">
                <div className="logo-wrapper flex flex-row items-start justify-start w-fit h-auto gap-3">
                    <Image src="/hekors-logo.svg" alt="hekors" width="60" height="60" />
                    <span className="hekors-title-tagline-wrapper flex flex-col items-start justify-start w-fit h-auto">
                        <span className="hekors-title font-product-bungee text-product-brown text-3xl">{"hekors"}</span>
                        <span className="hekors-tagline font-product-manrope text-product-brown text-sm font-semibold w-[24ch]">
                            {"Advocating Open Source, Hackathons and Engineering"}
                        </span>
                    </span>
                </div>
                <div className="footer-links-content-wrapper mt-20 flex flex-row items-start justify-between">
                    <div className="discord-cta-container">
                        <h2 className="font-semibold font-product-bungee text-2xl w-[280px] mb-6">
                            <span className="text-product-brown">{"make sure you join the"}</span>
                            <span className="text-product-purple-dark">{" discord"}</span>
                        </h2>
                        <Button type="secondary" shade="product-purple-light">
                            {"Join Discord"}
                        </Button>
                    </div>
                    <div className="footer-links-sections-wrapper">
                        <div className="flex flex-row items-start justify-end gap-12">
                        <div className="footer-links__community-links-wrapper">
                                <h2 className="leading-snug font-product-bungee text-lg text-product-red">{"Community"}</h2>
                                <ul className="footer-options-list flex flex-col items-start justify-start gap-1 mt-3">
                                    {communityLinks?.map((footerOption: FooterOptionType, footerOptionIndex: number) => (
                                        <li className="footer-option-list-item list-none text-sm text-black text-opacity-60 hover:text-opacity-80" key={footerOptionIndex}>
                                            {footerOption?.link && <Link href={footerOption?.link} target="_blank">
                                                    <span className="list-item-title-wrapper">{footerOption?.title}</span></Link>}
                                            {footerOption?.path && <Link href={footerOption?.path}>
                                                <span className="list-item-wrapper">{footerOption?.title}</span></Link>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="social-links-layer-wrapper mt-24 flex flex-row items-center justify-end gap-2">
                            {socialLinks?.map((socialLink: SocialLinkType, socialLinkIndex: number) => (
                                <Link href={socialLink?.link || ""} target="_blank" key={socialLinkIndex}>
                                    <span className="social-link-icon-wrapper">
                                        <Image src={`/social/${socialLink?.iconPath}`} alt={socialLink?.label || "icon"} title={socialLink?.label} 
                                            className="scale-100 hover:scale-105 transition-all" 
                                            width="42" height="42" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-center text-sm text-gray-400 cursor-default select-none">
                    &copy; {"HEKORS Community " + new Date().getFullYear() + "-" + Number(new Date().getFullYear() + 1)}
                </p>
            </div>
        </section>
    )
}