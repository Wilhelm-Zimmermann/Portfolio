"use client";
import { useState } from "react";
import TechStackDetails from "./TechStackDetails";

interface TechCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const TechCard = ({ title, description, icon }: TechCardProps) => {
    return (
        <>
            <div className="
                w-full h-44 xl:w-[49%] 
                cursor-pointer text-gray-100 flex justify-around transition-all duration-200">
                <div className="flex flex-row gap-x-4 w-full">
                    <div className="w-[15%] flex items-center">
                        <div className="w-[100%] bg-gray-900 rounded-md p-6 flex justify-center items-center">
                            {icon}
                        </div>
                    </div> 

                    <div className="w-[84%] flex flex-col justify-center">
                        <h1 className="self-start text-xl font-semibold">{title}</h1>
                        <span className="mt-2 text-gray-300">Laboris velit ex consectetur et quis sunt dolor do ea irure. Consequat proident non in id ut. Quis enim in c</span>
                    </div>
                </div>
            </div>
        </>
    )
}