interface TechStackDetailsProps {
    show: boolean;
    onHide: () => void;
}

export default function TechStackDetails({ show, onHide }: TechStackDetailsProps) {
    return (
        <>
            {show && 
                <div onClick={() => onHide()} className="relative top-1 left-1 w-[100%] h-[400px] bg-comp2">
                    Bankai senbonzakura kageyoshi
                </div>
            }
        </>
    )
}