import React from "react";
import bioStyles from "../Bio/index.module.scss";

const Bio = () => {
    return (
        <div className={bioStyles.container}>
            <div className={bioStyles.bio}>
                <h2>about me.</h2>
                <p>
                    Hello! My name is Tarik Kdiry and I'm a software engineer based out of beautiful Hoboken, NJ. 
                    Using modern tools and frameworks, I love to build for the web. I began my career as a student at <a href="https://www.stevens.edu/" target="_blank">Stevens Insitute of Technology</a> where I was pursuing a Bachelor of Engineering in Software Engineering.
                </p>
                <p>
                    During my time there, I assumed both front-end and back-end roles in various internship opportunities, class projects, and of course, <a href="https://github.com/tarikkdiry" target="_blank">personal projects.</a> Upon graduation, and as of now, I joined full-time as an Applications Developer at 
                    Marsh & McLennan Co. 
                </p>
                <p>
                    When I'm not behind a screen, I love to travel, watch movies, listen to/play music, learn new languages, etc. 
                    While I do try to pursue lots of passions, I try to incorporate one of my longest-standing interests, writing, into every hobby. With that, check out my <a href='https://tarikkdiry.com/blog/' target="_blank">blog</a> where I try to regularly update you on any of my travels, fashion tidbits, coding, and everything in between.
                </p>
                <p>
                    Check out my timeline below!
                </p>
            </div>
            <div>
                {/* <Profile></Profile> */}
            </div>
        </div>
    )
}

export default Bio