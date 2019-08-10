import React from "react";

const Card = ({title, date, url, img}) => {
    return (
        <div class="card">
            {/* <div class="card-image">
                <figure class="image is-4by3">
                <img src={img}></img>
                </figure>
            </div> */}
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
        // <div class="card">
        //     <div class="card-content">
        //         <p class="title">
        //             {title}
        //         </p>
        //         <p class="subtitle">
        //             <time datetime={date}></time>
        //         </p>
        //     </div>
        //     <footer class="card-footer">
        //         <p class="card-footer-item">
        //         <span>
        //             View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
        //         </span>
        //         </p>
        //         <p class="card-footer-item">
        //         <span>
        //             Share on <a href="#">Facebook</a>
        //         </span>
        //         </p>
        //     </footer>
        // </div>
    )
}

export default Card