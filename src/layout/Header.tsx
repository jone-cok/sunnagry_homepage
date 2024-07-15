import React, { useState, useEffect } from "react";

import Lefticon from "@/assets/icon/rightmenu.png";
import xpharvest from '@/assets/icon/xpharvest.png';
import verify_back from "@/assets/image/verify_back.png";
import verifyicon from "@/assets/image/verify.png";
import info_ricon from "@/assets/image/Info_right.png";
import info_licon from "@/assets/image/info_left.png";
import info_back from "@/assets/image/info_back.png";
import GradientBox from "@/components/GradientBox/GradientBox";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

interface IHeader {
  // class_left_show?: string;
  // logoimg_src?: string;
  // isSmallSidebar?: boolean;
  showSidebar: () => void;
}

const Header: React.FC<IHeader> = ({ showSidebar }) => {


  //================handle backdrop header =================//
  const [hasBackdrop, setHasBackdrop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasBackdrop(true);
    } else {
      setHasBackdrop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //================handle show sidebar =================//
  const handleShowSidebar = () => {
    showSidebar();
  }


  return (
    <header className={`sticky top-0 z-[200] ${hasBackdrop ? 'bg-[#ffffff] bg-opacity-10 backdrop-blur-[5px] ' : ''}`} id='headersticky'>
      <div className="w-full">
        <div className="md:hidden w-full">
          <img src={Lefticon} alt="lefticon" onClick={handleShowSidebar} />

        </div>

        <div className="hidden md:flex md:flex-row justify-end items-center w-full">
          <div className="w-full min-w-[245px] max-w-[335px]">
            <GradientBox showBox={true} cardclassName='h-[69px]  gradientback mt-0' iconsrc={xpharvest} iconalt='ach'
              text_centertop='XP Harvest' divclassNamebot='w-full pl-[8px]' text_centerbot="+126 XP"
              children={<div className="w-[81px] h-[40px] rounded-[8px] py-[10px] px-[16px] bg-[#69BE90] shadow-custom">CLAIM</div>} />
          </div>
        </div>
      </div>

      <ProgressBar class_container="hover-animate" value={40} color_bar="greenbar" imgsymbolsrc={verifyicon} imgbacksrc={verify_back} text="1,560 XP" />
      {/* greenbar yellowbar redbar */}
      <ProgressBar class_container="hover-animate" value={40} color_bar="yellowbar" imgsymbolsrc={info_ricon} imgbacksrc={info_back} text="2300" />
      <div className="w-full flex justify-center items-center">
        <ProgressBar class_container="hidden xlg:flex hover-animate " value={40} color_bar="redbar" imgsymbolsrc={info_licon} imgbacksrc={info_back} />
        <div className="toprightbtn hover-animate "></div>
      </div>
    </header >
  )
};

export default Header;
