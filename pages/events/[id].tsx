// Basic Imports
import React from "react";
import { NextPage } from "next";

// Library Imports
import axios from "axios";

// Components Imports
import { getHackathon } from "../../middleware";
import { baseURL } from "../../middleware";

// Types Imports
import { HackathonCardType } from "@/types/hackathon-types";

const EventDetailsPage: NextPage = () => {
  return (
    <React.Fragment>
      <div className="event-details-page"></div>
    </React.Fragment>
  );
};

export default EventDetailsPage;
