import { useState } from "react";
import { CardSkeleton } from "../ui-patterns/Skeleton";

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
                    <div className="upcoming-sessions-list-wrapper wrapped-view mt-20 flex flex-row items-start justify-start gap-3">
                        {upcomingSessionsData?.length > 0 ? upcomingSessionsData?.map((upcomingSession, upcomingSessionIndex: number) => (
                            <SessionCard key={upcomingSessionIndex} />
                        )) : <div className="flex flex-row items-start justify-start gap-3 w-fit h-auto">
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </div>}
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