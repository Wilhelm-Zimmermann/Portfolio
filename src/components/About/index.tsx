"use client";
import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";

interface AboutProps {
    setSelected: Dispatch<SetStateAction<string>>;
}

export const About = ({ setSelected }: AboutProps) => {
    const [stackShow, setStackShow] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll: IntersectionObserverCallback  = entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setSelected("Sobre Mim")
                }
            });
        }

        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        });

        if(aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if(aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
        }

    },[])

    return (
        <main id="sobre" ref={aboutRef} className={`w-full py-10 xl:h-screen xl:py-0 flex flex-col px-5 md:px-10 transition-opacity duration-[1s] ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gray-900 justify-center gap-y-8 xl:gap-y-16 z-20`}>
            <div className="w-full flex flex-col md:gap-y-2">
                <h1 className="font-normal text-3xl text-gray-200">Sobre Mim</h1> 
                <div className="w-[100px] h-[2px] justify-self-center bg-terciary"></div>
            </div>

            <div className="w-full flex flex-col justify-between xl:flex-row">
                {/* info */}
                <div className="w-[100%] md:mt-2 xl:w-[68%]">
                    <h2 className="text-gray-50 font-semibold text-2xl">Olá, me chamo Wilhelm, sou <span className="text-transparent font-bold bg-gradient-to-r from-blue-500 to-terciary bg-clip-text">Desenvolvedor Full Stack</span></h2>
                    <h3 className="text-gray-300 text-lg mt-4">
                        Sou um desenvolvedor Full Stack focado no desenvolvimento web. Tenho a capacidade de construir sites utilizando as mais recentes tecnologias do mercado, sempre priorizando a performance e a responsividade.
                    </h3>
                    <h3 className="text-gray-300 text-lg mt-4">
                        Além disso, consigo criar APIs e realizar integrações com APIs já existentes no mercado.
                    </h3>
                </div>
                {/* end info */}

                {/* personel */}
                <div className="mt-8 w-[100%] xl:w-[30%] md:mt-0">
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
                {/* end personel */}

            </div>
        </main>
    )
}