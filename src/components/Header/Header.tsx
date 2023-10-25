import { HeaderLink } from "./HeaderLink"
import { AiOutlineMail } from "react-icons/ai";

export const Header = () => {
    return (
        <header className="flex flex-row w-[100%] h-[6vh] px-10 bg-background border-b-[1px] border-secondary fixed text-comp2 duration-200">
            <div className="flex flex-row justify-around items-center flex-1">
                <HeaderLink title="Sobre"/>
                <HeaderLink title="Contato"/>
                <HeaderLink title="Projetos"/>
            </div>
        </header>
    )
}