"use client"

import { FC, useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import { MuseoModerno } from "next/font/google"
import Hamburger from 'hamburger-react'
import githubLogo from "../../public/socialLogos/github.png"
import linkedinLogo from "../../public/socialLogos/ln.png"


const museoModerno = MuseoModerno({
    subsets: ["latin"],
    display: 'swap',
});

const Navbar: FC = () => {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const closeNavbar = () => {
        setIsOpen(false);
    }

    return (
        <header className="fixed w-full px-4 py-6 lg:px-10 md:shadow-md z-20 flex justify-center flex-wrap shadow-lg  transition duration-500 ease-in-out backdrop-filter backdrop-blur-md ">
            <nav className=" flex w-full justify-between items-center ">
                <Link href="/" className="flex gap-5 w-48">
                    <div className="ps-2">
                        <h2 className={`font-semibold ${museoModerno.className}`}>Emiliano Aloi</h2>
                        <h3 className="text-zinc-500 text-xs">Desarrollador de Software</h3>
                    </div>
                </Link>
                <div className="hidden lg:flex  ">
                    <ul className="flex  gap-6  font-semibold ">
                        <li><Link href="#experience" className="hover:text-zinc-500">Experiencia</Link></li>
                        <li><Link href="#projects" className="hover:text-zinc-500">Proyectos</Link></li>
                        <li><Link href="#skills" className="hover:text-zinc-500">Habilidades</Link></li>
                        <li><Link href="#contact" className="hover:text-zinc-500">Contacto</Link></li>
                    </ul>
                </div>
                <ul className="flex gap-4 justify-end items-center hidden lg:flex">
                    <li className="text-green-400 pe-4">Disponible</li>
                    <li className="hidden lg:flex">
                        <Link href="https://github.com/EmilianoAloi" target="_blank" rel="noopener noreferrer">
                            <Image src={githubLogo} width={40} alt="GitHub Logo" />
                        </Link>
                    </li>
                    <li className="">
                        <Link href="https://www.linkedin.com/in/emilianoaloi/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinLogo} width={40} alt="Linkedin Logo" />
                        </Link>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
            </nav>

            {isOpen ?
                <ul className="lg:hidden flex flex-col gap-6 font-semibold text-center pt-6">
                    <li><Link href="#experience" className="hover:text-zinc-500" onClick={closeNavbar}>Experiencia</Link></li>
                    <li><Link href="#projects" className="hover:text-zinc-500" onClick={closeNavbar}>Proyectos</Link></li>
                    <li><Link href="#skills" className="hover:text-zinc-500" onClick={closeNavbar}>Habilidades</Link></li>
                    <li><Link href="#contact" className="hover:text-zinc-500" onClick={closeNavbar}>Contacto</Link></li>
                </ul>
                : ""
            }
        </header>
    )
}

export default Navbar