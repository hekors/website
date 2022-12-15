type HackathonCardType = {
  hackathonTitle?: string;
  hackathonOrganizer?: string;
  isHackathonOffline?: boolean;
  isHackathonCompleted?: boolean;
  hackathonLogo?: {
    file?: ImageData;
    logoID?: string;
  };
  hackathonBG?: {
    file?: ImageData;
    logoID?: string;
  };
  hackathonStartDate?: string;
  hackathonEndDate?: string;
  hackathonSlugID?: string;
};

type HackathonDetailsType = {
  hackathonTitle?: string;
  hackathonOrganizer?: string;
  isHackathonOffline?: boolean;
  isHackathonCompleted?: boolean;
  hackathonLogo?: {
    file?: ImageData;
    logoID?: string;
  };
  hackathonBG?: {
    file?: ImageData;
    logoID?: string;
  };
  hackathonContentImages?: {
    files?: ImageData[];
    imageIDList?: string[];
  };
  hackathonStartDate?: string;
  hackathonEndDate?: string;
  hackathonStartTime?: string;
  hackathonEndTime?: string;
  hackathonDescription?: string;
  hackathonSlugID?: string;
};

export type { HackathonCardType, HackathonDetailsType };
