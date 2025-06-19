import { useLocation, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";

const Bookmarks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bookmark, setBookmark] = useState<string>(location.pathname);
  

  useEffect(() => {
    setBookmark(location.pathname); //URL 변경 감지해 자동 업데이트
  },[location.pathname]);

  const handleClick = (path: string) => {
    navigate(path);
    //setBookmark(path);
  };

  return (
    <div className="absolute top-20 -right-[52.5px] text-xs flex flex-col gap-0.5">
      <div
        className={bookmark === "/home" ? ActiveBookmark : InactiveBookmark}
        onClick={() => {
          handleClick("/home");
        }}
      >
        목록
      </div>
      <div
        className={bookmark === "/diary" ? ActiveBookmark : InactiveBookmark}
        onClick={() => {
          handleClick("/diary");
        }}
      >
        작성
      </div>
    </div>
  );
};

const ActiveBookmark =
  "flex items-center justify-center font-[S-CoreDream] font-extralight w-[60px] h-9 bg-white border-l-0 border-black border-solid border-[1.5px] rounded-r-md cursor-pointer";

const InactiveBookmark =
  "flex items-center justify-center font-[S-CoreDream] font-extralight w-[60px] h-9 bg-[#298EB5] text-white border-l-0 border-black border-solid border-[1.5px] rounded-r-md cursor-pointer";

export default Bookmarks;
