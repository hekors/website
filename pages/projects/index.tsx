// Basic Imports
import React from "react";

// Components Imports
import OrganizeWithUs from "@/components/OrganizeWithUs";
import BestProjects from "@/components/BestProjects";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import MetaHead from "@/components/MetaHead";
import ProjectsHeroCTA from "@/components/ProjectsHeroCTA";
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <React.Fragment>
      {/* Added Meta tags */}
      <MetaHead
        title={`${new Date().getFullYear()} Season`}
        description="Projects Showcase By Community"
      />
      {/* Hero Section */}
      <ProjectsHeroCTA />
      {/* Other sections */}
      <BestProjects />
      <FeaturedProjects />
      <AllProjects />
      <OrganizeWithUs />
    </React.Fragment>
  );
};

export default Projects;
