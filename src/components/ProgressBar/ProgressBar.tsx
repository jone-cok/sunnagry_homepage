import React from 'react'

import verify_back from "@/assets/image/verify_back.png";
import verifyicon from "@/assets/image/verify.png";
import info_ricon from "@/assets/image/Info_right.png";
import info_licon from "@/assets/image/info_left.png";
import info_back from "@/assets/image/info_back.png";

import { IDataCard } from '@/types/Card'

import './ProgressBar.scss';

interface IProgressBar {
    value: number;
    text?: string;
    color_bar?: string;
    imgbacksrc?: string;
    imgbackalt?: string;
    imgsymbolsrc?: string;
    imgsymbolalt?: string;
    class_container?: string;
    style_container?: React.CSSProperties;
    class_bar?: string;
    style_bar?: React.CSSProperties;
    class_symbol?: string;
    style_symbol?: React.CSSProperties;

}


const ProgressBar: React.FC<IProgressBar> = ({ imgbacksrc, imgbackalt, imgsymbolalt, imgsymbolsrc, value, text, color_bar, class_container, style_container, class_symbol, style_symbol, class_bar, style_bar }) => {

    return (
        <div className={"progressbar" + " " + class_container}>
            <div className='progressbar-container'>
                <img src={imgbacksrc} alt='aaa' className={'progressbar-container_img' + " " + class_container} style={style_container} />
            </div>
            <div className={"progressbar-slider" + " " + color_bar + " " + class_bar} style={{ width: `${value}%` }} ></div>
            <div className={"progressbar-text"}>{text}</div>
            <img src={imgsymbolsrc} alt={imgsymbolalt} className={"progressbar-symbol" + " " + class_symbol} style={style_symbol} />
        </div>
    )
}

export default ProgressBar;
