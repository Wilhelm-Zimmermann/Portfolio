"use client";
import { Stack } from "./Stack";
import { useEffect, useState } from "react";
import Image from "next/image";
import bgAbout from "../../../public/images/about-bg.avif";
import Overlay from "../Overlay";

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
        <section id="sobre" className={`w-full h-screen flex flex-col px-10 transition-opacity duration-[1s] ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gray-900 justify-center gap-y-16 z-20`}>
            <div className="w-full flex flex-col  gap-y-2">
                <h1 className="font-normal text-3xl text-gray-200">Sobre Mim</h1> 
                <div className="w-[100px] h-[2px] justify-self-center bg-terciary"></div>
            </div>

            <div className="w-full flex justify-between">
                <div className="mt-2 w-[68%]">
                    <h2 className="text-gray-50 font-semibold text-2xl">Olá, me chamo Wilhelm, sou um <span className="text-terciary font-bold">Desenvolvedor Full Stack</span></h2>
                    <h3 className="text-gray-300 text-lg mt-4">
                        I am Full Stack Developer focused on the web, I am capable to build almost everything that envolves the web Ea adipisicing tempor voluptate et cillum do sunt ut. Commodo ullamco sit deserunt adipisicing Lorem ut do ipsum mollit quis. Ex et anim voluptate ad. Irure nostrud incididunt sint anim eiusmod labore reprehenderit sint fugiat tempor enim.
                        nim ex proident in. Sunt duis quis deserunt sunt occaecat est ullamco voluptate aliqua eu culpa ut.
                    </h3>
                    <h3 className="text-gray-300 text-lg mt-4">
                    Full Stack Developer focused on the web, I am capable to build almost everything that envolves the web Ea adipisicing tempo
                    </h3>
                </div>

                <div className="w-[30%]">
                    <div className="w-full border-b-2 border-gray-800 py-4">
                        <h4 className="text-gray-300 font-medium">Nome: <span className="font-normal">Wilhelm Henrique Zimmermann</span></h4>
                    </div>
                    <div className="w-full border-b-2 border-gray-800 py-4">
                        <h4 className="text-gray-300 font-medium">Email: <span className="font-normal">wilhelmzimmermann8@gmail.com</span></h4>
                    </div>
                    <div className="w-full border-b-2 border-gray-800 py-4">
                        <h4 className="text-gray-300 font-medium">Idade: <span className="font-normal">21 anos</span></h4>
                    </div>
                    <div className="w-full border-b-2 border-gray-800 py-4">
                        <h4 className="text-gray-300 font-medium">Endereço: <span className="font-normal">Indaial; Santa Catarina</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}