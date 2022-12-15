// Library Imports
import axios from "axios";

// Components Imports
import { HackathonCardType } from "@/types/hackathon-types";
import { baseURL, mediaURL } from "@/common/utils";

async function getAllHackathons() {
  let allHackathonsResponse: any = [];

  await axios
    .get(baseURL + "/api/hackathons")
    .then((hackathonResponse: any) => {
      hackathonResponse?.data?.data
        ?.map(async (response: any) => {
          const responseAttribute: any = response?.attributes;
          const _hackathonData: HackathonCardType = {
            hackathonTitle: responseAttribute?.hackathonTitle,
            hackathonOrganizer: responseAttribute?.hackathonOrganizer,
            isHackathonOffline: responseAttribute?.isHackathonOffline,
            isHackathonCompleted: responseAttribute?.isHackathonCompleted,
            hackathonLogo: {
              file: responseAttribute?.hackathonLogo,
              logoID: mediaURL(responseAttribute?.hackathonLogoID),
            },
            hackathonBG: {
              file: responseAttribute?.hackathonBG,
              logoID: mediaURL(responseAttribute?.hackathonBGID),
            },
            hackathonStartDate: responseAttribute?.hackathonStartDate,
            hackathonEndDate: responseAttribute?.hackathonEndDate,
            hackathonSlugID: responseAttribute?.hackathonSlugID,
          };
          hackathonResponse = [await _hackathonData, ...hackathonResponse];
        })
        .catch((err: any) => {
          throw new Error(err);
        })
        .finally(() => {
          // do something
        });
    });

  return allHackathonsResponse;
}

async function getHackathon(_hackathonID: string) {
  await axios
    .get(baseURL + "/api/hackathons/" + _hackathonID)
    .then((hackathonResponse: any) => {
      // write code for hackathon-id content here
    });
}

async function getPastHackathons() {
  let allHackathonsResponse: any = [];
  let pastHackathonsResponse: any = [];

  await axios
    .get(baseURL + "/api/hackathons")
    .then((hackathonResponse: any) => {
      hackathonResponse?.data?.data?.map(async (response: any) => {
        const responseAttribute: any = response?.attributes;
        const _hackathonData: HackathonCardType = {
          hackathonTitle: responseAttribute?.hackathonTitle,
          hackathonOrganizer: responseAttribute?.hackathonOrganizer,
          isHackathonOffline: responseAttribute?.isHackathonOffline,
          isHackathonCompleted: responseAttribute?.isHackathonCompleted,
          hackathonLogo: {
            file: responseAttribute?.hackathonLogo,
            logoID: mediaURL(responseAttribute?.hackathonLogoID),
          },
          hackathonBG: {
            file: responseAttribute?.hackathonBG,
            logoID: mediaURL(responseAttribute?.hackathonBGID),
          },
          hackathonStartDate: responseAttribute?.hackathonStartDate,
          hackathonEndDate: responseAttribute?.hackathonEndDate,
          hackathonSlugID: responseAttribute?.hackathonSlugID,
        };
        hackathonResponse = [await _hackathonData, ...hackathonResponse];
      });
    });

  allHackathonsResponse?.map((hackathon: HackathonCardType) => {
    if (hackathon?.isHackathonCompleted) {
      pastHackathonsResponse = [hackathon, ...pastHackathonsResponse];
    }
  });

  return pastHackathonsResponse;
}

async function getUpcomingHackathons() {
  let allHackathonsResponse: any = [];
  let upcomingHackathonsResponse: any = [];

  await axios
    .get(baseURL + "/api/hackathons")
    .then((hackathonResponse: any) => {
      console.log("data for hackathons", hackathonResponse);
      hackathonResponse?.data?.data?.map(async (response: any) => {
        const responseAttribute: any = response?.attributes;
        const _hackathonData: HackathonCardType = {
          hackathonTitle: responseAttribute?.hackathonTitle,
          hackathonOrganizer: responseAttribute?.hackathonOrganizer,
          isHackathonOffline: responseAttribute?.isHackathonOffline,
          isHackathonCompleted: responseAttribute?.isHackathonCompleted,
          hackathonLogo: {
            file: responseAttribute?.hackathonLogo,
            logoID: mediaURL(responseAttribute?.hackathonLogoID),
          },
          hackathonBG: {
            file: responseAttribute?.hackathonBG,
            logoID: mediaURL(responseAttribute?.hackathonBGID),
          },
          hackathonStartDate: responseAttribute?.hackathonStartDate,
          hackathonEndDate: responseAttribute?.hackathonEndDate,
          hackathonSlugID: responseAttribute?.hackathonSlugID,
        };
        allHackathonsResponse = [
          await _hackathonData,
          ...allHackathonsResponse,
        ];
      });
    });

  allHackathonsResponse?.map((hackathon: HackathonCardType) => {
    if (!hackathon?.isHackathonCompleted) {
      upcomingHackathonsResponse = [hackathon, ...upcomingHackathonsResponse];
    }
  });

  return upcomingHackathonsResponse;
}

export {
  getAllHackathons,
  getHackathon,
  getPastHackathons,
  getUpcomingHackathons,
};
