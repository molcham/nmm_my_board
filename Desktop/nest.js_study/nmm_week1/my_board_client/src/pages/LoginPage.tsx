import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fffbe7] font-[Pretendard]">
      <h1 className="text-2xl mb-4 font-[NeoDunggeunmo] text-[#55B2D4]">싸이정글 로그인</h1>
      
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
        onClick={handleLogin}
      >
        로그인
      </button>
      
      <button
        onClick={() => navigate("/signup")}
        className="mt-3 text-xs text-[#666] underline font-[S-CoreDream]"
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginPage;
