import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.png"

const Navbar = () => {
    return (
        <header className="flex justify-center ">
            <nav className="fixed z-20 flex w-full justify-between items-center py-6 px-10 shadow-md  transition duration-500 ease-in-out backdrop-filter backdrop-blur-sm">

                <Link href="/" className="flex gap-5 w-48">
                    <Image src={logo} alt="logo" width={18} />
                    <div>
                        <h2 className="font-semibold">Emiliano Aloi</h2>
                        <h3 className="text-zinc-500 text-xs">Desarrollador de Software</h3>
                    </div>
                </Link>

                <ul className="flex gap-4 font-semibold">
                    <li><Link href="/">Experiencia</Link></li>
                    <li><Link href="#">Proyectos</Link></li>
                    <li><Link href="#">Sobre Mi</Link></li>
                    <li><Link href="#">Contacto</Link></li>
                </ul>

                <div className="flex gap-4 w-48 justify-end">
                    <h3 className="text-green-400 pe-4">Disponible</h3>
                    <h4>X</h4>
                    <h4>X</h4>
                    <h4>X</h4>
                </div>

            </nav>
        </header>
    )
}

export default Navbar