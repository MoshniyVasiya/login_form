import React from 'react';
import './ThirdPartyServicesAuth.scss';
import ThirdPartyServicesAuthBtn from './ThirdPartyServicesAuthBtn/ThirdPartyServicesAuthBtn';
import MicrosoftPic from '../../assets/images/Microsoft_logo.png';
import GooglePic from '../../assets/images/Google_Logo.png';

const ThirdPartyServicesAuth = () => {
    return (
        <div className="third-party-auth__wrapper">
            <ThirdPartyServicesAuthBtn img={GooglePic} text="Google" />
            <ThirdPartyServicesAuthBtn img={MicrosoftPic} text="Microsoft" />
        </div>
    )
}

export default ThirdPartyServicesAuth;