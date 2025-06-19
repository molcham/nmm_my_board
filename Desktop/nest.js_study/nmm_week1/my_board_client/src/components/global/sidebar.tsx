//import Image from "next/image";
import React from "react";
import useUserStore from "../../store/userStore";

//const { currentUser } = useUserStore();

const Sidebar = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div>
        <img
          src="/static/profile.png"
          alt="profile"
          width={144}
          height={124}
        />
        <hr className="my-2 border-dashed border-black" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="/static/name.svg" alt="name" width={12} height={12} />
            <div className="font-[S-CoreDream] text-[10px]">이름 : {currentUser ?? "익명"}</div>
          </div>
          <div className="flex gap-2">
            <img src="/static/phone.svg" alt="phone" width={12} height={12} />
            <div className="font-[S-CoreDream] text-[10px]">Phone : 비밀</div>
          </div>
          <div className="flex gap-2">
            <img src="/static/mail.svg" alt="mail" width={12} height={12} />
            <div className="font-[S-CoreDream] text-[10px]">E-mail : 비밀</div>
          </div>
          <div className="flex gap-2">
            <img src="/static/star.svg" alt="star" width={12} height={12} />
            <div className="font-[S-CoreDream] text-[10px]">인스타그램 : 비밀</div>
          </div>
        </div>
      </div>
      <div className="w-full pt-24 px-5 font-[Pretendard] text-sm">
        <p className="font-bold">오늘의 기분</p>
        <select className="w-full bg-[#DDDDDD]">
          <option>기쁨 😍</option>
          <option>우울 ☹️</option>
          <option>졸림 😴</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
