"use client"

import { FaInfoCircle, FaGithub, FaLinkedinIn, FaHome, FaToolbox } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Sidebar() {
    const [showDrawer, setShowDrawer] = useState<boolean>(false);

    const toggleDrawer = () => {
        setShowDrawer(prev => !prev);
    }

    const closeDrawer = () => {
        setShowDrawer(false);
    }

    return (
        <div className="flex md:flex-col w-full md:w-[320px] md:h-screen items-center px-4 py-7 gap-y-10 justify-between bg-gray-950 z-20">
            <div className="flex flex-col w-full items-center">
                <div className="hidden md:block w-44 h-44 mt-6 rounded-full border-4 border-terciary shadow-lg hover:shadow-secondary transition-all">
                    <Image 
                        className="rounded-full"
                        src="/images/profile.png"
                        alt="Profile Image"
                        width={200}
                        height={200}
                    />
                </div>
                <span className="text-gray-100 mt-4 font-semibold text-lg text-center">Wilhelm H. Zimmermann</span>
                <div className={`${showDrawer ? "flex absolute" : "hidden static"} top-20 left-0 z-20 w-full h-[200px] flex-col md:flex gap-y-4 mt-10 items-center justify-center text-lg bg-gray-900 md:bg-gray-950 md:static transition-all duration-[1s]`}>
                    <a href="#home">
                        <SidebarItem func={closeDrawer} title="Home" icon={<FaHome size={32}/>}/>
                    </a>
                    <a href="#sobre">
                        <SidebarItem func={closeDrawer} title="Sobre Mim" icon={<FaInfoCircle size={32}/>}/>
                    </a>
                    <a href="#todo">
                        <SidebarItem func={closeDrawer} title="Oque eu faço" icon={<FaPencil size={32}/>}/>
                    </a>
                    <a href="#resumo">
                        <SidebarItem func={closeDrawer} title="Resumo" icon={<FaToolbox size={32}/>}/>
                    </a>
                </div>
            </div>

            <div className="w-full gap-x-4 flex md:justify-center justify-end mr-4">
                <Link href={`https://www.linkedin.com/in/wilhelm-henrique-zimmermann/`} target="_blank">
                    <FaLinkedinIn className="cursor-pointer text-white hover:text-gray-400" size={20}/>
                </Link>

                <Link href={`https://github.com/Wilhelm-Zimmermann`} target="_blank">
                    <FaGithub className="cursor-pointer text-white hover:text-gray-400" size={20}/>
                </Link>
            </div>
            <div className="block md:hidden">
                <GiHamburgerMenu onClick={toggleDrawer} className="text-white" size={40}/>
            </div>
        </div>
    )
}