import React, { FC, useState, useEffect, useRef } from 'react'

import { ITimeCard } from '@/types/Card';
import "./TimeCard.scss";
const TimeCard: FC<ITimeCard> = (props): JSX.Element => {


    const [timeLeft, setTimeLeft] = useState(Number(props.value));

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const width = 100;
    const height = 80;
    const borderRadius = 16;
    const circumference = 2 * (width + height - 4 * borderRadius) + Math.PI * borderRadius * 2;
    const strokeDashoffset = circumference * (timeLeft / Number(props.value));
    return (
        <div className={`relative timecard  flex flex-col justify-between items-center flex-wrap hover-animate`}>
            {/* <h3 className='title'>{props.value}</h3>
            <div className='text'>{props.text}</div> */}
            {/* <div className='absolute inset-0 mx-[4.3px] my-[4.3px] border border-solid border-[#FECB5B]'></div> */}

            <svg className='w-full' width={width + 10} height={height + 10}>
                <path
                    d={`
                            M ${borderRadius + 5},5
                            H ${width + 5 - borderRadius}
                            A ${borderRadius},${borderRadius} 0 0 1 ${width + 5},${borderRadius + 5}
                            V ${height + 5 - borderRadius}
                            A ${borderRadius},${borderRadius} 0 0 1 ${width + 5 - borderRadius},${height + 5}
                            H ${borderRadius + 5}
                            A ${borderRadius},${borderRadius} 0 0 1 5,${height + 5 - borderRadius}
                            V ${borderRadius + 5}
                            A ${borderRadius},${borderRadius} 0 0 1 ${borderRadius + 5},5
                            Z
                            `}
                    stroke={'#FECB5B'}
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                        transition: 'stroke-dashoffset 1s linear'
                    }}
                />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className='title'>{timeLeft}</h3>
                <div className='text'>{props.text}</div>
            </div>

        </div>

    )
}

export default TimeCard
