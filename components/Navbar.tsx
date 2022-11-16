import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar py-6 flex flex-row items-center justify-between">
            <Link href="/" className="navbar-logo-wrapper flex flex-row items-center justify-start w-fit h-auto gap-3 cursor-pointer select-none">
                <Image src="/hekors-logo.png" alt="hekors-logo" width="46" height="46" priority />
                <span className="navbar-logo-title-wrapper text-black text-sm flex flex-col items-start justify-center font-semibold tracking-tighter">
                    <span className="navbar-logo-title-HEKORS-text-wrapper uppercase select-none">{"HEKORS"}</span>
                    <span className="navbar-logo-title-COMMUNITY-text-wrapper select-none">{"Community"}</span>
                </span>
            </Link>
            <div className="navbar-options-list-wrapper">
                <ul className="navbar-options-list">
                    
                </ul>
            </div>
        </div>
    )
}