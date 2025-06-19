import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Diary } from '../../types/diary.types'; // ← 경로는 실제 위치로!

type Props = {
  diary: Diary;
};

const Card = ({ diary }: Props) => {
  const date = new Date(Date.parse(diary.createdAt));
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/diary/${diary.number}`);
      }}
      className="flex justify-between items-center w-full px-4 py-4 mb-3 border-[#DDDDDD] border-2 rounded-md cursor-pointer hover:shadow"
    >
      <div className="flex flex-col">
        <div className="w-20 bg-[#55b2d4] text-white font-pretendard text-[10px] text-center rounded-sm py-[1px] mb-1">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </div>
        <p className="text-[#999999] font-bold text-sm mb-1">
          제목: {diary.title}
        </p>
        <p className="text-[12px] text-gray-500">작성자: {diary.writer}</p>
      </div>

      <Link
        to={`/diary/${diary.number}`}
        className="font-scd text-[#343131] underline-offset-2 underline text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        자세히 보러 가기 {">"}
      </Link>
    </div>
  );
};

export default Card;
