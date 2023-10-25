"use client";
import { Stack } from "./Stack";
import { useEffect, useState } from "react";

export const About = () => {
    const [stackShow, setStackShow] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const intervalId = setInterval(() => {            
            setStackShow((prev) => {
                if(prev === 2) {
                    return 0;
                } else {
                    return prev + 1
                }
            });
        }, 2000);

        return () => {
            clearInterval(intervalId);
        }
    },[])

    return (
        <main className={`w-100 h-[100vh] px-10 flex flex-row gap-x-7 transition-opacity duration-[2s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <section className={`flex flex-col justify-center w-[613px] flex-1`}>
                <h1 className="font-bold text-3xl w-fit text-gray-200">Hello I am Wilhelm Henrique Zimmermann</h1> 
                <h3 className="mt-2 text-gray-400">I am Full Stack Developer focused on the web, I am capable to build almost everything that envolves the web</h3>
            </section>
            <section className="place-self-center justify-center flex-1 hidden lg:flex text-gray-200">
                <Stack stackShow={stackShow}/>
            </section>
        </main>
    )
}