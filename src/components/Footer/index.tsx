export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-gray-800 h-[200px] px-5 xl:px-10 flex flex-col justify-center">
            <div className="w-full">
                <span className="text-gray-100 font-semibold text-lg">Copyright &copy; {currentYear} <span className="text-purple-500">Wilhelm</span> todos direitos reservados</span>
            </div>
        </footer>
    )
}