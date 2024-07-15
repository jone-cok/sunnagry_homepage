import React, { FC } from 'react'

import { ITimeCard } from '@/types/Card';
import "./TimeCard.scss";
const TimeCard: FC<ITimeCard> = (props): JSX.Element => {
    return (
        <div className={`timecard flex flex-col justify-between items-center flex-wrap m-auto hover-animate`}>
            <h3 className='title'>{props.value}</h3>
            <div className='text'>{props.text}</div>
        </div>
    )
}

export default TimeCard
