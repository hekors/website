import axios from "axios";
import { TeamMemberCardType } from "../types/team-type";
import { baseURL, mediaURL } from "./utils";

async function getTeamData() {
  let teamDataResponse: any = [];

  await axios.get(baseURL + "/api/teams").then((teamResponse: any) => {
    teamResponse?.data?.data?.map(async (response: any) => {
      const responseAttribute: any = response?.attributes;
      const _teamMemberData: TeamMemberCardType = {
        picture: mediaURL(responseAttribute?.uploadFileName),
        fullName: {
          firstName: responseAttribute?.firstName,
          lastName: responseAttribute?.lastName,
        },
        isAvenger: responseAttribute?.isAvenger,
        directWebsite: {
          label: responseAttribute?.directWebsiteLabel,
          link: responseAttribute?.directWebsiteLink,
        },
        socialProfile: {
          twitterUsername: responseAttribute?.twitterUsername,
          instagramUsername: responseAttribute?.instagramUsername,
          linkedInUsername: responseAttribute?.linkedInUsername,
          githubUsername: responseAttribute?.githubUsername,
        },
        description: responseAttribute?.description,
      };
      teamDataResponse?.push(await _teamMemberData);
    });
  });

  return teamDataResponse;
}

export { getTeamData };
