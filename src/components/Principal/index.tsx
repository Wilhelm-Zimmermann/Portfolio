"use client";

import { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import TextLoop from "react-text-loop";
import Typewriter from 'typewriter-effect';

interface PrincipalProps {
    setSelected: Dispatch<SetStateAction<string>>;
}

export default function Principal({setSelected}: PrincipalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const principalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
        const handleScroll: IntersectionObserverCallback  = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setSelected("Home")
                }
            });
        }

        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        });

        if(principalRef.current) {
            observer.observe(principalRef.current);
        }

        return () => {
            if(principalRef.current) {
                observer.unobserve(principalRef.current)
            }
        }
    }, [])

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section id="home" ref={principalRef} className="w-full h-screen relative">
            <video className="w-full h-screen object-cover" autoPlay muted ref={videoRef} onEnded={handleVideoEnded}>
                <source className="w-full h-screen" src={"/video/programacao.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute z-50 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-4xl font-semibold text-center">Olá 👋</h1>

                <div className="text-7xl font-semibold text-center mt-4">
                    <Typewriter
                        options={{
                            strings: ['Front-End', 'Back-End', "Full Stack"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </section>  
    )
}