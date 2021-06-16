import React from 'react';

const ThirdPartyServicesAuthBtn = ({ img, text }) => {
    return (
        <button onClick={e => e.preventDefault()} className="third-party-auth__btn">
            <img src={img} alt={text} />
            <span>Continue with {text}</span>
        </button>
    )
}

export default ThirdPartyServicesAuthBtn;