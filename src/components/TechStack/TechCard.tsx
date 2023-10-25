interface TechCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const TechCard = ({ title, description, icon }: TechCardProps) => {
    return (
        <div className="w-[100%] h-44 sm:w-[48%] lg:w-[32%] bg-terciary text-gray-100 rounded-sm shadow-lg flex flex-col p-4 justify-around">
            <div className="flex flex-row gap-2 content-center border-s-orange-100">
                <div className="place-self-end">
                    {icon}
                </div> 
                <span className="place-self-center">{title}</span>
            </div>
            {/* <span>{description}</span> */}
            <span>Laboris velit ex consectetur et quis sunt dolor do ea irure. Consequat proident non in id ut. Quis enim in c</span>
        </div>
    )
}