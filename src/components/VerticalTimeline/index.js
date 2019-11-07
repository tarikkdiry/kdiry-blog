import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../styles/global.scss';

/*======================================================
REMEMBER TO GO BACK AND MAKE THE COLORS DYNAMIC!
=======================================================*/

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                style={{ color: 'black' }}
                date="August, 2015"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>Attending Stevens Institute of Technology</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Started attending <i style={{fontWeight: 'bold'}}> Stevens Institute of Technology</i>, majoring in <bold>Software Engineering</bold> under the School of Systems and Enterprise.
                </p>
                <p style={{color: '#4A7078' }}>
                    While I dabbled in various extra-curriculars, I was primarily the Editor-in-Chief of the campus newspaper,<i style={{fontWeight: 'bold'}}> The Stute</i>. 10/16 to 10/17.
                </p>
                <br></br>
                <h4 style={{ color: '#4A7078' }}>
                    C++ | Java | Ruby | Python | Javascript 
                </h4>
                <p style={{color: '#4A7078' }}>
                    Hoboken, NJ
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                date="May, 2016 - August, 2016"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>iThreat Cyber Group</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Software Engineering Intern for cyber threat intelligence company <bold>iThreat Cyber Group.</bold> Primarily focused on front-end web development and code refactoring.
                </p>
                <br></br>
                <h4 style={{ color: '#4A7078' }}>
                    PHP | MySQL
                </h4>
                <p style={{ color: '#4A7078' }}>
                    Stroudsburg, PA | Princeton, NJ
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                date="September, 2016 - January, 2017"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>Stevens Institute of Technology</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Teacher's Assistant for course E-115 Introduction to Programming, an exploratory programming course taught in C++ for all Freshman Engineering students.
                </p>
                <br></br>
                <h4 style={{ color: '#4A7078' }}>
                    C++
                </h4>
                <p style={{ color: '#4A7078' }}>
                    Hoboken, NJ
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                date="May, 2017 - May, 2019"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>Marsh & McLennan Companies</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Joined the HRIS team as a SharePoint Content Administrator where I was responsible for redesigning existing and building new community sites within the SharePoint environment.
                </p>
                <p style={{ color: '#4A7078' }}>
                    Throughout my time in this role, I have been exposed to operations in an Agile environment, utilized tools written in Python such as Pandas in order to develop and visualize meaningful reports, and developed components using Angular5 for tools within SharePoint.
                </p>
                <br></br>
                <h4 style={{ color: '#4A7078' }}>
                    PHP | Python | Angular5
                </h4>
                <p style={{ color: '#4A7078' }}>
                    Hoboken, NJ | New York, NY
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                date="May, 2019"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>Graduated Stevens Institute of Technology <br></br><br></br></h3>
                <h5 style={{ color: '#4A7078' }}>B.E. Software Engineering</h5>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Joined the HRIS team as a SharePoint Content Administrator where I was responsible for redesigning existing and building new community sites within the SharePoint environment.
                </p>
                <p style={{ color: '#4A7078' }}>
                    Hoboken, NJ
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADFE1', color: '#F2EDE9' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                date="June, 2019 - Present"
                iconStyle={{ background: '#4A7078', color: '#F2EDE9' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: '#4A7078' }}>Marsh & McLennan Companies</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p style={{ color: '#4A7078' }}>
                    Began full-time in my new role, Applications Developer. 
                </p>
                <p style={{ color: '#4A7078' }}>
                    In concurrence with the advancement of my skills in front-end web development, I am applying my knowledge and experience in the realm of HR technology, data analytics, and operations.
                </p>
                <br></br>
                <h4 style={{ color: '#4A7078' }}>
                    ReactJS/Native | PHP | jQuery | Python 
                </h4>
                <p style={{ color: '#4A7078' }}>
                    Hoboken, NJ | New York, NY
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline