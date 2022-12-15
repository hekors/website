// Basic Imports
import React, { useState } from "react";

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
          <div className="community-narratives-list-wrapper mt-12">
            {communityNarrativesData?.length > 0 ? (
              communityNarrativesData?.map(
                (communityNarrative: any, communityNarrativeIndex: number) => (
                  <div key={communityNarrativeIndex} />
                )
              )
            ) : (
              <span className="text-base text-product-brown text-opacity-50 select-none cursor-default font-semibold">
                {"Community Narratives loading..."}
              </span>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CommunityNarratives;
