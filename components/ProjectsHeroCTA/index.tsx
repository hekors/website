// Basic Imports
import React from "react";
import Image from "next/image";

// Components Imports
import Callout from "@/components/ui-patterns/Callout";
import OrganizeWithUs from "@/components/OrganizeWithUs";
import Button from "@/components/ui-patterns/Button";
import BestProjects from "@/components/BestProjects";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import MetaHead from "@/components/MetaHead";
import projectsData from "@/components/ProjectsHeroCTA/projectData.json";

const ProjectsHeroCTA: React.FC = () => {
  // Destructure the data from the projectsData object
  const {
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    heading,
    subheading,
  } = projectsData;

  return (
    <React.Fragment>
      <div className="projects">
        <div className="checks-container">
          {/* Hero Section */}
          <div className="wrapped-view flex flex-row items-center justify-between max-sm:flex-col">
            <div className="hero-section-wrapper w-fit h-auto flex flex-col items-start justify-between pl-12 mb-12 max-sm:items-center max-sm:pl-0 max-sm:mb-8">
              {/* Callout */}
              <Callout className="small-callout max-sm:flex max-sm:flex-row max-sm:justify-evenly max-sm:w-[70%] max-sm:gap-0 max-sm:h-auto">
                {"Show Us Your Projects "}
              </Callout>

              {/* Main Heading */}
              {heading && (
                <h1 className="font-product-bungee text-5xl mt-4 leading-tight flex flex-col items-start justify-between max-sm:items-center max-sm:text-3xl max-sm:gap-1 max-sm:mt-6 ">
                  <span className="w-[16ch] max-sm:text-center">
                    {heading}
                    <Image
                      className="w-[50] inline-block pl-2 mb-3"
                      src="/emojis/star-eyes-emoji.svg"
                      width="50"
                      height="50"
                      alt="star-eyes-emoji"
                    />
                  </span>
                </h1>
              )}

              {/* Subheading */}
              {subheading && (
                <h2 className="font-product-bungee text-2xl mt-4 leading-tight flex flex-col items-start justify-between w-[28ch] max-sm:text-center max-sm:items-center max-sm:text-3xl max-sm:gap-1 max-sm:mt-6">
                  {subheading}
                </h2>
              )}

              {/* CTA Buttons */}
              <div className="cta-buttons-layer-wrapper mt-8 flex flex-row justify-center gap-8 w-fit h-auto max-sm:flex-col max-sm:mt-8">
                <a href={primaryButtonLink}>
                  <Button type="primary" shade="product-orange">
                    {primaryButtonText}
                  </Button>
                </a>
                {secondaryButtonText && secondaryButtonLink && (
                  <a href={secondaryButtonLink} target="_blank" rel="noreferrer">
                    <Button type="secondary" shade="product-purple-light">
                      {secondaryButtonText}
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Illustration */}
            <div className="illustration-wrapper">
              <Image
                className="w-[448px] max-sm:w-[280px] max-sm:pl-4"
                src="/project-illustration.svg"
                width="448"
                height="448"
                alt="project-illustration"
              />
            </div>
          </div>
        </div>

        {/* Other sections */}
        <div className="upcoming-hackathons-section-wrapper">
          <BestProjects />
          <FeaturedProjects />
          <AllProjects />
          <OrganizeWithUs />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectsHeroCTA;
