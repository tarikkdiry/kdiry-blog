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
                    date="August, 2015 - May, 2019"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Stevens Institute of Technology</h3>
                    <p style={{color: '#F2EDE9' }}>
                        Hoboken, NJ
                    </p>
                    <br></br>
                    <hr></hr>
                    <p style={{ color: '#F2EDE9' }}>
                        Started attending <a href="https://www.stevens.edu/" target="_blank"><i style={{color: '#FD9374'}}>Stevens Institute of Technology</i></a>, majoring in <bold>Software Engineering</bold> under the School of Systems and Enterprise.
                    </p>
                    <p style={{color: '#F2EDE9' }}>
                        During my time here I became the Editor-in-Chief of the campus newspaper,<a href="https://thestute.com/" target="_blank"><i style={{color: '#FD9374'}}> The Stute</i></a>.
                    </p>
                    <p style={{ color: '#F2EDE9'}}>
                        Teacher's Assistant for course E-115 Introduction to Programming, an exploratory programming course taught in C++ for all Freshman Engineering students.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        C++ | Java | Ruby | Python | Javascript 
                    </h4>
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
                    <p style={{ color: '#F2EDE9' }}>
                        Stroudsburg, PA | Princeton, NJ
                    </p>
                    <br></br>
                    <hr></hr>
                    <p style={{ color: '#F2EDE9' }}>
                        Software Engineering Intern for cyber threat intelligence company <a href="https://ithreat.com/" target="_blank"><i style={{color: '#FD9374'}}>iThreat Cyber Group.</i></a> Primarily focused on front-end web development and code refactoring.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        PHP | MySQL
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="May, 2017 - May, 2019"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Intern at Marsh & McLennan Companies</h3>
                    <p style={{ color: '#F2EDE9' }}>
                        Hoboken, NJ | New York, NY
                    </p>
                    <br></br>
                    <hr></hr>
                    <p style={{ color: '#F2EDE9' }}>
                        Joined the HRIS team as a SharePoint Content Administrator where I was responsible for redesigning existing and building new community sites within the SharePoint environment.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        ReactJS/Native | PHP | jQuery | Python 
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1D2731', color: '#F2EDE9', border: 'solid #F2EDE9' }}
                    contentArrowStyle={{ borderRight: '7px solid  #DADFE1' }}
                    date="June, 2019 - Present"
                    iconStyle={{ background: '#F2EDE9', color: '#F2EDE9' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title" style={{ color: '$font-white' }}>Applications Developer at Marsh & McLennan Companies</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p style={{ color: '#F2EDE9' }}>
                        Hoboken, NJ | New York City, NY
                    </p>
                    <br></br>
                    <hr></hr>
                    <p style={{ color: '#F2EDE9' }}>
                        Started full-time in my new role where I currently spend my time finding problems I can solve and tools I can build using Javascript.
                    </p>
                    <br></br>
                    <h4 style={{ color: '#FD9374' }}>
                        ReactJS/Native | PHP | jQuery | Python 
                    </h4>
                </VerticalTimelineElement>
            </div>
        </VerticalTimeline>
    )
}

export default Timeline