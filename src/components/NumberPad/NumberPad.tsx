import React from 'react'
interface INumPad {
    number: number;
    classNumpad?: string;
    styleNumpad?: React.CSSProperties;

}
const NumberPad: React.FC<INumPad> = ({ number, classNumpad, styleNumpad }) => {
    return (
        <div className={'rounded-[8px]  border-[0.5px]  px-[6px] py-[8px] gap-[16px] bg-[#0A0B0B]  border-[#7D95963D] border-solid font-koc font-medium text-[14px] leading-[17px] text-[white]' + ' ' + classNumpad} style={styleNumpad}>
            {number}
        </div >
    )
}

export default NumberPad
