
const Contact = () => {
    return (
        <section className="w-full max-w-screen-lg mx-auto flex flex-col my-28 gap-1 mb-10">
            <div className='flex flex-col gap-1 mb-20'>
                <h2 className='text-5xl font-bold'>Contacto</h2>
                <p className='text-md text-zinc-500'>Completá el siguiente formulario y te responderé dentro de las próximas 24 horas.</p>
            </div>

            <form action="" className="grid grid-flow-row-dense grid-cols-5 grid-rows-13 gap-20">

                {/* Name */}
                <div className="flex flex-col col-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        1
                    </p>
                    <label htmlFor="name" className="font-semibold text-xl">Como te llamas?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-end col-span-3 ">
                    <input type="text" id="name" className="w-full px-6" placeholder="Escribe tu nombre completo" />
                </div>

                {/* Email */}
                <div className="flex flex-col col-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        2
                    </p>
                    <label htmlFor="email" className="font-semibold text-xl">Cual es tu correo electrónico?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-end col-span-3 ">
                    <input type="text" id="email" className="w-full px-6" placeholder="ejemplo@gmail.com" />
                </div>

                {/* TextArea */}
                <div className="flex flex-col col-span-2 row-span-2 gap-1">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        3
                    </p>
                    <label htmlFor="message" className="font-semibold text-xl">¿Me contas sobre tu proyecto / producto / empresa en pocas palabras?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>
                <div className="flex items-start pt-6 col-span-3 row-span-3 ">
                    <textarea id="message" rows={10} className="w-full p-4" placeholder=" Escribe tu consulta" />
                </div>

                <button className="form-button col-span-5 justify-self-end font-extrabold px-6 py-4 rounded-full">Enviar Mensaje</button>

            </form>
        </section>
    )
}

export default Contact