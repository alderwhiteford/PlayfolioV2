'use client'

import { useContext } from "react";
import LocationTag, { LocationType } from "../LocationTag/LocationTag";
import { ScrollContext } from "@/context/ScrollContext";
import Link from "next/link";

export default function Navbar() {
    const { scrollingUp } = useContext(ScrollContext);

    return (
        <div 
            className='w-full flex flex-row items-center p-6 pr-16 pl-16 fixed text-white transition-all ease-in-out justify-between'
            style={{
                opacity: scrollingUp ? 100 : 0
            }}
        >
            <div className='flex flex-row gap-12 items-center'>
                <h3 className='font-jost font-medium text-xl m-0'>
                    ALDER WHITEFORD
                </h3>
                <div className='flex flex-row gap-4'>
                    <LocationTag 
                        type={LocationType.Home} 
                        location="Portland, OR" 
                        timeZone="America/Los_Angeles" 
                    />
                    <LocationTag
                        type={LocationType.Current} 
                        location="New York, NY" 
                        timeZone="America/New_York" 
                    />
                </div>
            </div>
            <div className='flex flex-row gap-6 text-sm font-ibmPlexMono uppercase'>
                <Link href='' className='hover:text-primary transition-all ease-in-out'>
                    About
                </Link>
                <Link href='' className='hover:text-primary transition-all ease-in-out'>
                    Photo
                </Link>
                <Link href='' className='hover:text-primary transition-all ease-in-out'>
                    Contact
                </Link>
            </div>
        </div>
    )
}