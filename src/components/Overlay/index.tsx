interface OverlayProps {
    func?: () => void;
}

export default function Overlay({ func }: OverlayProps) {
    return (
        <div onClick={func} className="absolute top-0 left-0 w-full h-full cursor-pointer bg-black opacity-50"></div>
    )
}