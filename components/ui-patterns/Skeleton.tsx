import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CardSkeletonType } from '../../types/ui-pattern-types/skeleton-types';

function CardSkeleton({ visibility }: CardSkeletonType) {
    return (
        <Skeleton 
            width="280px"
            height="320px"
            style={{
                opacity: visibility
            }}
        />
    )
}

export { CardSkeleton };