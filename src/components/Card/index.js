import React from "react";

const Card = ({title, date, url, img}) => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src={img}></img>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <h1 class="title is-4">{title}</h1>
                    </div>
                </div>
                <div class="content">
                    <br></br>
                    <time datetime={date}></time>
                </div>
            </div>
        </div>
    )
}

export default Card