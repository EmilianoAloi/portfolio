import Image from "next/image"
import pic from "../../public/pic.png"
import CoverParticles from "./CoverParticles"

const Hero = () => {
    return (
        <>

            <div className=""><CoverParticles /></div>
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-3 grid-rows-1 gap-4 justify-center  items-center h-full bgDark ">
                <div className="col-span-2 flex flex-col gap-3 justify-end backdrop-blur-4xl backdrop-filter bgDark w-4/5">
                    <h2 className="text-6xl font-semibold bgDark z-10 w-fit">Emiliano Aloi 👋</h2>
                    <h3 className="text-4xl text-zinc-700 bgDark z-10 w-fit">Desarrollador de Software</h3>
                    <h3 className="text-zinc-400 text-lg bgDark z-10 w-fit">
                        +2 años de experiencia creando aplicaciones web con Javascript explorando diferentes frameworks. <br /> Mi objetivo es ofrecer experiencias digitales que atraigan y logren resultados tangibles.

                    </h3>
                    <div>
                        <button className="text-sm px-5 py-3 text-white bgDark border-gray-300 border-2 rounded-lg hover:border-gray-700">Sobre mi</button>
                    </div>
                </div>


                <button className="mx-auto text-sm px-5 py-3 text-white border-gray-300 border-2 rounded-full w-fit hover:border-gray-700">Click me</button>

                {/* <div className="w-fit rounded-full overflow-hidden z-10 cursor-pointer flex flex-col justify-start ps-20 ms-20 ">
        <Image src={pic} width={300} alt="profile picture" className="opacity-90" />
      
    </div> */}

            </div>
        </>


    )
}

export default Hero