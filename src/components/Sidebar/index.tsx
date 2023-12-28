import { FaInfoCircle, FaGithub, FaLinkedinIn, FaHome, FaBook, FaToolbox } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";

export default function Sidebar() {
    return (
        <div className="flex flex-col w-[320px] h-screen items-center px-4 py-7 gap-y-10 justify-between bg-gray-950 z-20">
            <div className="flex flex-col w-full items-center">
                <div className="w-44 h-44 mt-6 rounded-full border-4 border-terciary shadow-lg hover:shadow-secondary transition-all">
                    <Image 
                        className="rounded-full"
                        src="/images/profile.png"
                        alt="Profile Image"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-full flex flex-col gap-y-4 mt-10 items-center text-lg">
                    <a href="#home">
                        <SidebarItem title="Home" icon={<FaHome size={32}/>}/>
                    </a>
                    <a href="#sobre">
                        <SidebarItem title="Sobre Mim" icon={<FaInfoCircle size={32}/>}/>
                    </a>
                    <a href="#todo">
                        <SidebarItem title="Oque eu faço" icon={<FaPencil size={32}/>}/>
                    </a>
                    <a href="#resumo">
                        <SidebarItem title="Resumo" icon={<FaToolbox size={32}/>}/>
                    </a>
                </div>
            </div>

            <div className="w-full gap-x-4 flex justify-center">
                <Link href={`https://www.linkedin.com/in/wilhelm-henrique-zimmermann/`} target="_blank">
                    <FaLinkedinIn className="cursor-pointer text-white hover:text-gray-400" size={20}/>
                </Link>

                <Link href={`https://github.com/Wilhelm-Zimmermann`} target="_blank">
                    <FaGithub className="cursor-pointer text-white hover:text-gray-400" size={20}/>
                </Link>
            </div>
        </div>
    )
}