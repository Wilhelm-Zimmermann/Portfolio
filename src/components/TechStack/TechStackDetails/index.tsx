"use client";
import Overlay from "@/components/Overlay";
import { useEffect } from "react";

interface TechStackDetailsProps {
    show: boolean;
    onHide: () => void;
}

export default function TechStackDetails({ show, onHide }: TechStackDetailsProps) {

    useEffect(() => {
        console.log(show);
        
    }, [show])

    return (
        <>
            {/* {show &&  */}
                <div className={`fixed top-0 left-0 z-10 w-full h-full transition-opacity ease-in-out duration-300 ${show ? "block opacity-100" : "hidden opacity-0"}`}>
                    <div
                    className={`
                            absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-[800px] h-[500px] bg-primary border-2 border-comp1 hover:border-terciary 
                            rounded-sm shadow-md transition-opacity duration-[1s]
                            p-4 flex flex-col ${show ? "opacity-100" : "opacity-0"}
                        `}
                    >
                        <header className="flex justify-between items-center">
                            <div className="flex gap-x-1">
                                <main className="text-gray-200">Icone</main>
                                <span className="text-gray-200">Nome</span>
                            </div>
                            <button onClick={onHide} className="text-red-500 text-xl hover:text-red-800 transition-all duration-200">X</button>
                        </header>
                        <p className="text-gray-200 mt-4">
                            Cupidatat irure officia ea aliqua. Veniam excepteur excepteur sint eu. Commodo et sit fugiat eiusmod. Cillum veniam duis Lorem voluptate anim et duis. Sunt aliqua mollit veniam reprehenderit ex dolore dolor enim fugiat ut.
                            Occaecat duis velit Lorem enim est commodo exercitation. Id nisi enim nulla id anim ut deserunt dolor enim aute aute. Officia dolor aliqua quis est incididunt et laboris sunt esse aliquip. Aliqua amet officia id proident id aute minim ad aute sint.
                            Nisi irure sunt dolore consectetur enim. Cillum excepteur elit dolor consequat aliquip duis sunt ad fugiat magna duis id occaecat. In deserunt laborum sit incididunt ipsum sunt pariatur aute cillum consectetur. Amet ipsum et reprehenderit non et veniam sunt anim.
                        </p>
                    </div>
                    <Overlay func={onHide}/>
                </div>
            {/* } */}
        </>
    )
}