// Basic Imports
import { useState } from "react";

export default function UpcomingSessions() {
    const [upcomingSessionsData, setUpcomingSessionsData] = useState([]);

    return (
        <section className="upcoming-sesions-section py-24 my-12">
            <div className="upcoming-sessions-content-wrapper wrapped-view flex flex-row items-center justify-between">
                <div>
                    <h3 className="upcoming-sessions-title font-semibold tracking-wider text-sm uppercase text-black text-opacity-50">
                        {"Events / Sessions"}
                    </h3>
                    <h1 className="upcoming-sessions-headline font-product-bungee mt-4 text-4xl flex flex-col text-product-brown items-start justify-start w-fit h-fit">
                        {"Upcoming Sessions"}
                    </h1>
                    <div className="upcoming-sessions-list-wrapper wrapped-view mt-20">
                        {upcomingSessionsData?.length > 0 ? upcomingSessionsData?.map((upcomingSession, upcomingSessionIndex: number) => (
                            <SessionCard key={upcomingSessionIndex} />
                        )) : <span className="text-base text-black text-opacity-50 select-none cursor-default font-semibold">{"Upcoming Sessions list loading..."}</span>}
                    </div>
                </div>
            </div>
        </section>
    )
}

function SessionCard() {
    return (
        <div className="session-card">
            {"Session Card"}
        </div>
    )
}