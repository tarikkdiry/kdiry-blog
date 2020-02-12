import React from "react";
import contactFormStyles from "./index.module.scss";

const ContactForm = () => {
    return (
        <div className={contactFormStyles.container}>
            <h2>Wanna chat?</h2>
            <div className={contactFormStyles.form}>
                <div class="field">
                    <p class="control">
                        <input class="input" type="email" placeholder="Name" />
                        {/* <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span> */}
                        {/* <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span> */}
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <input class="input" type="password" placeholder="Email" />
                        {/* <span class="icon is-small is-left"> 
                            <i class="fas fa-lock"></i>
                        </span> */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm