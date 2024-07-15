import React from 'react'


import { IPictureCard } from '@/types/Card';
import '@/styles/PictureCard.scss';

const PictureCard: React.FC<IPictureCard> = ({ cardclassName, cardstyle, divclassName, divstyle, imgclassName, imgstyle, imgsrc, imgalt, text, children }) => {

    return (
        <form className={"flex flex-row justify-between items-center w-full h-[199px] rounded-[12px] bg-[#191E1E] border border-[#7D9596]  my-[12px] hover-animate-back" + " " + cardclassName} style={cardstyle}>
            <a href='#' className={'w-[50%] h-full hover-animate-back' + ' ' + imgclassName} >
                <img src={imgsrc} alt={imgalt} className={"form-image object-fill w-full h-full rounded-[12px]"} style={imgstyle} />
            </a>
            {children}
        </form >
    )
}

export default PictureCard
