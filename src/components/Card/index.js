import React from "react";
import testImage from "../../assets/images/tarik_profile.png";
import "../Card/index.scss";

const Card = ({title, date, url, img}) => {
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
            <img src={testImage} alt="Placeholder"/>
            <div class="container">
                <h4>{title}</h4>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Card