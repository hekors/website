// Basic Imports
import React, { useState } from "react";

// Components Imports
import Button from "@/components/ui-patterns/Button";
import { SessionCardSkeleton } from "@/components/ui-patterns/Skeleton";

const UpcomingSessions: React.FunctionComponent = () => {
  const [upcomingSessionsData, setUpcomingSessionsData] = useState<any>([]);

  return (
    <React.Fragment>
      <section className="upcoming-sesions-section py-24 my-12 max-sm:pt-12 max-sm:pb-0 max-sm:mb-16">
        <div className="upcoming-sessions-content-wrapper wrapped-view flex flex-row items-center justify-between max-sm:flex-col">
          <div>
            <div className="flex flex-row items-center justify-between max-sm:flex-col">
              <div>
                <h3 className="upcoming-sessions-title font-semibold tracking-wider text-sm uppercase text-black text-opacity-50">
                  {"Events / Sessions"}
                </h3>
                <h1 className="upcoming-sessions-headline font-product-bungee mt-4 text-4xl flex flex-col text-product-brown items-start justify-start w-fit h-fit max-sm:items-center max-sm:justify-center max-sm:text-3xl">
                  {"Upcoming Sessions"}
                </h1>
              </div>
              <div className="flex flex-row items-center justify-end gap-6 max-sm:flex-col max-sm:mt-6 max-sm:hidden">
                <Button type="secondary" shade="product-pink">
                  {"All Hackathons"}
                </Button>
                <Button type="secondary" shade="product-teal">
                  {"See past sessions"}
                </Button>
              </div>
            </div>
            <div className="upcoming-sessions-list-wrapper wrapped-view mt-20">
              {upcomingSessionsData?.length > 0 ? (
                upcomingSessionsData?.map(
                  (upcomingSession: any, upcomingSessionIndex: number) => (
                    <SessionCard key={upcomingSessionIndex} />
                  )
                )
              ) : (
                <div className="skeleton-loading-cards-wrapper grid grid-cols-4 items-start justify-start gap-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-12">
                  <SessionCardSkeleton visibility={40} />
                  <SessionCardSkeleton visibility={40} />
                  <SessionCardSkeleton visibility={40} />
                  <SessionCardSkeleton visibility={40} />
                </div>
              )}
              <div className="flex flex-row items-center justify-end gap-6 max-sm:flex-col max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-12">
            <Button type="secondary" shade="product-pink">
              {"All Hackathons"}
            </Button>
            <Button type="secondary" shade="product-teal">
              {"See past hackathons"}
            </Button>
          </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

function SessionCard() {
  return (
    <React.Fragment>
      <div className="session-card">{"Session Card"}</div>
    </React.Fragment>
  );
}

export default UpcomingSessions;
