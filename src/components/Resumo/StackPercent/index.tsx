interface StackPercentProps {
    title: string;
    percent: string;
}

export default function StackPercent({ title, percent}: StackPercentProps) {
    return (
        <div className="w-[49%] flex-col gap-y-2">
            <div className="flex justify-between">
                <span className="text-gray-300">{ title }</span>
                <span className="text-gray-300">{ percent }%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full">
                <div className="h-2 bg-terciary rounded-full" style={{width: percent + "%"}}></div>
            </div>
        </div>
    )
}