// Basic Imports
import React from "react";
import Link from "next/link";
import type { AppProps } from "next/app";

// Components Imports
import MetaHead from "@/components/MetaHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

// Styles Imports
import "@/styles/globals.css";

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <React.Fragment>
      <MetaHead />
      <AnnouncementBar>
        <div className="announcement-content">
          <span className="text-xs flex flex-row items-center justify-start gap-1">
            {"We're coming up with a series of sessions on Design Engineering"}
            <span>
              Checkout the session{" "}
              <Link
                href="https://www.youtube.com/@hekorscommunity/"
                target="_blank"
                className="underline"
              >
                playlist here
              </Link>
            </span>
          </span>
        </div>
      </AnnouncementBar>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
