import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUpcomingHackathons } from "../../middleware";
import { parseDate } from "../../middleware";
import { HackathonCardType } from "../../types/hackathon-types";
import Button from "../ui-patterns/Button";

export default function UpcomingHackathons() {
    const [upcomingHackathonsData, setUpcomingHackathonsData] = useState([]);

    useEffect(() => {
        (async () => {
            await getUpcomingHackathons().then(dataResponse => {
                console.log("logging from upcoming hackathons component", dataResponse);
                setUpcomingHackathonsData(dataResponse);
            }).catch(err => {
                console.log("Error log from upcoming hackathons component", err);
            })
        }).call({});
    }, []);

    return (
        <section className="upcoming-hackathons-section bg-product-brown py-24 my-12">
            <div className="upcoming-hackathons-content-wrapper wrapped-view flex flex-row items-center justify-between">
                <div>
                    <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase text-white text-opacity-50">{"Events / Hackathons"}</h3>
                    <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-col text-white items-start justify-start w-fit h-fit">
                        {"Upcoming Hackathons"}
                    </h1>
                </div>
                <Button type="secondary" shade="product-orange">{"See past hackathons"}</Button>
            </div>
            <div className="upcoming-hackathons-list-wrapper wrapped-view mt-20">
                {upcomingHackathonsData?.length > 0 ? upcomingHackathonsData?.map((upcomingHackathon: HackathonCardType, upcomingHackathonIndex: number) => (
                    <HackathonCard 
                        hackathonTitle={upcomingHackathon?.hackathonTitle}
                        hackathonOrganizer={upcomingHackathon?.hackathonOrganizer}
                        hackathonStartDate={upcomingHackathon?.hackathonStartDate}
                        hackathonEndDate={upcomingHackathon?.hackathonEndDate}
                        isHackathonOffline={upcomingHackathon?.isHackathonOffline}
                        hackathonLogo={upcomingHackathon?.hackathonLogo}
                        hackathonBG={upcomingHackathon?.hackathonBG}
                        hackathonSlugID={upcomingHackathon?.hackathonSlugID}
                        key={upcomingHackathonIndex}
                    />
                )): <span className="text-base text-white text-opacity-50 select-none cursor-default font-semibold">{"Upcoming Hackathons list loading..."}</span>}
            </div>
        </section>
    )
}


// TODO: Write a better UI Layout for Hackathon Logo

function HackathonCard({
    hackathonTitle, hackathonOrganizer, isHackathonOffline, hackathonStartDate, 
    hackathonEndDate, hackathonBG, hackathonLogo, hackathonSlugID
}: HackathonCardType, props: any) {
    return (
        <Link href="" {...props?.key} {...props}>
            <div className="upcoming-hackathon-card w-[280px] h-[320px] flex flex-col border border-white hover:scale-105 transition-all items-center justify-end" id={`upcoming-hackathon__${hackathonSlugID}`}>
                <div className="upcoming-hackathon-card-cover-image-wrapper h-full w-full" 
                    style={{
                        backgroundImage: `url(${hackathonBG?.logoID})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                <div className="upcoming-hackathon-card-content-wrapper px-4 py-6 bg-white w-full h-fit">
                    <h1 className="leading-tight text-base text-product-brown font-semibold">{hackathonTitle}</h1>
                    <p className="leading-tight text-sm text-gray-500 font-semibold">{"by, " + hackathonOrganizer}</p>
                    <p className="leading-tight font-semibold text-xs mt-6 text-product-brown">
                        {"Starts from " + parseDate(hackathonStartDate)?.date 
                            + " " + parseDate(hackathonStartDate)?.month 
                            + " " + parseDate(hackathonStartDate)?.year}
                    </p>
                    {isHackathonOffline && <p className="font-product-bungee font-normal text-sm uppercase mt-2">{"Offline"}</p>}
                    {!isHackathonOffline && <p className="font-product-bungee font-normal text-sm uppercase mt-2">{"Online"}</p>}
                </div>
            </div>
        </Link>
    )
}