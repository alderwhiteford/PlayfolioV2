'use client'

import Navbar from "@/components/Navbar/Navbar";
import { ScrollContextProvider } from "@/context/ScrollContext";
import { ReactNode } from "react";

type TemplateProps = {
    children: ReactNode; 
}

export default function Template({ children }: TemplateProps) {
    return (
        <ScrollContextProvider>
            <Navbar />
            { children }
        </ScrollContextProvider>
    )
}