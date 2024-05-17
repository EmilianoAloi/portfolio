import { motion } from "framer-motion"
import { FC, useRef } from "react"
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

const Contact: FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendEmail(e as unknown as React.FormEvent<HTMLFormElement>);
    };


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentForm = form.current;
        const formData = new FormData(e.currentTarget);

        // Validar los campos del formulario
        const name = formData.get('user_name') as string;
        const email = formData.get('user_email') as string;
        const message = formData.get('user_message') as string;

        // Validación del formato de correo electrónico 
        const isValidEmail = (email: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        // Mostrar mensaje de error si hay campos vacíos
        if (!name || !email || !message) {
            toast.error('Por favor completa todos los campos.');
            return;
        }

        // Mostrar mensaje de error si el formato del correo electrónico es inválido
        if (!isValidEmail(email)) {
            toast.error('Por favor ingresa un correo electrónico válido.');
            return;
        }

        if (currentForm == null) return;

        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            console.error("Missing environment variables for emailJS");
            return;
        }

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                currentForm,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                })
            .then(
                () => {
                    console.log('Enviado!');
                    toast.success('Mensaje enviado con éxito! ');
                    currentForm.reset();
                },
                (error) => {
                    console.log('Fallo...', error.text);
                    toast.error('Algo ha fallado, intente de nuevo. ');
                },
            );
    };

    return (
        <>
            <motion.section
                id="contact"
                className="mx-4 w-full lg:max-w-screen-lg lg:mx-auto flex flex-col gap-1 mb-10 hidden lg:flex"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className='flex flex-col gap-1 mb-14'>
                    <h2 className='text-5xl font-bold'>Contacto</h2>
                    <p className='text-md text-zinc-500'>Completá el siguiente formulario y te responderé dentro de las próximas 24 horas.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="grid grid-flow-row-dense grid-cols-5 grid-rows-13 gap-20">
                    {/* Name */}
                    <div className="flex flex-col col-span-2 gap-1">
                        <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                            1
                        </p>
                        <label htmlFor="name" className="font-semibold text-xl">Como te llamas?</label>
                        <p className="label-required font-semibold text-xs">REQUIRED</p>
                    </div>
                    <div className="flex items-end col-span-3 ">
                        <input type="text" id="name" name="user_name" className="w-full px-6" placeholder="Escribe tu nombre completo" />
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
                        <input type="text" id="email" name="user_email" className="w-full px-6" placeholder="ejemplo@gmail.com" />
                    </div>
                    {/* TextArea */}
                    <div className="flex flex-col col-span-2 row-span-2 gap-1">
                        <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                            3
                        </p>
                        <label htmlFor="message" className="font-semibold text-xl">¿Me contas sobre tu proyecto / producto / empresa en pocas palabras?</label>
                        <p className="label-required font-semibold text-xs">REQUIRED</p>
                    </div>
                    <div className="flex items-start pt-6 col-span-3 row-span-2 ">
                        <textarea id="message" rows={10} name="user_message" className="w-full p-4" placeholder="Escribe tu consulta" />
                    </div>
                    <button className="form-button col-span-5 justify-self-end font-extrabold px-6 py-4 rounded-full">Enviar Mensaje</button>
                </form>
            </motion.section>



            {/* Mobile Version */}

            <motion.section
                id="contact"
                className="px-4 w-full lg:max-w-screen-lg lg:mx-auto flex flex-col gap-1 mb-10 lg:hidden"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className='flex flex-col gap-1 mb-8'>
                    <h2 className='text-4xl lg:text-5xl font-bold'>Contacto</h2>
                </div>

                <form ref={form} onSubmit={sendEmail} className="flex flex-col">

                    {/* Name */}
                    <div className="flex w-full flex-col gap-1 mb-2">
                        <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                            1
                        </p>
                        <label htmlFor="name" className="font-semibold text-md">Como te llamas?</label>
                        <p className="label-required font-semibold text-xs">REQUIRED</p>
                    </div>
                    <div className="flex items-end mb-10">
                        <input type="text" id="name" name="user_name" className="w-full px-4 text-xs" placeholder="Escribe tu nombre completo" />
                    </div>

                    {/* Email */}
                    <div className="flex w-full flex-col gap-1 mb-2">
                        <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                            2
                        </p>
                        <label htmlFor="email" className="font-semibold text-md">Cual es tu correo electrónico?</label>
                        <p className="label-required font-semibold text-xs">REQUIRED</p>
                    </div>
                    <div className="flex items-end mb-10">
                        <input type="text" id="email" name="user_email" className="w-full px-6 text-xs" placeholder="ejemplo@gmail.com" />
                    </div>

                    {/* TextArea */}
                    <div className="flex w-full flex-col gap-1 mb-2">
                        <p className="flex items-center justify-center text-zinc-500 w-5 h-5 text-xs font-bold border-solid border-2 border-zinc-500 rounded-full ">
                            3
                        </p>
                        <label htmlFor="message" className="font-semibold text-md">¿Me contas sobre tu proyecto / producto / empresa ?</label>
                        <p className="label-required font-semibold text-xs">REQUIRED</p>
                    </div>
                    <div className="">
                        <textarea id="message" rows={8} name="user_message" className="w-full p-4 text-xs" placeholder="Escribe tu consulta" />
                    </div>

                    <div className="mt-10 text-end">
                        <button className="form-button font-extrabold text-sm px-6 py-3 rounded-full ">Enviar Mensaje</button>
                    </div>
                </form>
            </motion.section>
            <Toaster position="top-right" richColors />
        </>
    )
}

export default Contact




