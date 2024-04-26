"use client"

import Image from "next/image";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import coderhouse from "../../public/coderhouse.png"


const Timeline = () => {
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
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
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
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
                    User Experience, Visual Design
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