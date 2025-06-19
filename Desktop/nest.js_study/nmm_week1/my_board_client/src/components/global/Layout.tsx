//import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <div className="absolute z-0">
        <img
          src="/static/background img.svg"
          alt="background"
          width={1200}
          height={600}
          style={{objectFit: 'cover'}}
        />
      </div>

      {/*상자 이미지*/}
      <div className="absolute top-0 left-0 pl-5 pt-5 z-10">
        <img
          src="/static/inner box.svg"
          alt="innerbox"
          width={808}
          height={544}
        />
      </div>

      {/*실제 컨텐츠*/}
      <div className="absolute ml-12 mt-12 z-20 w-[752px] h-[486px] bg-[#EEEEEE] rounded-md ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
