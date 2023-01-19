// Basic Imports
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Components Imports
import { getUpcomingHackathons } from "@/middleware/hackathons-api";
import { parseDate } from "@/common/utils";
import Button from "@/components/ui-patterns/Button";

// Types Imports
import { HackathonCardType } from "@/types/hackathon-types";
import { HackathonCardSkeleton } from "@/components/ui-patterns/Skeleton";

const UpcomingHackathons: React.FunctionComponent<HackathonCardType> = () => {
  const [upcomingHackathonsData, setUpcomingHackathonsData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await getUpcomingHackathons()
        .then((dataResponse) => {
          console.log(
            "logging from upcoming hackathons component",
            dataResponse
          );
          setUpcomingHackathonsData(dataResponse);
        })
        .catch((err) => {
          console.log("Error log from upcoming hackathons component", err);
        });
    }).call({});
  }, []);

  return (
    <React.Fragment>
      <section className="upcoming-hackathons-section bg-product-brown py-24 my-12 max-sm:pt-12 max-sm:mt-8 ">
        <div className="upcoming-hackathons-content-wrapper wrapped-view flex flex-row items-center justify-between max-sm:flex-col">
          <div>
            <h3 className="upcoming-hackathons-title font-semibold tracking-wider text-sm uppercase text-white text-opacity-50">
              {"Events / Hackathons"}
            </h3>
            <h1 className="upcoming-hackathons-headline font-product-bungee mt-4 text-4xl flex flex-col text-white items-start justify-start w-fit h-fit max-sm:items-center max-sm:justify-center max-sm:text-product-xl">
              {"Upcoming Hackathons"}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-end gap-6 max-sm:flex-col max-sm:mt-6 max-sm:hidden">
            <Button type="secondary" shade="product-pink">
              {"All Hackathons"}
            </Button>
            <Button type="secondary" shade="product-teal">
              {"See past hackathons"}
            </Button>
          </div>
        </div>
        <div className="upcoming-hackathons-list-wrapper wrapped-view mt-20">
          {upcomingHackathonsData?.length > 0 ? (
            upcomingHackathonsData?.map(
              (
                upcomingHackathon: HackathonCardType,
                upcomingHackathonIndex: number
              ) => (
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
              )
            )
          ) : (
              <div className="skeleton-loading-cards-wrapper grid grid-cols-4 items-start justify-start gap-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-12 ">
                <HackathonCardSkeleton />
                <HackathonCardSkeleton />
                <HackathonCardSkeleton />
                <HackathonCardSkeleton />
              </div>
          )}
          <div className="flex flex-row items-center justify-end gap-6 hidden max-sm:flex-col max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-12">
            <Button type="secondary" shade="product-pink">
              {"All Hackathons"}
            </Button>
            <Button type="secondary" shade="product-teal">
              {"See past hackathons"}
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// TODO: Write a better UI Layout for Hackathon Logo

function HackathonCard(
  {
    hackathonTitle,
    hackathonOrganizer,
    isHackathonOffline,
    hackathonStartDate,
    hackathonEndDate,
    hackathonBG,
    hackathonLogo,
    hackathonSlugID,
  }: HackathonCardType,
  props: any
) {
  return (
    <React.Fragment>
      <Link href="" {...props?.key} {...props}>
        <div
          className="hackathon-card w-[280px] h-[320px] flex flex-col border border-white hover:scale-105 transition-all items-center justify-end"
          id={`upcoming-hackathon__${hackathonSlugID}`}
        >
          <div
            className="upcoming-hackathon-card-cover-image-wrapper h-full w-full"
            style={{
              backgroundImage: `url(${hackathonBG?.logoID})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="upcoming-hackathon-card-content-wrapper px-4 py-6 bg-white w-full h-fit">
            <h1 className="leading-tight text-base text-product-brown font-semibold">
              {hackathonTitle}
            </h1>
            <p className="leading-tight text-sm text-gray-500 font-semibold">
              {"by, " + hackathonOrganizer}
            </p>
            <p className="leading-tight font-semibold text-xs mt-6 text-product-brown">
              {"Starts from " +
                parseDate(hackathonStartDate)?.date +
                " " +
                parseDate(hackathonStartDate)?.month +
                " " +
                parseDate(hackathonStartDate)?.year}
            </p>
            {isHackathonOffline && (
              <p className="font-product-bungee font-normal text-sm uppercase mt-2">
                {"Offline"}
              </p>
            )}
            {!isHackathonOffline && (
              <p className="font-product-bungee font-normal text-sm uppercase mt-2">
                {"Online"}
              </p>
            )}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default UpcomingHackathons;
