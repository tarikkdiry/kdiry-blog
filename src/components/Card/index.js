import React from "react";
import '../../styles/global.scss';
import "../Card/index.scss";

const Card = ({title, date, url, forward}) => {
    return (
        <div class="contentCard">
            <div class="container">
                <p>{date}</p>
                <h3>{title}</h3>
                <h6>{forward}</h6>
                <br></br>
            </div>
        </div>
    )
}

export default Card