import { FooterOptionType, SocialLinkType } from "../../types/footer-option-type";
import { AiOutlineTwitter } from 'react-icons/ai';

const communityLinks: FooterOptionType[] = [
    { title: "Contact Us", link: "https://github.com/hekors" },
    { title: "Organize with HEKORS", link: "https://github.com/hekors/.github" },
    { title: "Community Guidelines", link: "https://github.com/hekors/.github/blob/master/CODE_OF_CONDUCT.md" },
    { title: "Join Team", link: "https://github.com/hekors/.github/tree/master/profile" }
];

const directLinks: FooterOptionType[] = [
    { title: "Hackathons", path: "" },
    { title: "Open Source", path: "https://github.com/hekors/.github/blob/master/open-source/README.md" },
    { title: "MLH.io", link: "https://mlh.io" },
    { title: "Offline Meetups", path: "" },
    { title: "Avengers at HEKORS", path: "/avengers" }
];

const socialLinks: SocialLinkType[] = [
    { iconPath: "discord-icon.svg", label: "discord", link: "https://discord.gg/eqYJgB8A57" },
    { iconPath: "twitter-icon.svg", label: "twitter", link: "https://twitter.com/hekorscommunity" },
    { iconPath: "bmac-icon.svg", label: "buy-me-a-coffee", link: "https://www.buymeacoffee.com/wh0sumit" },
    { iconPath: "whatsapp-icon.svg", label: "whatsapp", link: "https://chat.whatsapp.com/GjIdIUYccWd1J6kWDEtxTB" },
    { iconPath: "notion-icon.svg", label: "notion", link: "https://www.notion.so/yashsehgal/HEKORS-Community-Updates-dd27307cb56d4e0d87efad9983e3329c" },
    { iconPath: "luma-icon.svg", label: "luma", link: "https://lu.ma/hekors" }
];

export { communityLinks, directLinks, socialLinks };