import Image from "next/image"
import pic from "../../public/pic.png"

const Hero = () => {
    return (
        <div className="z-100 container mx-auto grid grid-cols-2 grid-rows-1 gap-4 justify-center items-center h-full">
            <div className="flex flex-col gap-3 ps-20 ms-20 justify-end">
                <h2 className="text-7xl font-bold">Emiliano Aloi 👋</h2>
                <h3 className="text-4xl text-zinc-700">Desarrollador de Software</h3>
                <h3  className="text-zinc-400 text-lg">I’m a Software Engineer. I love building things with Javascript and Typescript and enjoy learning new frameworks that enhance the development experience and challenge my way of thinking.
                    Working alongside senior developers for years encouraged me to become one myself.</h3>
            </div>
            <div className="flex items-center justify-start ps-20 ms-20">
                <Image src={pic} width={400} alt="profile picture" />
            </div>

        </div>
    )
}

export default Hero