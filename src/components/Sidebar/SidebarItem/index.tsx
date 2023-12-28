
interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
    selected: boolean;
    func: () => void;
}

export default function SidebarItem({ icon, title, func, selected }: SidebarItemProps) {
    return (
        <div className="flex flex-col text-gray-100 gap-x-2 items-center cursor-pointer hover:text-gray-400 transition-all" onClick={func}>
            {/* {icon} */}
            <span>{title}</span>
            {selected && 
                <div className={`${selected ? "opacity-100" : "opacity-0"} w-[50px] h-[3px] transition-opacity duration-300 bg-terciary`}></div>
            }
        </div>
    )
}