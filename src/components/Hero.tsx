import CoverParticles from "./CoverParticles"
import { MuseoModerno } from "next/font/google"
import { FC } from "react"


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
            <div className=""><CoverParticles /></div>
            <section className="w-full max-w-screen-lg mx-auto grid grid-cols-1 grid-rows-1 justify-center items-center h-full bgDark ">
                <div className="flex flex-col gap-3 justify-end backdrop-blur-4xl backdrop-filter bgDark w-4/5">
                    <h2 className={`text-8xl font-semibold bgDark z-10 w-fit ${museoModerno.className}`}>Emiliano Aloi 🚀</h2>
                    <h3 className="text-6xl text-zinc-700 bgDark z-10 pb-2">Desarrollador de Software</h3>
                    <h3 className="text-zinc-400 text-3xl bgDark z-10">
                        +2 años de experiencia creando aplicaciones <br /> con Javascript explorando diferentes frameworks.
                    </h3>
                    <div>
                        <button className="text-xl px-7 py-3 mt-4 text-white bgDark border-gray-300 border-2 rounded-full hover:border-gray-700">Leer mas</button>
                        <button className="text-xl px-7 py-3 mt-4 text-white bgDark rounded-full hover:border-gray-700">CV</button>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Hero