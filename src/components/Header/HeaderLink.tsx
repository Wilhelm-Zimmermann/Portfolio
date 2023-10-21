interface HeaderLinkProps {
    title: string;
}

export const HeaderLink = ({title}: HeaderLinkProps) => {
    return (
        <div className="cursor-pointer hover:border-b-2">
            <span>{title}</span>
        </div>
    )
}