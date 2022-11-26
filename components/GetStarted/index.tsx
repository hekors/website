import { useRef } from 'react';
import GetStartedData from './get-started-data.json';

type GetStartedItemType = {
    title?: string,
    bgColor?: string,
    description?: any
};

export default function GetStarted() {
    const getStartedRef = useRef(GetStartedData);

    return (
        <section className="get-started-section bg-product-brown py-24 my-32">
            <div className="get-started-content-wrapper wrapped-view">
                <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase text-white text-opacity-50">{"Get Started"}</h3>
                <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-col items-start justify-start w-fit h-fit">
                    <span className="text-white">{"A space to learn, build & grow"}</span>
                    <span className="text-product-red">{"together."}</span>
                </h1>

                <div className="get-started-items-carousel-wrapper mt-12 flex flex-row items-start justify-start gap-12">
                    {getStartedRef.current?.map((getStartedItem: GetStartedItemType, getStartedIndex: number) => (
                        <div className="get-started-item" key={getStartedIndex}>
                            <div className={`get-started-item__card-wrapper rounded-md flex flex-col 
                                items-start justify-end px-4 pb-6 w-[200px] h-[160px] text-white shadow 
                                hover:scale-105 transition-all cursor-pointer select-none ${getStartedItem.bgColor}`}
                            >
                                <span className="get-started-item__title font-semibold text-xl">{getStartedItem.title}</span>
                            </div>
                            <div className="get-started-item__description mt-4 text-xs text-white text-opacity-40 font-semibold tracking-wide w-[200px] leading-6">
                                {getStartedItem.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}