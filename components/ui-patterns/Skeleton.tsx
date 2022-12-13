import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CardSkeletonType } from '../../types/ui-pattern-types/skeleton-types';

function CardSkeleton({ visibility }: CardSkeletonType) {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <span>
                <Skeleton height={320} width={280} style={{ opacity: visibility }} />
                <Skeleton className="mt-4" height={20} width={280} style={{ opacity: visibility }} />
            </span>
        </SkeletonTheme>
    )
}

export { CardSkeleton };