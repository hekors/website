import Image from "next/image";
import Link from "next/link";

export default function ErrorPage404() {
    return (
        <div className="404-page page-view text-center"> 
            <Image src="/police.svg" alt="police" width="400" height="400" className="mx-auto" priority />
            <h1 className="leading-snug text-3xl font-semibold text-gray-900">
                {"Don't worry, Only the page is wrong, not the community"}
            </h1>
            <div className="mx-auto w-fit h-auto flex flex-row items-center justify-between gap-6 mt-6">
                <Link href="/">
                    <button className="back-to-home-btn text-gray-600 font-semibold px-5 py-3 rounded-md bg-gray-100 hover:bg-gray-200">{"Go to Home"}</button>
                </Link>
                <Link href="https://discord.gg/7vJN6CvBFG" target="_blank">
                    <button className="back-to-home-btn text-white font-semibold px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-600">{"Join Discord"}</button>
                </Link>
            </div>
        </div>
    )
}