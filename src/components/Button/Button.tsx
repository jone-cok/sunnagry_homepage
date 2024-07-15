import React, { FC } from 'react'

import { IButton } from "@/types/Button";

const Button: React.FC<IButton> = ({ formclassName, formstyle, buttonclassName, buttonstyle, imgclassName, imgstyle, iconsrc, iconalt, text, children }) => {
    // const customStyle: React.CSSProperties = {
    //     backgroundColor: 'blue',
    //     color: 'white',
    //     padding: '10px 20px',
    //     borderRadius: '5px',
    // };
    return (
        <form className={formclassName + " " + "hover-animate"} style={formstyle}>
            <img src={iconsrc} alt={iconalt} className={imgclassName} style={imgstyle} />
            <button style={buttonstyle} className={buttonclassName}>
                {text}
                {children}
            </button>
        </form >
    )
}

export default Button;
