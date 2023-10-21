interface HeaderLinkProps {
    title: string;
}

export const HeaderLink = ({title}: HeaderLinkProps) => {
    return (
        <div className="cursor-pointer">
            <span>{title}</span>
        </div>
    )
}