"use client";
import { useEffect, useState } from "react";

interface OverlayProps {
    func?: () => void;
}

export default function Overlay({ func }: OverlayProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true)

        return () => {
            setIsVisible(false)
        }
    }, [])

    return (
        <div onClick={func} className={`absolute top-0 left-0 w-full h-full cursor-pointer bg-black transition-opacity duration-[1s] ${isVisible ? "opacity-50" : "opacity-0"}`}></div>
    )
}