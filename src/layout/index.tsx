import React, { useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
// import Header from "./Header";

import Left from "./Left";
import Right from "./Right";
import Header from "./Header";

export default function Layout() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setIsShowSidebar(true);
  }
  const handleHideSidebar = () => {
    setIsShowSidebar(false);
  }
  return (
    <div className="bg-[#111712] flex flex-row justify-between rounded-none" id="layout">
      <aside
        className={`fixed top-0 left-0 z-[100] rounded-none ${isShowSidebar ? 'opacity-100' : 'opacity-0'} ${isShowSidebar ? 'block' : 'hidden'} p-4 bg-green-500 text-white rounded`}
      >
        <div className=" w-full h-full bg-[#000] opacity-50 backdrop-opacity-72 backdrop-blur-md"></div>
        <Left class_left_show="sticky top-0 block fixed top-0 left-0  bg-[#111712] z-[110]" isSmallSidebar={true} onCloseSidebar={handleHideSidebar} />
      </aside>

      <Left class_left_show="sticky top-0 show_left" isSmallSidebar={false} onCloseSidebar={handleHideSidebar} />


      <div className="maincontainer relative flex-1 flex flex-col justify-between items-center">
        <Header showSidebar={handleShowSidebar} />
        <div className="w-full">
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>


      <Right class_right="sticky top-0 show_right" />

    </div>
  );
}
