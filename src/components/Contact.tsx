import { FC } from "react"

const Contact: FC = () => {
    return (
        <section id="contact" className="px-4  w-full lg:max-w-screen-lg lg:mx-auto flex flex-col gap-1 mb-10 lg:hidden">
            <div className='flex flex-col gap-1 mb-14'>
                <h2 className='text-4xl lg:text-5xl font-bold'>Contacto</h2>
                <p className='text-md text-zinc-500'>Completá el siguiente formulario y te responderé dentro de las próximas 24 horas.</p>
            </div>

            <form action="" className="grid grid-cols-4 grid-rows-6 lg:grid-flow-row-dense  lg:grid-cols-5 lg:grid-rows-13 lg:gap-20  ">

                {/* Name */}
                <div className="flex w-full col-span-4 flex-col lg:col-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        1
                    </p>
                    <label htmlFor="name" className="font-semibold text-xl">Como te llamas?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-end col-span-4 row-start-2 lg:col-span-3 mb-10">
                    <input type="text" id="name" className="w-full px-6" placeholder="Escribe tu nombre completo" />
                </div>

                {/* Email */}
                <div className="flex flex-col col-span-4 lg:col-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        2
                    </p>
                    <label htmlFor="email" className="font-semibold text-xl ">Cual es tu correo electrónico?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-end col-span-4 row-start-4 lg:col-span-3 mb-10">
                    <input type="text" id="email" className="w-full px-6" placeholder="ejemplo@gmail.com" />
                </div>

                {/* TextArea */}
                <div className="flex flex-col col-span-4 lg:col-span-2 row-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        3
                    </p>
                    <label htmlFor="message" className="font-semibold text-xl">¿Me contas sobre tu proyecto / producto / empresa en pocas palabras?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-start lg:pt-6 col-span-4 row-start-7 lg:col-span-3">
                    <textarea id="message" rows={10} className="w-full p-4" placeholder="Escribe tu consulta" />
                </div>

            </form>
            <button className="form-button col-span-5  row-start-10 justify-self-end font-extrabold px-6 py-4 rounded-full mt-2">Enviar Mensaje</button>

        </section>
    )
}

export default Contact



