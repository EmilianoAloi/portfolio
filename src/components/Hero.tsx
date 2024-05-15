import CoverParticles from "./CoverParticles"
import { MuseoModerno } from "next/font/google"
import { FC, useState } from "react"
import Link from "next/link"
import ScrollDownButton from "./ScrollDownButton"


interface TitleFont {
    subsets: string[];
    display: string
}

const museoModerno = MuseoModerno({
    subsets: ["latin"],
    display: 'swap',
});

const Hero: FC = () => {


    return (
        <>
            <div><CoverParticles /></div>
            <section className="w-full h-screen lg:max-w-screen-lg mx-auto grid grid-cols-1 grid-rows-1  items-center h-full bgDark ">
                <div className="container text-center px-2 mx-auto flex flex-col lg:gap-3 justify-end backdrop-blur-4xl backdrop-filter bgDark w-fit">
                    {/* <p className="text-5xl lg:text-8xl">🚀</p> */}

                    <h2 className={`text-5xl lg:text-8xl font-semibold bgDark z-10 mx-auto mt-32 ${museoModerno.className}`}>Emiliano Aloi </h2>
                    <h3 className="text-2xl lg:text-6xl text-zinc-700 bgDark z-10 pb-2">Desarrollador de Software</h3>
                    <h3 className="text-zinc-400 lg:text-3xl bgDark z-10">
                        +2 años de experiencia creando <br /> aplicaciones
                        atractivas y fáciles de usar.
                    </h3>
                    <ScrollDownButton />
                    <div className="flex items-end gap-10 hidden">
                        <Link href={"/"} className="text-md lg:text-xl py-3 ">VER MAS</Link>
                        <Link
                            href="/CVEmilianoAloiFullstack.pdf"
                            download="CVEmilianoAloiFullstack"
                            className="text-md lg:text-xl py-3">
                            CV
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero