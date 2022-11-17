import Headline from "../../components/ui-patterns/Headline";

export default function Hackathons() {
    return (
        <div className="events-hackathons">
            <main className="events-header-section page-header-section text-center">
                <Headline size="4xl" className="text-white">
                    {new Date().getFullYear() + "-" + Number(new Date().getFullYear()+1) + " Hackathons"}
                </Headline>
                <p className="mt-3 text-sm font-normal text-white font-sans">
                    {"Get started by applying to hackathons. Get involved, make teams, learn & grow"}
                </p>
            </main>
        </div>
    )
}