import React from 'react'

import { INopCard } from '@/types/Card';


const NopCard: React.FC<INopCard> = ({ text_title_left, text_title_right, text_cont_top, text_cont_bot, class_title, style_title,
    class_t_left, style_t_left, class_t_right, style_t_right, class_content, style_content, class_img, style_img, class_cont_top,
    style_cont_top, class_cont_bot, style_cont_bot, class_container, style_container, class_line, imgsrc, imgalt, children_bottom,
    children_content }) => {

    const container = "flex flex-col justify-between item-center w-full rounded-[24px] px-[16px] bg-[#191E1E] border-[1px] border-solid border-[#7D9596] hover-animate-back";
    const title = "flex felx-row justify-between items-center h-[22px] mt-[16px] ";
    const title_left = "h-full font-koc text-xl font-medium leading-tight text-left text-white hover-animate-back";
    const title_right = "h-full font-koc text-[14px] font-medium leading-tight text-right text-[#FFC0CB] hover-animate-back";
    const whiteline = "w-full mt-[16px]";
    const content = "w-full flex-1 rounded-[8px] flex flex-col justify-center items-center m-auto mt-[16px]";
    const content_text_top = "font-koc text-[14px] font-medium leading-tight text-center text-white";
    const content_text_bot = "font-koc text-[14px] font-normal leading-tight text-center text-[#828A87]";


    return (
        <div className={container + " " + class_container} style={style_container}>

            <div className={title + " " + class_title} style={style_title}>
                <div className={title_left + " " + class_t_left} style={style_t_left}>{text_title_left}</div>
                <button className={title_right + " " + class_t_right} style={style_t_right}>{text_title_right}</button>
            </div>
            <div className={whiteline + " " + class_line} style={{
                border: "1px solid #C6C1AE14"
            }}>

            </div>
            <form className={content + " " + class_content} style={style_content}>
                <button className='w-full flex flex-col justify-center items-center hover-animate-back'>
                    <img src={imgsrc} alt={imgalt} className={class_img} style={style_img} />
                    <div className={content_text_top + " " + class_cont_top} style={style_cont_top}>{text_cont_top}</div>
                </button>
                <div className={content_text_bot + " " + class_cont_bot} style={style_cont_bot}>{text_cont_bot}</div>
                {children_content}
            </form>
            {children_bottom}
        </div>
    )
}

export default NopCard
