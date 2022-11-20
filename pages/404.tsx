import Image from "next/image";

export default function ErrorPage404() {
    return (
        <div className="404-page page-view text-center"> 
            <Image src="/police.svg" alt="police" width="400" height="400" className="mx-auto" priority />
            <h1 className="leading-snug text-3xl font-semibold text-gray-900">
                {"Don't worry, Only the page is wrong, not the community"}
            </h1>
        </div>
    )
}