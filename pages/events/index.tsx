// Basic Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Button from "@/components/ui-patterns/Button";
import UpcomingHackathons from "@/components/UpcomingHackathons";
import UpcomingSessions from "@/components/UpcomingSessions";
import MetaHead from "@/components/MetaHead";

const Events: NextPage = () => {
  return (
    <React.Fragment>
      <MetaHead title={`${new Date().getFullYear()} Season`} description="Hackathons, Sessions & Events" />
      <div className="events">
        <div className="checks-container">
          <div className="wrapped-view flex flex-row items-center justify-evenly max-sm:flex-col">
            <div className="hero-section-wrapper w-fit h-auto flex flex-col items-start justify-between mb-16 max-sm:items-center">
              <Callout className="small-callout max-sm:flex max-sm:flex-row max-sm:justify-evenly max-sm:w-[60%]">
                {"Attend Hackathons, Offline Meetups and much more"}
              </Callout>
              <h1 className="font-product-bungee text-5xl mt-6 flex flex-col items-start justify-between gap-4 max-sm:items-center max-sm:text-4xl max-sm:gap-1 max-sm:mt-10 " >
                <span>{"Events in season"}</span>
                <span>
                  {new Date().getFullYear() +
                    "-" +
                    Number(new Date().getFullYear() + 1)}
                </span>
              </h1>
              <Link href="/events/past-events" className="mt-12">
                <Button shade="product-teal">{"See Past Events"}</Button>
              </Link>
            </div>
            <div className="illustration-wrapper">
              <Image
                className="w-[300px]"
                src="/skills-illustration.svg"
                width="366"
                height="380"
                alt="skills-illustration"
              />
            </div>
          </div>
        </div>
        <div className="upcoming-hackathons-section-wrapper">
          <UpcomingSessions />
          <UpcomingHackathons />
          <OrganizeWithUs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
