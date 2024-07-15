import React from 'react'



import streaksicon from "../assets/icon/streaks.png";
import acchieveicon from "../assets/icon/achievement.png";
import snuggreyicon from "../assets/icon/snuggery.png";
import collectionicon from "../assets/icon/collection.png";
import munchadexicon from "../assets/icon/munchadex.png";
import activityicon from "../assets/icon/activity.png";
import leaderboardicon from "../assets/icon/leaderboard.png";
import marketplaceicon from "../assets/icon/macketplace.png";
import battleicon from "../assets/icon/battle.png";
import profileicon from "../assets/icon/profile.png";
import refertofriendicon from "../assets/icon/refertofriend.png";
import settingicon from "../assets/icon/setting.png";
import twittericon from "../assets/image/twitter.png";
import descordicon from "../assets/image/descord.png";

import logo from "../assets/image/Logo.png"
import smallLogo from "@/assets/icon/smallsidebarlogo.png";
import closebtn from "@/assets/icon/closebtn.png";

import './Left.scss';

import GradientBox from "@/components/GradientBox/GradientBox";
import NoBorderBackBox from '@/components/GradientBox/NoBorderBackBox';
import { log } from 'console';
import { func } from 'prop-types';

interface ILeft {
    class_left_show?: string;
    logoimg_src?: string;
    isSmallSidebar?: boolean;
    onCloseSidebar: () => void;
}
const Left: React.FC<ILeft> = ({ class_left_show, isSmallSidebar, onCloseSidebar }) => {

    const handleHideSidebar = () => {
        onCloseSidebar();
    }
    return (
        <aside className={'leftsidebar' + ' ' + class_left_show}>
            <div className={'flex  flex-row justify-between items-center px-[24px] mt-[24px]'}>
                <a href='/' className='hover-animate'>
                    <img src={`${isSmallSidebar ? smallLogo : logo}`} alt="logo" className={`'leftsidebar-logo' + ' ' + ${isSmallSidebar ? "w-[57px] h-[40px]" : "w-[142px] h-[56px]"}`} />
                </a>
                <img src={closebtn} alt="logo" className={`w-[48px] h-[46px] object-cover' + " " + ${isSmallSidebar ? "block" : "hidden"}`} onClick={handleHideSidebar} />
            </div>
            <div className='leftsidebar-top'>
                <GradientBox showBox={true} cardclassName='h-[48px] gradientback' iconsrc={streaksicon} iconalt='streak' text_label='Coming Soon' setlabelback='labelgraback'
                    text_centertop='Streaks' text_centerbot='Daily xp for you' divclassNamebot='block' />
                <GradientBox showBox={true} cardclassName='h-[48px] gradientback' iconsrc={acchieveicon} iconalt='ach' text_label='6/10' setlabelback='labelgraback'
                    text_centertop='Achievements' text_centerbot='Schnibble Events' divclassNamebot='block' />
            </div>
            <div className='leftsidebar-center'>
                <label className='w-full font-koc text-[white]'>Menu</label>
                <GradientBox showBox={true} cardclassName='h-[48px] grayback' iconsrc={snuggreyicon} iconalt='snug' text_centertop='Snuggery' />
                <GradientBox showBox={true} cardclassName='h-[48px] grayback' iconsrc={collectionicon} iconalt='snug' text_centertop='Collections' />
                <GradientBox showBox={!isSmallSidebar} cardclassName='h-[48px] grayback' iconsrc={munchadexicon} iconalt='snug' text_centertop='Munchadex' />
                <GradientBox showBox={false} cardclassName='h-[48px] grayback' iconsrc={activityicon} iconalt='snug' text_centertop='Activity' />
                <GradientBox showBox={true} cardclassName='h-[48px] grayback' iconsrc={leaderboardicon} iconalt='snug' text_centertop='Leader Board' />
                <GradientBox showBox={true} cardclassName='h-[48px] grayback' iconsrc={marketplaceicon} iconalt='snug' text_centertop='Marketplace' text_label='soon' setlabelback='labelgraback' />
                <GradientBox showBox={true} cardclassName='h-[48px] grayback' iconsrc={battleicon} iconalt='snug' text_centertop='Battle' text_label='soon' setlabelback='labelgraback' />


            </div>
            <div className='leftsidebar-spliteline'>

            </div>
            <div className='leftsidebar-bottom'>
                <GradientBox showBox={true} iconsrc={profileicon} iconalt='snug' text_centertop='Profile' labelclassName='hidden' cardclassName='h-[24px] hover-animate' />
                <GradientBox showBox={true} iconsrc={refertofriendicon} iconalt='snug' text_centertop='Refer to Friend' labelclassName='hidden justify-start' cardclassName='h-[24px] hover-animate' />
                <GradientBox showBox={true} iconsrc={settingicon} iconalt='snug' text_centertop='Setting' labelclassName='hidden justify-start px-0' cardclassName='h-[24px] hover-animate' />
            </div>
            <div className='w-full'>
                <ul className='leftsidebar-botlinks'>
                    <li className='hover-animate'>
                        <a href='#'>
                            <img src={twittericon} alt='t' />
                        </a>
                    </li>
                    <li className='hover-animate'>
                        <a href='#'>
                            <img src={descordicon} alt='t' className='ml-[16px]' />
                        </a>
                    </li>
                </ul>


            </div>
        </aside>
    )
}

export default Left
