// Basic Imports
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import EmojiLayer from "@/components/EmojiLayer";
import GetStarted from "@/components/GetStarted";
import HackathonCTA from "@/components/HackathonCTA";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Team from "@/components/Team";
import Button from "@/components/ui-patterns/Button";
import MetaHead from "@/components/MetaHead";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaHead title="HEKORS Community" description="Learn in public, Build in public" />
      <div className="home">
        <main className="checks-container">
          <div className="hero-section-wrapper w-fit h-auto mx-auto flex flex-col items-center justify-between mb-16">
            <Callout>{"Our Mission"}</Callout>
            <h1 className="font-product-bungee text-7xl mt-6 flex flex-col items-center justify-between gap-4">
              <span>{"Learn in public."}</span>
              <span>{"Build in public."}</span>
            </h1>
            <Link
              href="https://discord.gg/DF5yRVb4vP"
              className="mt-12"
              target="_blank"
            >
              <Button shade="product-purple-light">{"Join Discord"}</Button>
            </Link>
          </div>
          <EmojiLayer />
        </main>
        <GetStarted />
        <OrganizeWithUs />
        <Team />
        <HackathonCTA />
        {/* REMOVING COMMUNITY NARRATIVES SECTION UNTIL FURTHER UPDATES */}
        {/* <CommunityNarratives /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
