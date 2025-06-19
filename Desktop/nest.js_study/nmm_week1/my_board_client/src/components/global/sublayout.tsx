import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import Sidebar from "./sidebar";
import useUserStore from "../../store/userStore";


type Props = {
  children?: ReactNode;
};

const Sublayout:React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { logout } = useUserStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <div className="px-2 py-2 relative">
      <header className="flex items-end justify-between h-11">
        <div className="uppercase w-52 text-center font-[NeoDunggeunmo] text-sm">
          Today <span className="text-[#FF0000] ">8789</span> | Total 1234514
        </div>
        <div className="font-[NeoDunggeunmo] text-[#55B2D4] flex w-96 text-lg text-left transform -translate-y- -translate-x-5 ">
          사이좋은 사람들, 싸이정글
        </div>

        
        {/* <div className="flex items-center justify-center font-[S-CoreDream] font-extralight text-xs">
          사생활보호설정 <span className="text-[#ff6400]  ml-1">▶️</span>
        </div> */}
        <div className="flex items-center font-[S-CoreDream] font-extralight text-xs ml-[10px] mt-[-6px] transform -translate-y-1 -translate-x-2">
        <button
      onClick={handleLogout}
      className="text-[11px] border border-[#ccc] rounded px-2 py-[1px] hover:bg-[#efefef]">
      로그아웃
    </button>
  </div>
      </header>
      <div className="flex gap-2">
        <aside className="w-52 h-[430px] bg-white border-2 border-[#999999] rounded-lg">
          <Sidebar />
        </aside>
        <main className=" w-[524px] h-[430px] bg-white border-2 border-[#999999] rounded-lg">
          {children}
        </main>
      </div>
      <Bookmarks />
    </div>
  );
};

export default Sublayout;
