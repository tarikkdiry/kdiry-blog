import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLineStyles from './index.module.scss';
import '../../styles/global.scss';

/*======================================================
REMEMBER TO GO BACK AND MAKE THE COLORS DYNAMIC!
=======================================================*/

const Timeline = () => {
    return (
        <VerticalTimeline>
            <div className={TimeLineStyles.container}>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    style={{ color: 'black' }}
                    date="August, 2015"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Attending Stevens Institute of Technology</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Started attending <i style={{fontWeight: 'bold', color: '#FD9374'}}> Stevens Institute of Technology</i>, majoring in <bold>Software Engineering</bold> under the School of Systems and Enterprise.
                    </p>
                    <p style={{color: '#F2EDE9' }}>
                        While I dabbled in various extra-curriculars, I was primarily the Editor-in-Chief of the campus newspaper,<i style={{fontWeight: 'bold', color: '#FD9374'}}> The Stute</i>. 10/16 to 10/17.
                    </p>
                    <p style={{ color: '#F2EDE9'}}>
                        In addition, I took on the role of Teacher's Assistant for course E-115 Introduction to Programming, an exploratory programming course taught in C++ for all Freshman Engineering students.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        C++ | Java | Ruby | Python | Javascript 
                    </h4>
                    <p style={{color: '#F2EDE9' }}>
                        Hoboken, NJ
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="May, 2016 - August, 2016"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>iThreat Cyber Group</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Software Engineering Intern for cyber threat intelligence company <i style={{color: '#FD9374'}}>iThreat Cyber Group.</i> Primarily focused on front-end web development and code refactoring.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        PHP | MySQL
                    </h4>
                    <p style={{ color: '#F2EDE9' }}>
                        Stroudsburg, PA | Princeton, NJ
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="May, 2017 - May, 2019"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Marsh & McLennan Companies</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Joined the HRIS team as a SharePoint Content Administrator where I was responsible for redesigning existing and building new community sites within the SharePoint environment.
                    </p>
                    <p style={{ color: '#F2EDE9' }}>
                        Throughout my time in this role, I have been exposed to operations in an Agile environment, utilized tools written in Python such as Pandas in order to develop and visualize meaningful reports, and developed components using Angular5 for tools within SharePoint.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        PHP | Python | Angular5
                    </h4>
                    <p style={{ color: '#F2EDE9' }}>
                        Hoboken, NJ | New York, NY
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="May, 2019"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Graduated Stevens Institute of Technology <br></br><br></br></h3>
                    <h5 style={{ color: '#FD9374' }}>B.E. Software Engineering</h5>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Concluded my time at Stevens as an undergraduate student and obtaining a Bachelor of Engineering in Software Engineering. 
                    </p>
                    <p style={{ color: '#F2EDE9' }}>
                        Hoboken, NJ
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="June, 2019 - Present"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Marsh & McLennan Companies</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Began full-time in my new role, Applications Developer. 
                    </p>
                    <p style={{ color: '#F2EDE9' }}>
                        In concurrence with the advancement of my skills in front-end web development, I am applying my knowledge and experience in the realm of HR technology, data analytics, and operations.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        ReactJS/Native | PHP | jQuery | Python 
                    </h4>
                    <p style={{ color: '#F2EDE9' }}>
                        Hoboken, NJ | New York, NY
                    </p>
                </VerticalTimelineElement>
            </div>
        </VerticalTimeline>
    )
}

export default Timeline