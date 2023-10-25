interface HeaderLinkProps {
    title: string;
}

export const HeaderLink = ({title}: HeaderLinkProps) => {
    return (
        // <div className="cursor-pointer hover:border-b-comp2 hover:border-b-2 transition-all">
            <span className="cursor-pointer h-fit hover:border-b-comp2 hover:border-b-2 transition-all">{title}</span>
        // </div>
    )
}