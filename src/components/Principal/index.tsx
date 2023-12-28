"use client";

import { useEffect, useState, useRef } from "react";
import TextLoop from "react-text-loop";
import Typewriter from 'typewriter-effect';

export default function Principal() {
    const [texts, setTexts] = useState(['Hello', 'Welcome', 'Hola']); // Array of texts to display
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const [isBrowser, setIsBrowser] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Change text every 2 seconds (2000 milliseconds)
    
        return () => clearInterval(interval);
    }, [texts]);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
    }, [])

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section id="home" className="w-full h-screen relative">
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