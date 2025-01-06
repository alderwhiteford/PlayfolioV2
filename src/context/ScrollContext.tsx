'use client'

import { createContext, ReactNode, useEffect, useRef, useState } from "react";

type ScrollContextProviderProps = {
    children: ReactNode;
}

type ScrollContextProps = {
    scrollPercentage: number;
    scrollingUp: boolean;
}

export const ScrollContext = createContext<ScrollContextProps>({ scrollPercentage: 0, scrollingUp: true });

export function ScrollContextProvider({ children }: ScrollContextProviderProps) {
    const [scrollingUp, setScrollingUp] = useState(true); // Initialize to true to make sure navbar is show on initial page load
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const lastScrollPosition = useRef(0);

    // Compute and set the current page scroll percentage:
    function computeScrollPercentage() {
        const scrollHeight = Math.max(
            document.documentElement.scrollHeight, 
            document.body.scrollHeight
          ) - window.innerHeight;
        
        const scrollPosition = window.scrollY || 
            document.documentElement.scrollTop;
        

        const scrollPercentage = scrollHeight === 0 ? 0 : Math.min(
            Math.max((scrollPosition / scrollHeight) * 100, 0),
            100
        );
        
        setScrollPercentage(scrollPercentage);
    }

    // Compute and set the current scroll direction:
    function computeScrollDirection() {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScrollPosition.current) {
            setScrollingUp(false);
        } else {
            setScrollingUp(true);
        }

        lastScrollPosition.current = currentScroll;
    }

    useEffect(() => {
        window.addEventListener('scroll', computeScrollPercentage);
        window.addEventListener('scroll', computeScrollDirection);

        computeScrollPercentage();
        computeScrollDirection();

        return () => {
            window.removeEventListener('scroll', computeScrollPercentage);
            window.removeEventListener('scroll', computeScrollDirection);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{
            scrollingUp,
            scrollPercentage
        }}>
            { children }
        </ScrollContext.Provider>
    )
}