import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui-patterns/Button";

export default function ErrorPage404() {
    return (
        <div className="404-page page-view text-center"> 
            <Image src="/police.svg" alt="police" width="400" height="400" className="mx-auto" priority />
            <h1 className="leading-snug text-3xl font-semibold text-gray-900">
                {"Don't worry, Only the page is wrong, not the community"}
            </h1>
            <div className="mx-auto w-fit h-auto flex flex-row items-center justify-between gap-6 mt-6">
                <Button type={"default"} size={"large"} hasLink={true} link={"/"}>{"Go to Home"}</Button>
                <Button type={"solid"} size={"large"} hasLink={true} link={"https://discord.gg/7vJN6CvBFG"}>
                    {"Join Discord"}
                </Button>
            </div>
        </div>
    )
}