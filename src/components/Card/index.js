import React from "react";
import "../Card/index.scss";

const Card = ({title, date, url, forward}) => {
    return (
        // <div class="card">
        //     <div class="card-content">
        //     <p class="title">
        //         {title}
        //     </p>
        //     <p class="subtitle">
        //         {date}
        //     </p>
        //     </div>
        // </div>
        <div class="contentCard">
            {/* <img src={testImage} alt="Placeholder"/> */}
            <div class="container">
                <p>{date}</p>
                <h4>{title}</h4>
                <h6>{forward}</h6>
                <br></br>
            </div>
        </div>
    )
}

export default Card