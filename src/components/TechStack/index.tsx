"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { TechCard } from "./TechCard";
import { LuMonitorSmartphone } from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import { FaDisplay } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

interface TechStackProps {
    setSelected: Dispatch<SetStateAction<string>>;
}

export const TechStack = ({setSelected}: TechStackProps) => {
    const techStackRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                    setSelected("Oque eu faço")
                }
            });
        }, options);

        if(techStackRef.current) {
            observer.observe(techStackRef.current);
        }

        return () => {
            if(techStackRef.current) {
                observer.unobserve(techStackRef.current);
            }
        }
    }, [])
    

    return (
        <section id="todo" ref={techStackRef} className={`w-full 2xl:h-screen py-10 xl:py-0 px-5 md:px-10 bg-gray-800 flex flex-col md:gap-2 transition-opacity duration-[1s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col gap-y-1 py-10 2xl:mt-20">
                <h1 className="text-3xl font-normal text-gray-200">Oque eu Faço</h1>
                <div className="w-[130px] h-[3px] bg-terciary"></div>
            </div>
            <div className="w-full flex flex-wrap gap-3 flex-col md:flex-row 2xl:mt-5">
                <TechCard title="Design Responsivo" icon={<LuMonitorSmartphone  color="#328fa8" size={40}/>}/>
                <TechCard title="Desenvolvimento WEB" icon={<FaDisplay color="#32a83a" size={40}/>}/>
                <TechCard title="Desenvolvimento de Api's" icon={<FaDatabase color="#7532a8" size={40}/>}/>
                <TechCard title="SEO" icon={<SiSimpleanalytics color="#a83232" size={40}/>}/>
            </div>
        </section>
    )
}