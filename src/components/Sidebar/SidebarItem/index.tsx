
interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
    func: () => void;
}

export default function SidebarItem({ icon, title, func }: SidebarItemProps) {
    return (
        <div className="flex text-gray-100 gap-x-2 items-center cursor-pointer hover:text-gray-400 transition-all" onClick={func}>
            {/* {icon} */}
            <span>{title}</span>
        </div>
    )
}