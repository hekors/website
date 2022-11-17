import Button from "../components/ui-patterns/Button";
import Headline from "../components/ui-patterns/Headline";

export default function Home() {
  return (
    <div className="home">
      <main className="home-hero-section py-32 bg-blue-600 pl-32">
        <Headline size={"5xl"} className="font-extrabold w-[24ch] text-white leading-tight">
          {"Advocating Hackathons, Open Source & Engineering for people"}
        </Headline>
        <p className="leading-snug mt-4 text-indigo-200 font-semibold text-base font-sanse">
          {"Building a space for Engineers, Designers, Future Builders and Learners"}
        </p>
        <div className="mt-6 flex flex-row items-center justify-start gap-4">
          <Button size={"large"} type={"solid"} className="bg-gray-800 hover:bg-gray-700"
            hasLink={true} link={"/events"}
          >
              {"🗓️ See Events"}
          </Button>
          <Button size={"large"} type={"default"} hasLink={true} link={"/community-narratives"}>
            {"📣 Community Narratives"}
          </Button>
        </div>
      </main>
    </div>
  )
}