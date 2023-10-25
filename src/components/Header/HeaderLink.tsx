interface HeaderLinkProps {
    title: string;
}

export const HeaderLink = ({title}: HeaderLinkProps) => {
    return (
        // <div className="cursor-pointer hover:border-b-comp2 hover:border-b-2 transition-all">
            <a href={`#${title}`} className="cursor-pointer h-[22px] hover:text-white transition-all text-gray-100 duration-[100]">{title}</a>
        // </div>
    )
}