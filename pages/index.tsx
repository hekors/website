import Link from "next/link";
import Callout from "../components/Callout";
import EmojiLayer from "../components/EmojiLayer";
import Button from "../components/ui-patterns/Button";

export default function Home() {
  return (
    <div className="home checks-container">
      <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
        <Callout>{"Our Mission"}</Callout>
        <h1 className="font-product-bungee text-7xl mt-6 flex flex-col items-center justify-between gap-4">
          <span>{"Learn in public."}</span>
          <span>{"Build in public."}</span>
        </h1>
        <Link href="" className="mt-12">
          <Button shade="product-purple-light">
            {"Join Discord"}
          </Button>
        </Link>
      </div>
      <EmojiLayer />
    </div>
  )
}
