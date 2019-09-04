import React from "react";
import './index.scss';

const ContactForm = () => {
    return (
        <div class="field">
            <br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Name"></input>
            </div>
            <br></br>
            <div class="control">
                <input class="input" type="text" placeholder="Email"></input>
            </div>
            <br></br>
            <div class="control">
                <textarea class="textarea" placeholder="Let's hear it!"></textarea>
            </div>
            <br></br>
            <div class="submitButton">
                <a class="button">Submit</a>
            </div>
        </div>
    )
}

export default ContactForm