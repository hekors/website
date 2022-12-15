// Basic Imports
import Image from "next/image";
import React, { useState } from "react";
import { CommunityNarrativesCardSkeleton } from "../ui-patterns/Skeleton";

const CommunityNarratives: React.FunctionComponent = () => {
  // TODO
  // change the usetstate type after we are sure about data types
  const [communityNarrativesData, setCommunityNarrativesData] = useState<any>(
    []
  );

  return (
    <React.Fragment>
      <section className="community-narratives-section py-24 my-12 bg-product-yellow">
        <div className="community-narratives-content-wrapper wrapped-view">
          <h3 className="community-narratives-title tracking-wider uppercase text-product-brown text-opacity-60 font-semibold">
            {"Community Narratives"}
          </h3>
          <h1 className="community-narratives-headline font-product-bungee text-product-brown text-4xl mt-2">
            {"listen from the community"}
          </h1>
          <div className="community-narratives-list-wrapper mt-12 h-auto flex flex-row items-center justify-between">
            <div className="grid grid-cols-2 items-start justify-start gap-8 w-fit h-auto">
            {communityNarrativesData?.length > 0 ? (
              communityNarrativesData?.map(
                (communityNarrative: any, communityNarrativeIndex: number) => (
                  <div key={communityNarrativeIndex} />
                )
              )
            ) : (
              <React.Fragment>
                <CommunityNarrativesCardSkeleton />
                <CommunityNarrativesCardSkeleton />
                <CommunityNarrativesCardSkeleton />
                <CommunityNarrativesCardSkeleton />
              </React.Fragment>
            )}
            </div>
            <div className="community-narratives-illustration-wrapper">
              <Image src="/community-narratives-illustration.svg"
                width="366"
                height="380"
                alt="community-narrartives-illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CommunityNarratives;
