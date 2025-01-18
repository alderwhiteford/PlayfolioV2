'use client'

import { ScrollContextProvider } from "@/context/ScrollContext";
import { ReactNode } from "react";

type TemplateProps = {
    children: ReactNode; 
}

export default function Template({ children }: TemplateProps) {
    return (
        <ScrollContextProvider>
            { children }
        </ScrollContextProvider>
    )
}