import Image from "next/image"
import Link from "next/link"
import pfLogo from "../../public/phonefixLogo.png"
import pfFrame from "../../public/FramePF.png"
import asLogo from "../../public/antistampaLogo.png"
import asFrame from "../../public/FrameAS.png"
import swLogo from "../../public/showbizLogo.png"
import swFrame from "../../public/FrameSW.png"
import ssLogo from "../../public/ssLogo.png"
import ssFrame from "../../public/FrameSS.png"
import clFrame from "../../public/FrameCL.png"
import clLogo from "../../public/compleetlabs.png"
import { FC } from "react"

const Projects: FC = () => {
    return (
        <section id="projects" className='mx-4 w-full lg:max-w-screen-lg lg:mx-auto my-28 flex flex-col'>
            <div className='flex flex-col gap-1 mb-10'>
                <h2 className='text-5xl font-bold'>Proyectos</h2>
                <h2 className='text-md text-zinc-500'>A continuación algunos proyectos que muestran lo que puedo aportar.</h2>
            </div>

            <div className="grid grid-cols-1 grid-rows-5 gap-8 w-full">

                <Link target="_blank" href="https://landing-page-ea.vercel.app" rel="noopener noreferrer">
                    <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden'>
                        <div className='flex flex-col  justify-center w-3/5 p-5 '>
                            <Image src={clLogo} width={100} height={150} alt="SmartSell Logo" className="mb-4 z-10" />
                            <h3 className='text-lg font-semibold '>compleet labs</h3>
                            <h4 className='text-sm text-zinc-500 mb-2'>Desarrollo Frontend</h4>
                            <h4 className='text-sm text-zinc-500'>TypeScript React Bootstrap Framer Motion</h4>
                        </div>
                        <div className="bg-gray-900 pt-12 ps-2 flex justify-center w-full">
                            <Image src={clFrame} width={400} alt="Frame SmartSell web" className="bg-white" />
                        </div>
                    </div>
                </Link>

                <Link target="_blank" href="https://smart-sell-frontend.vercel.app/report" rel="noopener noreferrer">
                    <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden'>
                        <div className='flex flex-col  justify-center w-3/5 p-5 '>
                            <Image src={ssLogo} width={100} alt="SmartSell Logo" className="mb-4 z-10" />
                            <h3 className='text-lg font-semibold '>SmartSell</h3>
                            <h4 className='text-sm text-zinc-500 mb-2'>Desarrollo Fullstack</h4>
                            <h4 className='text-sm text-zinc-500'>Next.js Django PostgreSQL Tailwind CSS</h4>
                        </div>
                        <div className=" bg-red-950 pt-12 ps-2 flex justify-center w-full">
                            <Image src={ssFrame} width={400} alt="Frame SmartSell web" className="bg-white" />
                        </div>
                    </div>
                </Link>

                <Link target="_blank" href="https://antistampa.netlify.app/" rel="noopener noreferrer">
                    <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden'>
                        <div className='flex flex-col  justify-center w-3/5 p-5 '>
                            <Image src={asLogo} width={50} alt="antistampa Logo" className="mb-4" />
                            <h3 className='text-lg font-semibold '>ANTISTAMPA</h3>
                            <h4 className='text-sm text-zinc-500 mb-2'>Desarrollo Fullstack</h4>
                            <h4 className='text-sm text-zinc-500'>React Node.js Material-UI</h4>
                        </div>
                        <div className=" bg-yellow-800 pt-12 ps-2 flex justify-center w-full">
                            <Image src={asFrame} width={400} alt="Frame antistampa web" />
                        </div>
                    </div>
                </Link>

                <Link target="_blank" href="https://emilianoaloi.github.io/ShowBiz/index.html" rel="noopener noreferrer">
                    <div className='w-full bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden'>
                        <div className='flex flex-col  justify-center w-3/5 p-5 '>
                            <Image src={swLogo} width={100} alt="showbiz Logo" className="mb-4" />
                            <h3 className='text-lg font-semibold '>ShowBiz</h3>
                            <h4 className='text-sm text-zinc-500 mb-2'>Desarrollo Frontend</h4>
                            <h4 className='text-sm text-zinc-500'>HTML CSS Javascript</h4>
                        </div>
                        <div className="bg-gray-800 pt-12 ps-2 flex justify-center w-full ">
                            <Image src={swFrame} width={400} alt="Frame showbiz web" />
                        </div>
                    </div>
                </Link>


                <Link target="_blank" href="https://phonefix.netlify.app/" rel="noopener noreferrer">
                    <div className='bgCards flex rounded-2xl border-t border-white border-l border-r border-opacity-10 overflow-hidden '>
                        <div className='flex flex-col  justify-center w-3/5 p-5 '>
                            <Image src={pfLogo} width={50} alt="phoneFix Logo" className="mb-4" />
                            <h3 className='text-lg font-semibold '>phoneFix Belgrano</h3>
                            <h4 className='text-sm text-zinc-500 mb-2'>Desarrollo Frontend</h4>
                            <h4 className='text-sm text-zinc-500'>HTML CSS Bootstrap Saas</h4>
                        </div>
                        <div className=" bg-cyan-900 pt-12 ps-2 flex justify-center w-full">
                            <Image src={pfFrame} width={400} alt="Frame phonefix web" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Projects