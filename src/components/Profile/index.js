import React from "react";
import ProfileImage from "../../assets/images/tarik_profile.png";
import profileStyles from './index.module.scss';

const Profile = () => {
    return (
        <div className={profileStyles.profile}>
            <img src={ProfileImage}></img>
        </div>
    )
}

export default Profile