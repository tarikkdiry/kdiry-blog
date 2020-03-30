import React from "react";
import facebookIcon from "../../assets/icons/logo-instagram.svg";
import socialStyles from "../Social/index.module.scss";

const Social = ({name, url}) => {
    return (
        <div className={socialStyles.container}>
            {/* <Link to=""> */}
                <div className={socialStyles.circle}>
                    <div className={socialStyles.icon}>
                        <img
                            src={facebookIcon}
                            className={socialStyles.icon}
                        />
                    </div>
                </div>
            {/* </Link> */}
        </div>
    )
}

export default Social