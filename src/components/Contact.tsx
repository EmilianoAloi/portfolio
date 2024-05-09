
const Contact = () => {
    return (
        <section className="w-full max-w-screen-lg mx-auto flex flex-col my-28 gap-1 mb-10">
            <div className='flex flex-col gap-1 mb-10'>
                <h2 className='text-5xl font-bold'>Contacto</h2>
                <p className='text-md text-zinc-500'>Completá el siguiente formulario y te responderé dentro de las próximas 24 horas.</p>
            </div>

            <form action="" className="grid grid-flow-row-dense grid-cols-3 grid-rows-5 gap-2">

                <div className="flex flex-col gap-1 w-75">
                    <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                        1
                    </p>
                    <label htmlFor="name" className="font-semibold text-xl">Como te llamas?</label>
                    <p className="label-required font-semibold text-xs">REQUIRED</p>
                </div>


                <div className="flex items-center col-span-2">
                    <input type="text" id="name" name="name" className="w-full" />
                </div>



                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />


                <div>

                </div>







            </form>

        </section>
    )
}

export default Contact