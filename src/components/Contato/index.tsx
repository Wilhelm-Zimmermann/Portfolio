import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

interface ContatoProps {
    setSelected: Dispatch<SetStateAction<string>>;
}

export default function Contato({ setSelected }: ContatoProps) {
    const contatoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setSelected("Contato")
                }
            });
        });

        if(contatoRef.current) {
            observer.observe(contatoRef.current);
        }

        return () => {
            if(contatoRef.current) {
                observer.unobserve(contatoRef.current);
            }
        }
    }, [])

    return (
        <section ref={contatoRef} id="contato" className="w-full flex flex-col py-10 items-center justify-center px-5 xl:px-10 mt-20">
            <div className="flex flex-col">
                <h1 className="text-gray-100 font-normal w-fit text-3xl">Entre em Contato</h1>
                <span className="w-[120px] h-[3px] bg-gradient-to-r from-blue-700 to-terciary text-center shadow-2xl shadow-terciary"></span>
            </div>

            <div className="flex justify-between w-full mt-20">
                <div className="text-gray-100 text-center flex flex-col items-center gap-y-2">
                    <Link 
                        href="https://github.com/Wilhelm-Zimmermann"
                        target="_blank"
                        className="text-gray-100 text-center flex flex-col items-center gap-y-2"
                    >
                        <FaGithub size={34}/>
                        <span className="text-xl">Github</span>
                    </Link>
                </div>

                <div className="text-gray-100 text-center flex flex-col items-center gap-y-2">
                    <Link 
                        href="https://www.linkedin.com/in/wilhelm-henrique-zimmermann/"
                        target="_blank"
                        className="text-gray-100 text-center flex flex-col items-center gap-y-2"
                    >
                        <FaLinkedin size={34} color={"#345beb"}/>
                        <span className="text-xl">Linkedin</span>
                    </Link>
                </div>

                <div className="text-gray-100 text-center flex flex-col items-center gap-y-2">
                    <Link 
                        href="https://wa.me/5547992573794"
                        target="_blank"
                        className="text-gray-100 text-center flex flex-col items-center gap-y-2"
                    >
                        <FaWhatsapp size={34} color={"#34eb34"}/>
                        <span className="text-xl">WhattApp</span>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}