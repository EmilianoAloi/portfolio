"use client"

import Image from "next/image";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { PiStudentFill } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import coderhouse from "../../public/coderhouse.png"
import { FC } from "react"


const Timeline: FC = () => {
    return (
        <VerticalTimeline animate={true} lineColor="">
            <VerticalTimelineElement
                className="vertical-timeline-element--work "
                visible={true}
                contentStyle={{ background: '', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="ene. 2024 - abr 2024"
                iconStyle={{ background: '#171717', color: '#fff' }}
                icon={<MdWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title font-semibold text-lg">Desarrollador Fullstack</h3>
                <h4 className="vertical-timeline-element-subtitle text-zinc-500 ">BlackNexus SPA (CHILE)</h4>
                <p>
                    Me uni al equipo Frontend y contribuí activamente en el desarrollo de un POS (Point of Sell) utilizando JavaScript, Next y Tailwind CSS. <br /> <br />
                    - Expandí mi rol desarrollando APIs en el Backend utilizando Django, y PostgreSQL. <br /><br />
                    - Aprendí a trabajar en un entorno de desarrollo colaborativo utilizando Git y Github. <br /><br />
                    - Participé en reuniones diarias para la planificación y el seguimiento de tareas.                </p>
                <div className="rounded-md overflow-hidden pt-8">
                    <iframe src="https://drive.google.com/file/d/1yBBfMYJRdY21RpHiwFGzFLX3ybp6r8GQ/preview" width="100%" height="200" allow="autoplay"></iframe>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                visible={true}
                contentStyle={{ background: '', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="ene. 2023 - dic 2023"
                iconStyle={{ background: '#171717', color: '#fff' }}
                icon={<MdWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title font-semibold text-lg">Desarrollador Frontend</h3>
                <h4 className="vertical-timeline-element-subtitle text-zinc-500 ">Dragones (ARG)</h4>
                <p>
                    Me uni al equipo de Diseño como Desarrollador Frontend y contribuí en el desarrollo de aplicaciones utilizando JavaScript, TypeScript, React, Tailwind CSS y Material-UI. <br /> <br />
                    - Implementé mejoras de performance en las aplicaciones existentes.  <br /><br />
                    - Trabajé estrechamente con el equipo de diseñadores.  <br /><br />
                    - Investigué y propuse la adopción de nuevas tecnologías y frameworks.  <br /><br />
                    - Participé en reuniones diarias para la planificación y el seguimiento de tareas.
                </p>
                <div className="rounded-md overflow-hidden pt-8">
                    <iframe src="https://drive.google.com/file/d/11-9kiUCedmMwNjxx5_7RI58AMFBdrdFS/preview" width="100%" height="200" allow="autoplay"></iframe>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                visible={true}
                contentStyle={{ background: '', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #171717' }}
                date="abril 2022 - 2023"
                iconStyle={{ background: '#171717', color: '#fff' }}
                icon={<PiStudentFill />}
            >
                <h3 className="vertical-timeline-element-title font-semibold">Desarrollador Frontend</h3>
                <h4 className="vertical-timeline-element-subtitle text-zinc-500 ">Coderhouse</h4>
                <p>
                    -  Implementación de componentes funcionales y hooks  <br /><br />
                    -  HTML5, CSS3, JavaScript (ES6+), herramientas como Webpack, Babel y npm. <br /><br />
                    - Lógica de programación  <br /><br />

                </p>
                <Link
                    target="_blank"
                    href="https://www.coderhouse.com/ar/certificados/648f98ed9f73ad0002cd86ef?lang=es"  >
                    <Image src={coderhouse} width={400} alt="certificado" className="mt-8 rounded" />
                </Link>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline