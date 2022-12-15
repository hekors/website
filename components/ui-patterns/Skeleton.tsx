import { SkeletonType } from '@/types/ui-pattern-types/skeleton-types';
import React, { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HackathonCardSkeleton: React.FunctionComponent<SkeletonType> = ({
    visibility
}) => {
    return (
        <React.Fragment>
            <div
                className="hackathon-card-skeleton w-[280px] h-[320px] flex flex-col border border-white hover:scale-105 transition-all items-center justify-end">
                <div className="upcoming-hackathon-card-skeleton-cover-image-wrapper h-full w-full"/>
                <div className="upcoming-hackathon-card-skeleton-content-wrapper px-4 py-6 bg-white w-full h-fit">
                    <Skeleton height={12} count={1} style={{ opacity: `${visibility}%` }} />
                    <Skeleton height={8} count={2} style={{ opacity: `${visibility}%` }} />
                    <Skeleton height={12} width={100} className="mt-4" count={1} style={{ opacity: `${visibility}%` }} />
                </div>
            </div>
        </React.Fragment>
    )
}

const SessionCardSkeleton: React.FunctionComponent<SkeletonType> = ({
    visibility
}) => {
    return (
        <React.Fragment>
            <div
                className="session-card-skeleton w-[280px] h-[320px] flex flex-col border border-product-brown hover:scale-105 transition-all items-center justify-end">
                <div className="session-card-skeleton-cover-image-wrapper h-full w-full border-b border-product-brown"/>
                <div className="session-card-skeleton-content-wrapper px-4 py-6 bg-white w-full h-fit">
                    <Skeleton height={12} count={1} style={{ opacity: `${visibility}%` }} />
                    <Skeleton height={8} count={2} style={{ opacity: `${visibility}%` }} />
                    <Skeleton height={12} width={100} className="mt-4" count={1} style={{ opacity: `${visibility}%` }} />
                </div>
            </div>
        </React.Fragment>
    )
}

const CommunityNarrativesCardSkeleton: React.FunctionComponent<SkeletonType> = ({
    visibility
}) => {
    return (
        <React.Fragment>
            <div className="community-narratives-skeleton-card bg-white rounded-md w-fit h-auto px-3 py-5">
                <div className="community-narratives-skeleton-card-content-wrapper w-[280px] pr-16">
                    <Skeleton height={16} />
                    <div className="mt-3 grid grid-cols-1 gap-0.5">
                        <Skeleton height={8} width="70%" />
                        <Skeleton height={8} width="70%" />
                    </div>
                    <Skeleton height={32} width={32} className="mt-2" circle />
                </div>
            </div>
        </React.Fragment>
    )
}

export {
    HackathonCardSkeleton,
    SessionCardSkeleton,
    CommunityNarrativesCardSkeleton
}