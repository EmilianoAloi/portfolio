import Image from "next/image"
import pic from "../../public/pic.png"
import CoverParticles from "./CoverParticles"

const Hero = () => {
    return (
        <>

            <div className=""><CoverParticles /></div>
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 grid-rows-1 justify-center items-center h-full bgDark ">
                <div className="flex flex-col gap-3 justify-end backdrop-blur-4xl backdrop-filter bgDark w-4/5">
                    <h2 className="text-8xl font-semibold bgDark z-10 w-fit">Emiliano Aloi 🚀</h2>
                    <h3 className="text-6xl text-zinc-700 bgDark z-10 pb-2">Desarrollador de Software</h3>
                    <h3 className="text-zinc-400 text-3xl bgDark z-10">
                        +2 años de experiencia creando aplicaciones <br /> con Javascript explorando diferentes frameworks.
                    </h3>
                    <div>
                        <button className="text-xl px-7 py-3 mt-4 text-white bgDark border-gray-300 border-2 rounded-full hover:border-gray-700">Leer mas</button>
                        <button className="text-xl px-7 py-3 mt-4 text-white bgDark rounded-full hover:border-gray-700">CV</button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Hero