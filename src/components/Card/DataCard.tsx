import React from 'react'

import minuicon from '@/assets/icon/minus-square.png';

import { IDataCard } from '@/types/Card'

import '@/styles/PictureCard.scss';

const DataCard: React.FC<IDataCard> = ({ cardclassName, cardstyle, divclassName, divstyle, imgclassName, imgstyle, topiconalt, topicontitle, topiconsrc,
    level, buttoniconsrc, buttonicontext, minusiconsrc, moreiconsrc, text, title, children }) => {

    const strlevel = level.toString();
    return (
        <div className={cardclassName} style={cardstyle} >
            <div className={'datacard' + " " + divclassName} style={divstyle}>
                <div className='datacard-top'>
                    <div className='datacard-top-left hover-animate-back'>
                        <a href='#' className='datacard-top-left-title'>
                            <img className='datacard-top-left-title_icon' src={topiconsrc} alt={topiconalt} />
                            <div className='datacard-top-left-title_text'>{topicontitle}</div>
                        </a>
                        <div className='datacard-top-left-content'>{title}</div>
                    </div>
                    <a href='#'>
                        <img src={moreiconsrc} alt="more" className='atacard-top-right hover-animate-back' />
                    </a>
                </div>
                <div className='datacard-center  hover-animate-back'>
                    <div className='datacard-center-level'>
                        <div className='datacard-center-level_div'>Level</div>
                        <span className='datacard-center-level_span'>{level}  /100</span>
                    </div>
                    <div className='datacard-center-levelbar'>
                        <div className='datacard-center-levelbar_prog' style={{ width: `${level}%` }}> </div>
                        <div className='datacard-center-levelbar_back'> </div>
                    </div>

                </div>
                <div className='datacard-bottom'>
                    <button className='datacard-bottom-left  hover-animate'>
                        <img className='datacard-bottom-left_img' src={buttoniconsrc} alt="button" />
                        <span className='datacard-bottom-left_span'>{buttonicontext}</span>
                    </button>
                    <a href='#' className=' hover-animate'>
                        <img src={minuicon} alt='minus' className="datacard-bottom-right" />
                    </a>
                </div>
            </div >
            {children}

        </div >
    );
}

export default DataCard;
