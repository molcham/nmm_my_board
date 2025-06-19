import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useUserStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    signup(username, password);
    alert("회원가입이 완료되었습니다!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fffbe7] font-[Pretendard]">
      <h1 className="text-2xl mb-4 font-[NeoDunggeunmo] text-[#55B2D4]">싸이정글 회원가입</h1>

      <input
        className="mb-2 p-2 border border-[#ABABAB] w-64 rounded-md text-sm font-[S-CoreDream]"
        placeholder="아이디"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="mb-2 p-2 border border-[#ABABAB] w-64 rounded-md text-sm font-[S-CoreDream]"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-[#FF6400] text-white py-1 px-5 rounded text-sm font-[NeoDunggeunmo]"
        onClick={handleSignup}
      >
        가입하기
      </button>

      <button
        onClick={() => navigate("/login")}
        className="mt-3 text-xs text-[#666] underline font-[S-CoreDream]"
      >
        로그인 화면으로 돌아가기
      </button>
    </div>
  );
};

export default SignupPage;
