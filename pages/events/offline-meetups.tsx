import Headline from "../../components/ui-patterns/Headline";

export default function OfflineMeetups() {
    return (
        <div className="events-offline-meetups">
            <main className="events-header-section page-header-section text-center">
                <Headline size="4xl" className="text-white">
                    {new Date().getFullYear() + "-" + Number(new Date().getFullYear()+1) + " Offline Meetups"}
                </Headline>
                <p className="mt-3 text-sm font-normal text-white font-sans">
                    {"Get in touch with all offline meetups and events"}
                </p>
            </main>
        </div>
    )
}