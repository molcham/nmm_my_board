import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        <p className="uppercase font-[NeoDunggeunmo] text-[12px]">
          <span className="text-[#55B2D4] text-[18px] mr-1">
            {title}
          </span>
          <span className="text-[#333] text-[13px] font-[S-CoreDream] font-normal">
            {subtitle}
          </span>
        </p>
      </div>
      <hr className="w-full border-t border-[#999999] mt-1" />
    </div>
  );
};

export default Header;
