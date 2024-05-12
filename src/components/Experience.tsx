import Timeline from "./Timeline"
import { FC } from "react"


const Experience: FC = () => {
    return (
        <section className="w-full max-w-screen-lg mx-auto mb-28 flex flex-col mt-10 ">
            <h2 className='text-5xl font-bold mb-14'>Experiencia </h2>
            <Timeline />
        </section>

    )
}

export default Experience