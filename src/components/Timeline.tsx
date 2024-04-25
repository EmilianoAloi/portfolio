"use client"

import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
const Timeline = () => {
    return (
        <VerticalTimeline animate={true}  >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                visible={true}
                contentStyle={{ background: '', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="ene. 2024 - abr 2024"
                iconStyle={{ background: '#1DB954', color: '#fff' }}
                icon={<MdOutlineWork  />}
            >
                <h3 className="vertical-timeline-element-title">Desarrollador de Software</h3>
                <h4 className="vertical-timeline-element-subtitle">BlackNexus SPA (Chile)</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                visible={true}
                contentStyle={{ background: '', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="ene. 2023 - dic 2023"
                iconStyle={{ background: '#1DB954', color: '#fff' }}
                icon={<MdOutlineWork  />}
            >
                <h3 className="vertical-timeline-element-title">Desarrollador Frontend</h3>
                <h4 className="vertical-timeline-element-subtitle">Dragones (Arg)</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWork  />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>)
}

export default Timeline