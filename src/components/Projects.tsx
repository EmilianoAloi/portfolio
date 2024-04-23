import Image from "next/image"
import pfLogo from "../../public/phonefixLogo.png"
import pfFrame from "../../public/FramePF.png"
import Link from "next/link"
const Projects = () => {
    return (

        <section className='w-full max-w-screen-md mx-auto flex flex-col h-full'>
            <div className='flex flex-col gap-1 mb-10'>
                <h2 className='text-3xl font-semibold'>Proyectos</h2>
                <h2 className='text-md text-zinc-500'>A continuación algunos proyectos que muestran lo que puedo aportar.</h2>
            </div>


            <div className="grid grid-cols-1 grid-rows-4 gap-8 w-full">
                <Link href="/">
                    <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden'>
                        <div className='w-2/3 p-10 mt-5'>
                            <Image src={pfLogo} width={60} alt="phoneFix Logo" className="mb-4" />
                            <h3 className='text-lg font-semibold'>phoneFix Belgrano</h3>
                            <h4 className='text-sm text-zinc-500'>Desarrollo Frontend <br /> HTML y CSS </h4>
                        </div>
                        <div className="w-full bg-gray-800 pt-12 ps-12 pe-10 flex ">
                            <Image src={pfFrame} width={500} alt="Frame phonefix web" />
                        </div>
                    </div>
                </Link>

                <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10'>2</div>
                <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10'>3</div>
                <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10'>4</div>

            </div>


        </section>
    )
}

export default Projects