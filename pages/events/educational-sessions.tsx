import Headline from "../../components/ui-patterns/Headline";

export default function EducationalSessions() {
    return (
        <div className="events-education-sessions">
            <main className="events-header-section page-header-section text-center">
                <Headline size="4xl" className="text-white">
                    {new Date().getFullYear() + "-" + Number(new Date().getFullYear()+1) + " Educational Session Series"}
                </Headline>
                <p className="mt-3 text-sm font-normal text-white font-sans">
                    {"Learn real-world engineering skills, design and soft-skills within the community"}
                </p>
            </main>
        </div>
    )
}