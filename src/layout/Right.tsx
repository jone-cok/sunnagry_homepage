import React from 'react'

import people from '@/assets/image/people.png';
import activity from '@/assets/image/activity_feed.png';
import livechaticon from "@/assets/icon/livechat.png";

import NopCard from '@/components/Card/NopCard'

interface IRgith {
  class_right?: string;
}
const Right: React.FC<IRgith> = ({ class_right }) => {
  return (
    <div className={"w-[272px] m-[24px] flex flex-col" + " " + class_right}>
      <NopCard class_container="h-[550px]" text_title_left='Activity Feed' text_cont_top='No Activity Yet'
        text_cont_bot='Your activity transaction wil show here' imgsrc={activity} imgalt="activity" />
      <NopCard class_container='h-[330px] mt-[24px]' text_title_left='PeoPle' text_title_right='See All'
        text_cont_top='Find the people here soon' text_cont_bot='People will show here' imgsrc={people} imgalt='people' />
      <div className='w-full h-[104px] mt-[24px] relative hover-animate'>
        <form className='absolute bottom-0 right-0 rounded-[8px] border border-[#C6C1AE] px-[16px] py-[12px] bg-[#C6C1AE] shadow-custom2'>
          <button className='w-full h-full flex flex-row justify-center items-center '>
            <img src={livechaticon} alt="chat" className='w-[32px] h-[32px]' />
            <div className='font-koc font-medium text-[18px] leading-[22px] text-[#111712] ml-[5px]'>Live Chat</div>
            <div className='w-[5px] h-[5px] rounded-[100px] bg-[#EF4A4C] ml-[13px]'></div>
          </button>
        </form>
      </div>

    </div >
  )
}

export default Right
