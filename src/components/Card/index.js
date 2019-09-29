import React from "react";
import "../Card/index.scss";

const Card = ({title, date, url}) => {
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
                <h4>{title}</h4>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Card