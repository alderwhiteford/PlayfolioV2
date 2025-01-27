import { HomeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export enum LocationType {
    Home = 'home',
    Current = 'current'
}

type LocationTag = {
    location: string;
    timeZone: string;
    type: LocationType;
}

export default function LocationTag({ location, timeZone, type }: LocationTag) {
    const [localTime, setLocalTime] = useState<string>();
    const [isHovered, setIsHovered] = useState(false);

    const computeLocalTime = (timeZone: string) => {
        let currentTime = (new Date()).toLocaleTimeString([], { timeZone: timeZone });
        if (currentTime.split(":")[0].length === 1) {
            currentTime = "0" + currentTime;
        }
        return currentTime;
    }

    useEffect(() => {
        // set initial time:
        setLocalTime(computeLocalTime(timeZone));

        // update every second
        setInterval(() => {
            setLocalTime(computeLocalTime(timeZone))
        }, 1000)
    }, [timeZone]);
    
    return (
        <div 
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className='border-white border-[1px] flex flex-row gap-3 pt-[6px] pb-[6px] pr-6 pl-6 rounded-full text-white items-center font-ibmPlexMono uppercase text-xs select-none overflow-y-hidden'
        >
            { type === LocationType.Current 
                ? <MapPinIcon className='text-white h-5' /> 
                : <HomeIcon className='text-white h-5' /> }
             <div className="relative h-[20px] overflow-hidden content-center">
                <div 
                    className="before:content-[attr(data-time)] before:text-white before:block before:absolute before:-translate-y-[30px] transition-all ease-in-out"
                    style={{
                        transform: `translateY(${isHovered ? 30 : 0}px)`
                    }}
                    data-time={localTime}
                >
                    {location}
                </div>
            </div>
        </div>
    );
}
