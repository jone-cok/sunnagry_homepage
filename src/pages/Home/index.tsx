import React, { useState } from "react";


import Lefticon from "../../assets/icon/rightmenu.png";
import leftToggleIcon from "../../assets/icon/verify.png";
import centerToggleIcon from "../../assets/icon/info.png"
import messageQuestionIcon from "../../assets/icon/message-question.png"
import plusicon from "../../assets/icon/add-square.png";
import minusicon from "../../assets/icon/minus-square.png"
import moltaniaicon from "../../assets/icon/moltania.png"
import verdentisicon from "../../assets/icon/verdentis.png";
import feedicon from "../../assets/icon/blur.png";
import moreicon from "../../assets/icon/more.png"
import arrowdown from "../../assets/icon/arrow-circle-down.png"
import unlockicon from "../../assets/icon/unlock.png"
import rocketicon from "../../assets/icon/rocketicon.png"
import xpharvest from '@/assets/icon/xpharvest.png';
import rewardicon from '@/assets/icon/reward.png';
import verify_back from "@/assets/image/verify_back.png";
import verifyicon from "@/assets/image/verify.png";
import info_ricon from "@/assets/image/Info_right.png";
import info_licon from "@/assets/image/info_left.png";
import info_back from "@/assets/image/info_back.png";

// picture icons and images
import rank_1 from "@/assets/image/Rank_1.png";
import rank_2 from "@/assets/image/Rank_2.png";
import awardicon from "@/assets/icon/award.png";


import image1 from "../../assets/image/image1.png"
import image2 from "../../assets/image/image2.png"
import image3 from "../../assets/image/image3.png"
import image4 from "../../assets/image/image4.png"
import image5 from "../../assets/image/image5.png"



import TimeCard from "@/components/Card/TimeCard";
import Button from "@/components/Button/Button";
import NumberPad from "@/components/NumberPad/NumberPad";
import PictureCard from "@/components/Card/PictureCard";
import DataCard from '@/components/Card/DataCard';
import GradientBox from "@/components/GradientBox/GradientBox";
import Left from "@/layout/Left";
import Right from "@/layout/Right";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { text } from "stream/consumers";
const Home = () => {

  return (

    <main className="main-container">

      <section className="main-topcontainer">
        <div className="dailyCard relative hover-animate-back">
          <div className="dailyCard-body p-[24px]">
            <h1 className="dailyreward-title">
              <div className="dailyreward-title_div">Daily Reward</div></h1>
            <div className="dailyreward-timer">
              <p className="dailyreward-timer_p">Next Claim Start In</p>
              <div className="dailyreward-timer-time ">
                <TimeCard value={"00"} text={"Hour"} width="w-full" height="h-[87px]" />
                <div className="font-koc font-semibold text-[24px] leading-[29.5px} text-[white]">:</div>

                <TimeCard value={"48"} text={"Minute"} width="w-full" height="h-[87px]" />
                <div className="font-koc font-semibold text-[24px] leading-[29.5px} text-[white]">:</div>

                <TimeCard value={"30"} text={"Second"} width="w-full" height="h-[87px]" />

              </div>
            </div>
            <div className="dailyreward-percent">
              <div className="dailyreward-percent-pro hover-animate">
                <div className="dailyreward-percent-pro_div">%:</div>
                <span className="dailyreward-percent-pro_span ">10%</span>
              </div>
              <div className="dailyreward-percent-coin hover-animate">
                <div className="dailyreward-percent-coin_div">Total:</div>
                <img />
                <span className="dailyreward-percent-coin_span">300</span>
              </div>
            </div>

            <Button formclassName="flex justify-center items-center " formstyle={{
              background: "#282C2C", width: "100%", height: "46px", borderRadius: '16px', padding: '12px 24px 12px 24px', border: '1px solid #191E1E',
              marginTop: '16px',
              fontFamily: "'Clash Grotesk', 'Arial', sans-serif",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "22.14px",
              textAlign: "center"

            }} buttonclassName="w-full" text="Claim" ></Button>
            <form className="dailyreward-bottom hover-animate">
              <label className="dailyreward-bottom_label">What if I misses daily claim</label>
              <a href="#">
                <img src={messageQuestionIcon} className="w-[16px] h-[16px] object-cover" />
              </a>
            </form>

          </div>
        </div>
        <div className="main-topcontainer_bottom">
          <div className="activeWallet hover-animate-back" >
            <div className="activeWallet-top">
              <h3 className="activeWallet-top-title hover-animate">Active Wallet</h3>
              <div className="activeWallet-top-time hover-animate-back">
                <div className="flex flex-col justify-between items-center">
                  <div className="activeWallet-top-time-seg">
                    <NumberPad classNumpad={'w-full h-[30px]'} number={0} />
                    <NumberPad classNumpad={'w-full h-[30px]'} number={9} />
                  </div>
                  <div className="font-koc font-normal text-[14px] text-center leading-[17.2px] text-[#7D9596]">Day</div>
                </div>
                <div className="font-koc font-semibold text-[12px] leading-[14.7px} text-[white]">:</div>
                <div className="flex flex-col justify-between items-center">
                  <div className="activeWallet-top-time-seg">
                    <NumberPad classNumpad={'w-full h-[30px]'} number={1} />
                    <NumberPad classNumpad={'w-full h-[30px]'} number={8} />
                  </div>
                  <div className="font-koc font-normal text-[14px] text-center leading-[17.2px] text-[#7D9596]">Hou</div>
                </div>
                <div className="font-koc font-semibold text-[12px] leading-[14.7px} text-[white]">:</div>
                <div className="flex flex-col justify-between items-center">

                  <div className="activeWallet-top-time-seg">
                    <NumberPad classNumpad={'w-full h-[30px]'} number={2} />
                    <NumberPad classNumpad={'w-full h-[30px]'} number={3} />
                  </div>
                  <div className="font-koc font-normal text-[14px] text-center leading-[17.2px] text-[#7D9596]">Min</div>
                </div>
                <div className="font-koc font-semibold text-[12px] leading-[14.7px} text-[white]">:</div>
                <div className="flex flex-col justify-between items-center">
                  <div className="activeWallet-top-time-seg">
                    <NumberPad classNumpad={'w-full h-[30px]'} number={4} />
                    <NumberPad classNumpad={'w-full h-[30px]'} number={7} />
                  </div>
                  <div className="font-koc font-normal text-[14px] text-center leading-[17.2px] text-[#7D9596]">Sec</div>
                </div>
              </div>
            </div>
            <div className="activeWallet-moreinfo_btn w-full">
              <Button formclassName="flex justify-center items-center" formstyle={{
                background: "#282C2C", width: "100%", height: "46px", borderRadius: '16px', padding: '12px 24px 12px 24px', border: '1px solid #191E1E',
                marginTop: '16px',
                fontFamily: "'Clash Grotesk', 'Arial', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "22.14px",
                textAlign: "center",
                color: "#C6C1AE"
              }}
                buttonclassName="ml-[10px]"

                iconsrc={arrowdown} iconalt="arrowdown"
                text="More info" >

              </Button>
            </div>

            <div className="activeWallet-moreinfo_content w-full rounded-[12px] border-2 border-solid mt-[16px] p-[16px] gap-[16px] bg-[#191E1E] border-[#C6C1AE] border-opacity-[8]"
              style={{ boxShadow: "0px 0px 32px 0px #00000052 inset" }}>
              <div className="w-full flex flex-row justify-between hover-animate-back">
                <div className="font-koc font-normal text-[14px] text-[#7D9596] leading-[17.2px]">
                  Lock amount
                </div>
                <div className="font-koc font-medium text-[14px] text-[#C6C1AE] leading-[17.2px] ">
                  2,2039023 BL2 ETH
                </div>
              </div>

              <div className="w-full flex flex-row justify-between mt-[26.5px] hover-animate-back">
                <div className="font-koc font-normal text-[14px] text-[#7D9596] leading-[17.2px]">
                  Lock period
                </div>
                <div className="font-koc font-medium text-[14px] text-[#C6C1AE] leading-[17.2px] ">
                  14 days
                </div>
              </div>

              <div className="flex flex-row justify-between items-center w-full mt-[26.5px] hover-animate-back">
                <div className="font-koc font-normal text-[14px] text-[#7D9596] leading-[17.2px]">
                  Reward
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className=" w-[45px] h-[25px] flex flex-row justify-center items-center rounded-[16px] px-[8px] py-[4px] gap-[4px] border border-solid border-[#828A87] bg-[#111712] ">
                    <img src={rewardicon} alt="aa" className="w-[16px] h-[16px] object-cover" />
                    <div className="font-koc font-medium text-[14px] leading-[17.2px] text-center text-[#C6C1AE]">
                      3
                    </div>
                  </div>
                  <div className="w-[100px] h-[25px] flex flex-row justify-center items-center border border-solid border-[#828A87] bg-[#111712]">
                    <img src={leftToggleIcon} alt="aa" className="w-[16px] h-[16px] object-cover" />
                    <div className="font-koc font-medium text-[14px] leading-[17.2px] text-[#69BE90] text-center">+50xp/day</div>
                  </div>
                </div>
              </div>

            </div>
            <Button formclassName="flex justify-center items-center"
              formstyle={{
                background: "#282C2C", width: "100%", height: "46px",
                borderRadius: '16px', padding: '12px 24px 12px 24px', border: '1px solid #191E1E',
                marginTop: '16px',
                fontFamily: "'Clash Grotesk', 'Arial', sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "22.14px",
                textAlign: "center"
              }}
              buttonclassName="ml-[10px]"
              iconsrc={unlockicon} iconalt="unlock"
              text="Unlock" >

            </Button>
            <Button formclassName="flex justify-center items-center"
              formstyle={{
                background: "#282C2C", width: "100%", height: "46px", borderRadius: '16px', padding: '12px 24px 12px 24px', border: '1px solid #191E1E',
                marginTop: '16px',
                fontFamily: "'Clash Grotesk', 'Arial', sans-serif",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "22.14px",
                textAlign: "center", marginBottom: "24px",
                backgroundColor: " #FFC0CB",
              }}
              buttonclassName="ml-[10px]"
              iconsrc={rocketicon} iconalt="rocket"

              text="Boost" >

            </Button>
          </div>
          <div className="activexppot hover-animate-back">
            <div className="activexppot-title hover-animate-back">Active XP Pot</div>
            <form className="activexppot-input hover-animate-back">
              <input className="activexppot-input_input" type="text" placeholder="0 xp" />
            </form>
          </div>
        </div>
      </section>

      <section className="main-botcontainer">

        <PictureCard imgsrc={image1} imgalt="image1" show_icon_top={'flex'} show_text_bot={'flex'} imgsrc_top={rank_1} iconsrc_bot_left={awardicon} text_bot_left="+10%" text_bot_right="106"
          children={<DataCard cardclassName="flex-1" topiconsrc={moltaniaicon} topiconalt={"moltaniation"} topicontitle="Moltania" title="Lukhoth"
            moreiconsrc={moreicon} level={40} buttoniconsrc={feedicon} buttonicontext="Feed" backcolor="grayback" bordercolor="grayborder" />}>
        </PictureCard>
        <PictureCard imgsrc={image2} imgalt="image1" show_icon_top={'flex'} show_text_bot={'flex'} imgsrc_top={rank_1} iconsrc_bot_left={awardicon} text_bot_left="+10%" text_bot_right="106"
          children={<DataCard cardclassName="flex-1" topiconsrc={moltaniaicon} topiconalt={"moltaniation"} topicontitle="Moltania" title="Hairmainc"
            moreiconsrc={moreicon} level={80} buttoniconsrc={feedicon} buttonicontext="Feed" backcolor="grayback" bordercolor="grayborder" />}>
        </PictureCard>
        <PictureCard imgsrc={image3} imgalt="image1" show_icon_top={'flex'} show_text_bot={'flex'} imgsrc_top={rank_1} iconsrc_bot_left={awardicon} text_bot_left="+10%" text_bot_right="106"
          children={<DataCard cardclassName="flex-1" topiconsrc={moltaniaicon} topiconalt={"moltaniation"} topicontitle="Moltania" title="Caterpic"
            moreiconsrc={moreicon} level={80} buttoniconsrc={feedicon} buttonicontext="Feed" backcolor="grayback" bordercolor="grayborder" />}>
        </PictureCard>
        <PictureCard imgsrc={image4} imgalt="image1" show_icon_top={'flex'} show_text_bot={'flex'} imgsrc_top={rank_1} iconsrc_bot_left={awardicon} text_bot_left="+10%" text_bot_right="106"
          children={<DataCard cardclassName="flex-1" topiconsrc={moltaniaicon} topiconalt={"moltaniation"} topicontitle="Moltania" title="Roots"
            moreiconsrc={moreicon} level={80} buttoniconsrc={feedicon} buttonicontext="Feed" backcolor="grayback" bordercolor="grayborder" />}>
        </PictureCard>
        <PictureCard imgsrc={image5} imgalt="image1" show_icon_top={'flex'} show_text_bot={'flex'} imgsrc_top={rank_1} iconsrc_bot_left={awardicon} text_bot_left="+10%" text_bot_right="106"
          children={<DataCard cardclassName="flex-1" topiconsrc={verdentisicon} topiconalt={"moltaniation"} topicontitle="Verdentis" title="Roots"
            moreiconsrc={moreicon} level={80} buttoniconsrc={feedicon} buttonicontext="Feed" backcolor="greenback" fontcolor="greenfont" bordercolor="greenborder" />} >
        </PictureCard>
        <PictureCard cardclassName="border border-dashed" imgclassName="hidden" show_icon_top={'hidden'} show_text_bot={'hidden'}
          children={
            <DataCard level={0} children={<div className="flex flex-col justify-center items-center hover-animate-back"><img src={plusicon} alt="add" style={{ width: "24px", height: "24px", objectFit: "contain" }} /><div style={{
              marginTop: "8px",
              fontFamily: "'Clash Grotesk','Courier New', Courier, monospace",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19.68px",
              textAlign: "center",
              color: "white"

            }} >Add Munchable</div></div>} cardclassName={"flex flex-col justify-center items-center w-full "} divstyle={{ display: "none" }}></DataCard>}>

        </PictureCard>
      </section>
    </main >

  );
};

export default Home;
