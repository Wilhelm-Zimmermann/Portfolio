"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import StackPercent from "./StackPercent";

interface ResumoProps {
    setSelected: Dispatch<SetStateAction<string>>;
}

export default function Resumo({setSelected}: ResumoProps) {
    const resumoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setSelected("Resumo")
                }
            });
        }, options);

        if(resumoRef.current) {
            observer.observe(resumoRef.current);
        }

        return () => {
            if(resumoRef.current) {
                observer.unobserve(resumoRef.current);
            }
        }
    }, [])

    return (
        <section ref={resumoRef} id="resumo" className="w-full py-10 xl:px-10 px-5 flex flex-col bg-gray-900">
            <div className="flex flex-col xl:mt-10 gap-1">
                <h1 className="text-white text-3xl">Resumo</h1>
                <div className="w-[90px] h-[3px] bg-terciary"></div>
            </div>

            <div className="flex flex-col xl:flex-row-reverse mt-10 gap-x-2">
                {/* Educação */}
                <div className="flex flex-col w-full mt-4 xl:mt-0 xl:w-[50%]">
                    <h2 className="text-white font-semibold text-2xl">Educação / Cursos</h2>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">2018 - 2020</h2>
                        <h3 className="mt-2 font-semibold text-xl">Ensino Médio</h3>
                        <h4 className="font-bold text-terciary">Frederico Hardt / Indaial-SC</h4>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">2021</h2>
                        <h3 className="mt-2 font-semibold text-xl">Udemy</h3>
                        <h4 className="font-bold text-terciary">C# e Orientação a objetos</h4>
                        <h5>Carga horária: 38 horas</h5>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">2018 - 2020</h2>
                        <h3 className="mt-2 font-semibold text-xl">Rocketseat</h3>
                        <h4 className="font-bold text-terciary">Node JS</h4>
                        <h5>Carga horária: 80 horas</h5>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">2018 - 2020</h2>
                        <h3 className="mt-2 font-semibold text-xl">Rocketseat</h3>
                        <h4 className="font-bold text-terciary">React JS</h4>
                        <h5>Carga horária: 80 horas</h5>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">2018 - 2020</h2>
                        <h3 className="mt-2 font-semibold text-xl">Ensino Médio</h3>
                        <h4 className="font-bold text-terciary">Frederico Hardt / Indaial-SC</h4>
                    </div>
                </div>
                {/* Fim educação */}

                {/* Experiências */}
                <div className="flex flex-col w-full mt-4 xl:mt-0 xl:w-[50%]">
                    <h2 className="text-white font-semibold text-2xl">Experiências</h2>
                    
                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">01/2022 - 03/2022</h2>
                        <h3 className="mt-2 font-semibold text-xl">Programador de Sistemas JR.</h3>
                        <h4 className="font-bold text-terciary">Print Wayy / Lages-SC</h4>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">03/2022 - 02/2023</h2>
                        <h3 className="mt-2 font-semibold text-xl">Soldado</h3>
                        <h4 className="font-bold text-terciary">Exército Brasileiro / Blumenau-SC</h4>
                    </div>

                    <div className="flex flex-col bg-gray-950 w-full min-h-[200px] justify-center gap-2 mt-6 rounded-lg text-white p-6 border-2 border-terciary hover:shadow-md hover:shadow-purple-800 transition-all duration-200">
                        <h2 className="bg-gradient-to-r from-terciary to-purple-800 w-fit px-2 py-[2px] rounded-lg">06/2023 - ..</h2>
                        <h3 className="mt-2 font-semibold text-xl">Programador de Sistemas</h3>
                        <h4 className="font-bold text-terciary">Grupo Giovanella / Indaial-SC</h4>
                    </div>
                </div>
                {/* Fim Experiências */}
            </div>

            <div className="flex flex-col mt-10 gap-1">
                <h2 className="text-white text-2xl">Minhas Habilidades</h2>
                <div className="w-[120px] h-[3px] bg-terciary"></div>

                <div className="flex flex-wrap mt-6 gap-4">
                    <StackPercent title="HTML/CSS" percent="93"/>
                    <StackPercent title="C#" percent="70"/>
                    <StackPercent title="Node JS" percent="80"/>
                    <StackPercent title="JavaScript/TypeScript" percent="80"/>
                    <StackPercent title=".NET" percent="68"/>
                    <StackPercent title="MySQL" percent="77"/>
                    <StackPercent title="ReactJS" percent="82"/>
                </div>
            </div>
        </section>
    )
}