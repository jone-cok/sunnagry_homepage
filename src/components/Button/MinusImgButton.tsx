import React from 'react'

import './MinusImgButton.scss';

interface IMinusImgButton {
    bordercolor?: string;
    onClose?: () => void;
}

const MinusImgButton: React.FC<IMinusImgButton> = ({ bordercolor, onClose }) => {

    const handleClose = () => {
        onClose && onClose();
    }
    return (
        <button className={' flex justify-center items-center w-[42px] h-[42px] rounded-[16px]  px-[8px] py-[10px] border-[1px] border-solid' + ' ' + bordercolor} onClick={handleClose}>
            <div className={' flex justify-center items-center w-[16px] h-[16px] border-[1.5px]  border-solid' + ' ' + bordercolor}>
                <div className={'w-[5.3px] border-[1.5px]  border-solid' + ' ' + bordercolor}>
                </div>
            </div>
        </button>
    )
}

export default MinusImgButton
