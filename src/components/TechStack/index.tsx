import { TechCard } from "./TechCard";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoAws } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export const TechStack = () => {
    return (
        <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Tecnologias que tenho experiência</h1>
            <div className="flex flex-row flex-wrap gap-3 pb-4">
                <TechCard description="" title="React" icon={<BiLogoReact color="#328fa8" size={40}/>}/>
                <TechCard description="descricao" title="Node JS" icon={<BiLogoNodejs color="#32a83a" size={40}/>}/>
                <TechCard description="descricao" title="CSharp" icon={<TbBrandCSharp color="#7532a8" size={40}/>}/>
                <TechCard description="descricao" title="HTML 5" icon={<AiFillHtml5 color="#a83232" size={40}/>}/>
                <TechCard description="descricao" title="CSS 3" icon={<FaCss3 color="#1e34a6" size={40}/>}/>
                <TechCard description="descricao" title="TypeScript" icon={<BiLogoTypescript color="#1e34a6" size={40}/>}/>
                <TechCard description="descricao" title="Amazon Web Services" icon={<BiLogoAws color="#1e34a6" size={40}/>}/>
                <TechCard description="descricao" title="My Sql" icon={<DiMysql color="#1e34a6" size={40}/>}/>
                <TechCard description="descricao" title="JavaScript" icon={<BiLogoJavascript color="#fffb0d" size={40}/>}/>
            </div>
        </section>
    )
}