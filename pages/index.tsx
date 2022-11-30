import Link from "next/link";
import Callout from "../components/Callout";
import EmojiLayer from "../components/EmojiLayer";
import GetStarted from "../components/GetStarted";
import HackathonCTA from "../components/HackathonCTA";
import OrganizeWithUs from "../components/OrganizeWithUs";
import Team from "../components/Team";
import Button from "../components/ui-patterns/Button";

export default function Home() {
  return (
    <div className="home">
      <div className="checks-container">
        <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
          <Callout>{"Our Mission"}</Callout>
          <h1 className="font-product-bungee text-7xl mt-6 flex flex-col items-center justify-between gap-4">
            <span>{"Learn in public."}</span>
            <span>{"Build in public."}</span>
          </h1>
          <Link href="https://discord.gg/DF5yRVb4vP" className="mt-12" target="_blank">
            <Button shade="product-purple-light">
              {"Join Discord"}
            </Button>
          </Link>
        </div>
        <EmojiLayer />
      </div>
      <GetStarted />
      <OrganizeWithUs />
      <Team />
      <HackathonCTA />
    </div>
  )
}
