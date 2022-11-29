
type TeamMemberCardType = {
    picture?: string | any,
    fullName?: any | {
        firstName?: string | any,
        lastName?: string | any
    },
    isAvenger?: boolean,
    directWebsite?: {
        label?: string | any,
        link?: string | any
    } | any,
    socialProfile?: {
        twitterUsername?: string | any,
        instagramUsername?: string | any,
        linkedInUsername?: string | any,
        githubUsername?: string | any
    } | any,
    description?: string | any
};

export type { TeamMemberCardType };