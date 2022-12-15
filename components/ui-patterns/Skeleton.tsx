import { SkeletonType } from '@/types/ui-pattern-types/skeleton-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
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

export {
    HackathonCardSkeleton,
    SessionCardSkeleton
}