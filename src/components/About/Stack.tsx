"use client"
import { useEffect, useState } from "react";
import { FaNetworkWired } from "react-icons/fa";
import { HiMiniServerStack } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";

interface StackProps {
    stackShow: number;
}

export const Stack = ({stackShow}: StackProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
        }
    }, [stackShow])

    return (
        <div className="flex flex-col">
            {stackShow == 0 && 
                <div className={`transition-opacity duration-1000 ${stackShow == 0 ? "opacity-100" : "opacity-0"}`}>
                    <FaNetworkWired size={250}/>
                    <h1 className="text-center text-xl font-bold">Web</h1>
                </div>
            }
            {stackShow == 1 && 
                <div className="transition-opacity">
                    <HiMiniServerStack size={250}/>
                    <h1 className="text-center text-xl font-bold">Back-End</h1>
                </div>
            }
            {stackShow == 2 && 
                <div className="transition-opacity">
                    <FiMonitor size={250}/>
                    <h1 className="text-center text-xl font-bold">Front-End</h1>
                </div>
            }
        </div>
    )
}