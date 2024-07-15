
//===background and border setting of button and content is setted by controllers==//

import React from 'react'
import { IGradientBox } from '@/types/GradientBox'
import './GradientBox.scss';

//======================= set background as string==================//
// gradientback,grayback
//==================================================================//
const GradientBox: React.FC<IGradientBox> = ({ showBox, setbackground, setlabelback, cardclassName, cardstyle, divclassNamebot, divstylebot, divclassNametop,
    divstyletop, imgclassName, imgstyle, labelclassName, labelstyle, iconsrc, iconalt, text_centertop, text_centerbot, text_label, children, children_text, children1 }) => {
    const baseClassNameOfbtn = "textFont flex flex-row justify-between items-center w-full h-full rounded-[12px]  px-[4px] ";
    const baseClassNameOflabel = "labelfont flex justify-center items-center h-[19px] rounded-[100px] px-[6px] mx-[2px] "
    const basedivclassNametop = "text-[14px] text-[white] ";
    const basedivclassNamebot = "text-[14px] text-[white] ";

    return (
        <form className={`w-full mt-[14px] m-auto  hover-animate ${showBox ? 'block' : 'hidden'}` + ' ' + cardclassName}>
            <button className={baseClassNameOfbtn + " " + setbackground} style={cardstyle}>
                <img src={iconsrc} alt={iconalt} className={" object-fill w-[24px] h-[24px] " + " " + imgclassName} style={imgstyle} />
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='flex flex-row justify-between items-center w-full pl-2'>
                        <div className={basedivclassNametop + " " + divclassNametop} style={divstyletop}>{text_centertop} </div>
                        <label className={baseClassNameOflabel + " " + setlabelback} style={labelstyle}>{text_label}</label>
                    </div>
                    <div className={basedivclassNamebot + " " + divclassNamebot} style={divstylebot}>{text_centerbot} </div>
                    {children1}
                </div>
                {children}
            </button>
        </form>
    )
}

export default GradientBox


// bg - [#191E1E] border border - [#7D9596]