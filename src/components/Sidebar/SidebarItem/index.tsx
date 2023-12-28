
interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
}

export default function SidebarItem({ icon, title }: SidebarItemProps) {
    return (
        <div className="flex text-gray-100 gap-x-2 items-center cursor-pointer hover:text-gray-400 transition-all">
            {/* {icon} */}
            <span>{title}</span>
        </div>
    )
}