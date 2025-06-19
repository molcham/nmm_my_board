import React from "react";
import { useNavigate } from "react-router-dom";
import usePostStore from "../store/postStore";
import useUserStore from "../store/userStore"; // ✅ currentUser 가져오기
import Layout from "../components/global/Layout";
import Sublayout from "../components/global/sublayout";

const PostListPage = () => {
  const navigate = useNavigate();
  const { posts, deletePost } = usePostStore();
  const { currentUser } = useUserStore(); // ✅ 현재 로그인한 사용자

  return (
    <Layout>
      <Sublayout>
        <div className="p-5 font-[Pretendard] text-sm">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-[NeoDunggeunmo]">📘 게시물 목록</h1>
            <button
              className="px-3 py-[2px] bg-[#D9D9D9] hover:bg-[#666666] hover:text-white text-xs rounded-md font-[NeoDunggeunmo]"
              onClick={() => navigate("/diary")}
            >
              ✍ 글쓰기
            </button>
          </div>
          {posts.length === 0 && (
            <p className="text-gray-400 text-center text-xs mt-8">아직 게시물이 없습니다.</p>
          )}
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-300 p-3 mb-3 rounded bg-white shadow-sm hover:bg-gray-50 relative group"
            >
              <div
                onClick={() => navigate(`/post/${post.id}`)}
                className="cursor-pointer"
              >
                <h2 className="font-semibold text-[#298EB5]">{post.title}</h2>
                <p className="text-xs text-gray-600">{post.content.slice(0, 30)}...</p>
              </div>

              <p className="text-[10px] text-gray-400 mt-1">
                ✍ 작성자: {post.writer || currentUser || "익명"}
              </p>
              
              <button
                onClick={() => deletePost(post.id)}
                className="absolute top-1 right-2 text-[11px] text-red-500 hover:text-red-700 hidden group-hover:block"
              >
                🗑 삭제
              </button>
            </div>
          ))}
        </div>
      </Sublayout>
    </Layout>
  );
};

export default PostListPage;
