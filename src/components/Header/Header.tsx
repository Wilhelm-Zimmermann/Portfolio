import { HeaderLink } from "./HeaderLink"
import { AiOutlineMail } from "react-icons/ai";

export const Header = () => {
    return (
        <header className="flex flex-row w-[100%] h-[8vh] px-10 bg-secondary shadow-sm text-comp2 duration-200">
            <div className="flex flex-row justify-around items-center flex-1">
                <HeaderLink title="About"/>
                <HeaderLink title="Contact"/>
                <HeaderLink title="Projects"/>
            </div>
        </header>
    )
}