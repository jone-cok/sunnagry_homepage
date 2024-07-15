import React from 'react'


import { IPictureCard } from '@/types/Card';
import '@/styles/PictureCard.scss';

const PictureCard: React.FC<IPictureCard> = ({ cardclassName, cardstyle, imgclassName, imgstyle, imgsrc, imgalt, text, imgsrc_top, text_bot_left, iconsrc_bot_left, text_bot_right, iconsrc_bot_right,show_icon_top,show_text_bot, children }) => {

    return (
        <form className={"relative flex flex-row justify-between items-center w-full h-[199px] rounded-[12px] bg-[#191E1E] border border-solid border-[#7D9596]  my-[12px] hover-animate-back" + " " + cardclassName} style={cardstyle}>
            <a href='#' className={'w-[50%] h-full hover-animate-back' + ' ' + imgclassName} >
                <img src={imgsrc} alt={imgalt} className={"form-image object-fill w-full h-full rounded-[12px]"} style={imgstyle} />
            </a>
            <img src={imgsrc_top} alt='top' className={'absolute top-0 left-1/4  transform -translate-x-1/2' + ' ' + show_icon_top} />
            <div className={'absolute bottom-[8px] left-[8px] flex-row justify-between items-center w-[14.7%] h-[25px] border border-solid border-[#C6C1AE] border-opacity-[24%] px-[4px] py-[8px] rounded-[100px] bg-[#191E1E] bg-opacity-25' + ' ' + show_text_bot}> 
                <img src={iconsrc_bot_left} alt='botl' className='' />
                <div className='font-koc font-normal text-[14px] leading-[17.2px] text-[#C6C1AE]'>{text_bot_left}</div>
            </div>
            <div className={'absolute bottom-[8px] right-1/2 transform  -translate-x-1/4 flex-row justify-between items-center w-[14.7%] h-[25px] border border-solid border-[#C6C1AE] border-opacity-[24%] px-[4px] py-[8px] rounded-[100px] bg-[#191E1E] bg-opacity-25' + ' '+ show_text_bot}>
                {/* <img src={iconsrc_bot_right} alt='botl' className='' /> */}
                <div className={'font-koc font-normal text-[14px] leading-[17.2px] text-[#C6C1AE]'}>#</div>
                <div className={'font-koc font-normal text-[14px] leading-[17.2px] text-[#C6C1AE]'}>{text_bot_right}</div>
            </div>
            <div></div>
            {children}
        </form >
    )
}

export default PictureCard
