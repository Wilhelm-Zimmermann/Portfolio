import { HeaderLink } from "./HeaderLink"
import { AiOutlineMail } from "react-icons/ai";

export const Header = () => {
    return (
        <header className="flex flex-row w-100 h-[10vh] py-4 align-middle">
            <div className="flex flex-row justify-between flex-1">
                <HeaderLink title="About"/>
                <HeaderLink title="Contact"/>
                <HeaderLink title="Projects"/>
            </div>
        </header>
    )
}