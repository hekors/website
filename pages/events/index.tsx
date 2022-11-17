import Headline from "../../components/ui-patterns/Headline";

export default function Events() {
    return (
        <div className="events">
            <main className="events-header-section page-header-section text-center">
                <Headline size="4xl" className="text-white">
                    {new Date().getFullYear() + "-" + Number(new Date().getFullYear()+1) + " Events"}
                </Headline>
                <p className="mt-3 text-sm font-normal text-white font-sans">
                    {"Find upcoming events, hackathons, open source programs and meetups"}
                </p>
            </main>
        </div>
    )
}